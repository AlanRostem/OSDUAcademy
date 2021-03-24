using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using MongoDB.Bson;
using MongoDB.Driver;
using OSDUAcademy.DataTypes;

namespace OSDUAcademy.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CourseController : ControllerBase
    {
        private static readonly ProjectionDefinitionBuilder<Course> CourseFieldBuilder = Builders<Course>.Projection;

        private readonly IMongoCollection<Course> _courseCollection;
        private readonly IMongoCollection<Section> _sectionCollection;

        public CourseController(IMongoClient client)
        {
            var database = client.GetDatabase("osdu_academy");
            _courseCollection = database.GetCollection<Course>("courses");
            _sectionCollection = database.GetCollection<Section>("course_sections");
        }

        /// <summary>
        /// Delivers minimal information about all the courses to the client.
        /// Currently it is not possible to search in the database by trending. 
        /// </summary>
        /// <returns>IEnumerable object with all the courses</returns>
        [Route("trending")]
        public IEnumerable<Course> GetTrending()
        {
            var fields = CourseFieldBuilder
                .Exclude(c => c.Id)
                .Exclude(c => c.Duration)
                .Exclude(c => c.Sections)
                .Exclude(c => c.FullDescription)
                .Exclude(c => c.Prerequisites);

            var all = _courseCollection
                .Find(c => true)
                .Project<Course>(fields)
                .ToList();

            return all;
        }
        
        /// <summary>
        /// Delivers minimal information about all the courses to the client.
        /// Search using the domain
        /// </summary>
        /// <returns>IEnumerable object with all the courses</returns>
        [Route("domain/{domain}")]
        public IEnumerable<Course> GetByDomain(string domain)
        {
            var fields = CourseFieldBuilder
                .Exclude(c => c.Id)
                .Exclude(c => c.Duration)
                .Exclude(c => c.Sections)
                .Exclude(c => c.FullDescription)
                .Exclude(c => c.Prerequisites);

            var all = _courseCollection
                .Find(c => c.Domain == domain)
                .Project<Course>(fields)
                .ToList();

            return all;
        }



        /// <summary>
        /// Deliver basic information about a course to the client by its
        /// pre-generated route. Data about the course should only represent
        /// basic information such as title, description and course layout
        /// among other things.
        /// </summary>
        /// <param name="route">Unique route as present in the database</param>
        /// <returns>The course by route</returns>
        [HttpGet("{route}")]
        public Dictionary<string, object> GetCourse(string route)
        {
            var courseFields = CourseFieldBuilder
                .Exclude(c => c.Id);

            var course = _courseCollection
                .Find(c => c.PublicRoute == route)
                .Project<Course>(courseFields)
                .ToList().Single();


            var sectionFields = Builders<Section>.Projection
                .Exclude(s => s.Id);

            List<Section> sections = new List<Section>();

            foreach (var id in course.Sections)
            {
                var section = _sectionCollection
                    .Find(s => s.Id == id)
                    .Project<Section>(sectionFields)
                    .ToList().Single();

                sections.Add(section);
            }

            Dictionary<string, object> data = new Dictionary<string, object>
            {
                ["course"] = course,
                ["sections"] = sections,
            };

            return data;
        }
    }
}