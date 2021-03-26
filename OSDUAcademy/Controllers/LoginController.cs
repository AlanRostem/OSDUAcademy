using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using OSDUAcademy.DataTypes;

namespace OSDUAcademy.Controllers
{
    [Controller]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        public class LoginData
        {
            [Required] public string Email { get; set; }

            [Required] public string Password { get; set; }
        }

        private static readonly ProjectionDefinitionBuilder<User> UserFieldBuilder = Builders<User>.Projection;

        private readonly IMongoCollection<User> _userCollection;

        public LoginController(IMongoClient client)
        {
            var database = client.GetDatabase("osdu_academy");
            _userCollection = database.GetCollection<User>("users");
        }

        [HttpPost]
        public Dictionary<string, object> Post([FromBody] LoginData content)
        {

            var list = _userCollection
                .Find(u => u.Email == content.Email)
                .ToList();

            var data = new Dictionary<string, object>
            {
                ["success"] = false
            };

            if (list.Count != 0)
            {
                var user = list[0];
                if (user.Password == content.Password)
                {
                    user.Password = null;
                    data["success"] = true;
                    data["user"] = user;
                }
            }

            return data;
        }
        
        /*[AllowAnonymous]
        [HttpPost]
        public IActionResult RequestToken([FromBody] LoginData request)
        {
            if (request.Email == "jens.olsen@email.com" && request.Password == "jens123")
            {
                var claims = new[]
                {
                    new Claim(ClaimTypes.Name, request.Email)
                };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["SecurityKey"]));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "https://demo.identityserver.io",
                    audience: "http://localhost:5000",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: creds);

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }

            return BadRequest("Could not verify username and password");
        }*/
    }
}