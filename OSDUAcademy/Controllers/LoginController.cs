using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using Newtonsoft.Json.Linq;
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
    }
}