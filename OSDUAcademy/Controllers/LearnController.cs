using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using OSDUAcademy.DataTypes;

namespace OSDUAcademy.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LearnController : ControllerBase
    {
        
        private readonly IMongoCollection<Course> _courseCollection;
        private readonly IMongoCollection<Section> _sectionCollection;

        public LearnController(IMongoClient client)
        {
            var database = client.GetDatabase("osdu_academy");
            _courseCollection = database.GetCollection<Course>("courses");
            _sectionCollection = database.GetCollection<Section>("course_sections");
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

        /// <summary>
        /// Sends a tuple containing what course and lecture the user is on after
        /// entering a course. Currently is just sends {0, 0} since course history
        /// storage is yet to be implemented.
        /// TODO: Implement course history storage and redirect user to their last lecture
        /// </summary>
        /// <param name="route"></param>
        /// <returns></returns>
        [HttpGet("{route}/start")]
        public Dictionary<string, object> StartCourse(string route)
        {
            return new Dictionary<string, object>
            {
                ["section"] = 0,
                ["lecture"] = 0,
            };
        }
        
        [HttpGet("{route}/sections")]
        public List<Section> GetCourseOverview(string route)
        {
            var courseFields = Builders<Course>.Projection
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
            
            return sections;
        }
    }
}