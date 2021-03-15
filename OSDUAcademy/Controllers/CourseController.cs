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

        /// <summary>
        /// Delivers all the courses to the client. Currently it is not possible to search in the database
        /// by trending. 
        /// </summary>
        /// <returns>IEnumerable object with all the courses</returns>
        [Route("trending")]
        public IEnumerable<Course> GetTrending()
        {
            return _courseCollection.Find(s=> true).ToList();
        }
        
        /// <summary>
        /// Deliver a course to the client by id.
        /// </summary>
        /// <param name="id">Unique identifier as present in the database</param>
        /// <returns>The course by id</returns>
        [HttpGet("{id}")]
        public async Task<Course> GetCourse(string id)
        {
            Course course = await _courseCollection.Find(s => s.Id == id).SingleAsync();
            return course;
        }
    }
}