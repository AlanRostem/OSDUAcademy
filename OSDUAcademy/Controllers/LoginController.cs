using System;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;

public class LoginData
{
    public string Email { get; set; }
    public string Password { get; set; }
}

namespace OSDUAcademy.Controllers
{
    [Controller]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public string Post(HttpRequestMessage content)
        {
            Console.WriteLine("Content: " + content);
            if (content.Content != null)
                return "success!";
            return "fail...";
        }
    }
}