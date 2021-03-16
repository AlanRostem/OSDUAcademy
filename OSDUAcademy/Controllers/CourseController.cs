using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using OSDUAcademy.DataTypes;

namespace OSDUAcademy.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CourseController : ControllerBase
    {
        private readonly IMongoCollection<ShortCourseRepresentation> _courseCollection;
        private readonly IMongoCollection<Chapter> _chapterCollection;
        
        public CourseController(IMongoClient client)
        {
            var database = client.GetDatabase("osdu_academy");
            _courseCollection = database.GetCollection<ShortCourseRepresentation>("courses");
            _chapterCollection = database.GetCollection<Chapter>("chapters");
        }

        [HttpGet]
        public IEnumerable<ShortCourseRepresentation> Get()
        {
            return _courseCollection.Find(s=> true /*s.AvgRating > 3f*/).ToList();
        }

        /// <summary>
        /// Delivers all the courses to the client. Currently it is not possible to search in the database
        /// by trending. 
        /// </summary>
        /// <returns>IEnumerable object with all the courses</returns>
        [Route("trending")]
        public IEnumerable<ShortCourseRepresentation> GetTrending()
        {
            return _courseCollection.Find(s=> true).ToList();
        }
        
        /// <summary>
        /// Deliver a course to the client by its generated route
        /// </summary>
        /// <param name="route">Unique route as present in the database</param>
        /// <returns>The course by route</returns>
        [HttpGet("{route}")]
        public async Task<ShortCourseRepresentation> GetCourse(string route)
        {
            ShortCourseRepresentation shortCourseRepresentation = await _courseCollection.Find(s => s.PublicRoute == route).SingleAsync();
            return shortCourseRepresentation;
        }
    }
}