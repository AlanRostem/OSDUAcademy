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

        /// <summary>
        /// Get request that sends the client an image file based on course.
        /// Access is currently not secured to students who have enrolled.
        /// TODO: Secure access to course content based on user enrollment data.
        /// </summary>
        /// <param name="route">Unique route as present in the database</param>
        /// <param name="image">Image name excluding path. File extension required</param>
        /// <returns></returns>
        [HttpGet("content/{route}/images/{image}")]
        public async Task GetCourseContentImage(string route, string image)
        {
            FileInfo file = new FileInfo("files/course/content/" + route + "/images/" + image);
            if (!file.Exists)
                return;
            Response.Clear();
            Response.Headers.Clear();
            Response.Headers.Add("Content-Disposition", "attachment; filename=" + file.Name);
            Response.Headers.Add("Content-Length", file.Length.ToString());
            Response.ContentType = "image/png";
            await Response.SendFileAsync(file.FullName);
        }

        /// <summary>
        /// Get request that sends the client a file containing a lecture layout file represented
        /// in xml format. Information is gathered based on course routing path, section no. and
        /// lecture no.
        /// </summary>
        /// <param name="route">Unique route as present in the database</param>
        /// <param name="section">Number of section</param>
        /// <param name="lecture">Number of lecture</param>
        /// <returns></returns>
        [HttpGet("content/{route}/sections/{section}/lectures/{lecture}")]
        public async Task GetCourseContentLectureXml(string route, int section, int lecture)
        {
            FileInfo file = new FileInfo(
                "files/course/content/" + route + "/sections/" + section + "/lectures/" + lecture + ".xml");
            if (!file.Exists)
                return;
            Response.Clear();
            Response.Headers.Clear();
            Response.Headers.Add("Content-Disposition", "attachment; filename=" + file.Name);
            Response.Headers.Add("Content-Length", file.Length.ToString());
            Response.ContentType = "text/plain";
            await Response.SendFileAsync(file.FullName);
        }
    }
}