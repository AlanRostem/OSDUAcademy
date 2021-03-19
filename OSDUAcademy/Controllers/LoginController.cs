using System;
using System.ComponentModel.DataAnnotations;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace OSDUAcademy.Controllers
{
    [Controller]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        public class LoginData
        {
            [Required]
            public string Email { get; set; }
    
            [Required]
            public string Password { get; set; }
        }
        
        [HttpPost]
        public bool Post([FromBody] LoginData content)
        {
            return false;
        }
    }
}