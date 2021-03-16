﻿using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using OSDUAcademy.DataTypes;

namespace OSDUAcademy.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CourseController : ControllerBase
    {
        private static readonly ProjectionDefinitionBuilder<Course> CourseFieldBuilder = Builders<Course>.Projection;
        
        private readonly IMongoCollection<Course> _fullCourseCollection;
        
        private readonly IMongoCollection<Section> _sectionCollection;
        
        public CourseController(IMongoClient client)
        {
            var database = client.GetDatabase("osdu_academy");
            _fullCourseCollection = database.GetCollection<Course>("courses");
            _sectionCollection = database.GetCollection<Section>("course_sections");
        }

        /// <summary>
        /// Delivers all the courses to the client. Currently it is not possible to search in the database
        /// by trending. 
        /// </summary>
        /// <returns>IEnumerable object with all the courses</returns>
        [Route("trending")]
        public IEnumerable<Course> GetTrending()
        {
            var fields = CourseFieldBuilder
                .Exclude(c => c.Id)
                .Exclude(c => c.Duration)
                .Exclude(c => c.Sections);
            
            var all = _fullCourseCollection
                .Find(c => true)
                .Project<Course>(fields)
                .ToList();
            
            return all;
        }
        
        /// <summary>
        /// Deliver a course to the client by its generated route
        /// </summary>
        /// <param name="route">Unique route as present in the database</param>
        /// <returns>The course by route</returns>
        [HttpGet("{route}")]
        public async Task<Dictionary<string, object>> GetCourse(string route)
        {
            var courseFields = CourseFieldBuilder
                .Exclude(c => c.Id);
            
            var course =  _fullCourseCollection
                .Find(c => c.PublicRoute == route)
                .Project<Course>(courseFields)
                .ToList().Single();
            
            List<Section> sections = new List<Section>();
            var sectionFields = Builders<Section>.Projection.Exclude(s => s.Id);
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
                ["sections"] = sections
            };

            return data;
        }
    }
}