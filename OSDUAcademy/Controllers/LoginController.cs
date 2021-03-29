﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
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

        private readonly IConfiguration _configuration;

        public LoginController(IMongoClient client, IConfiguration configuration)
        {
            var database = client.GetDatabase("osdu_academy");
            _userCollection = database.GetCollection<User>("users");
            _configuration = configuration;
        }

        // TODO: Attempt to log back in when the user enters for the first time. If not, log them out
        
        [AllowAnonymous]
        [HttpPost]
        public IActionResult LogIn([FromBody] LoginData request)
        {
            var userFields = UserFieldBuilder
                .Include(u => u.Email)
                .Include(u => u.Password)
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
                if (user.Password == request.Password) // TODO: Do not store raw password in the future
                {
                    user.Password = null;
                    data["user"] = user;
                    
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