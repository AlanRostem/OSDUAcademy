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
        private readonly IMongoCollection<Course> _courseCollection;
        private readonly IMongoCollection<Chapter> _chapterCollection;
        
        public CourseController(IMongoClient client)
        {
            var database = client.GetDatabase("osdu_academy");
            _courseCollection = database.GetCollection<Course>("courses");
            _chapterCollection = database.GetCollection<Chapter>("chapters");
        }

        [HttpGet]
        public IEnumerable<Course> Get()
        {
            return _courseCollection.Find(s=> true /*s.AvgRating > 3f*/).ToList();
        }
    }
}