using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using MongoDB;
using MongoDB.Bson;
using MongoDB.Driver;
using OSDUAcademy.DataTypes;

namespace OSDUAcademy.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CourseController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<CourseController> _logger;
        private static readonly string DbConnectionStr = "mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb";
        
        public CourseController(ILogger<CourseController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Course> Get()
        {
            var client = new MongoClient(DbConnectionStr);
            var database = client.GetDatabase("osdu_academy");
            var collection = database.GetCollection<Course>("courses");
            return collection.Find(s=> true /*s.AvgRating > 3f*/).ToList();
        }
    }
}
