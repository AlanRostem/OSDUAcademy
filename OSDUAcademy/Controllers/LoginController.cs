using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using OSDUAcademy.DataTypes;

namespace OSDUAcademy.Controllers
{
    /// <summary>
    /// Controller for user login credentials. Contains helper functions for cryptographic
    /// algorithms used in hashing passwords. 
    /// </summary>
    [Controller]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        /// <summary>
        /// Mapping class for json-data in this form:
        /// {
        ///     "email": "email@example.com",
        ///     "password": "rawPassword"
        /// }
        /// It is used as input data from the user
        /// </summary>
        public class LoginData
        {
            [Required] public string Email { get; set; }

            [Required] public string Password { get; set; }
        }

        private static readonly ProjectionDefinitionBuilder<User> UserFieldBuilder = Builders<User>.Projection;

        private readonly IMongoCollection<User> _userCollection;

        private readonly IConfiguration _configuration;

        public LoginController(IMongoClient client, IConfiguration configuration)
        {
            var database = client.GetDatabase("osdu_academy");
            _userCollection = database.GetCollection<User>("users");
            _configuration = configuration;
        }

        /// <summary>
        /// This function is used to generate a salt for the password.
        /// It is yet to be used anywhere in the code, but has been
        /// used for the database to generate salts for passwords. 
        /// </summary>
        /// <returns></returns>
        public static string GenerateSalt()
        {
            byte[] salt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }

            return Convert.ToBase64String(salt);
        }
        
        /// <summary>
        /// Generate a hash using a salt and an arbitrary string.
        /// </summary>
        /// <param name="salt">An arbitrary base 64 string</param>
        /// <param name="original">The string to be hashed</param>
        /// <returns></returns>
        public static string GenerateHashedString(string salt, string original)
        {
            return Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: original,
                salt: Convert.FromBase64String(salt),
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10_000,
                numBytesRequested: 256 / 8));
        }
        
        /// <summary>
        /// Handle a user's login. This function looks up in the database if the given
        /// email exists in the database and then hashes the input password to compare it
        /// against the hash present in the database. If the login was successful, the user
        /// is granted a Jwt-token that lets the user stay logged in for 2 hours maximum. 
        /// </summary>
        /// <param name="request">User login input data</param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost]
        public IActionResult LogIn([FromBody] LoginData request)
        {
            var userFields = UserFieldBuilder
                .Include(u => u.Email)
                .Include(u => u.Password)
                .Include(u => u.Salt)
                .Include(u => u.FirstName)
                .Include(u => u.LastName);
            
            var list = _userCollection
                .Find(u => u.Email == request.Email)
                .Project<User>(userFields)
                .ToList();

            var data = new Dictionary<string, object>();
            if (list.Count != 0)
            {
                var user = list[0];

                var salt = user.Salt;
                var hashed = GenerateHashedString(salt, request.Password);

                if (user.Password == hashed)
                {
                    data["user"] = new Dictionary<string, object>
                    {
                        ["email"] = user.Email,
                        ["firstName"] = user.FirstName,
                        ["lastName"] = user.LastName,
                    };
                    
                    var claims = new[]
                    {
                        new Claim(ClaimTypes.Name, request.Email)
                    };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Secret"]));
                    var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                    
                    var token = new JwtSecurityToken(
                        issuer: "http://localhost:5000",
                        audience: "http://localhost:5000",
                        claims: claims,
                        expires: DateTime.Now.AddHours(2),
                        signingCredentials: credentials);
                    
                    data["token"] = new JwtSecurityTokenHandler().WriteToken(token);
                    return Ok(data);
                }
            }
            
            return BadRequest();
        }

        /// <summary>
        /// In the event that the user has a Jwt-token stored locally, the front-end
        /// will ping this route to check that token's validity and report back with
        /// a corresponding HTTP response. 
        /// </summary>
        /// <returns></returns>
        [HttpGet("check")]
        public IActionResult CheckLogin()
        {
            if (User.Identity == null)
                return BadRequest();

            if (!User.Identity.IsAuthenticated)
                return BadRequest();
            return Ok();
        }
    }
}