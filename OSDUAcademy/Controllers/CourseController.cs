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
            var fieldsBuilder = Builders<Course>.Projection;
            
            var fields = fieldsBuilder
                .Exclude(c => c.Id)
                .Exclude(c => c.Duration)
                .Exclude(c => c.Sections)
                ;
            
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
            var course = await _fullCourseCollection.Find(s => s.PublicRoute == route).SingleAsync();
            List<Section> sections = new List<Section>();
            foreach (var id in course.Sections)
            {
                var section = await  _sectionCollection.Find(s => s.Id == id).SingleAsync();
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