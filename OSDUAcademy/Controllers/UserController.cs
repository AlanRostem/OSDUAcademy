using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using OSDUAcademy.DataTypes;

namespace OSDUAcademy.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController
    {
        // TODO: Add sessions to validate the correct user requesting from this controller
        // TODO: Do not send or accept user id for identifying user
        
        private static readonly ProjectionDefinitionBuilder<User> UserFieldBuilder = Builders<User>.Projection;
        private static readonly ProjectionDefinitionBuilder<Course> CourseFieldBuilder = Builders<Course>.Projection;

        private readonly IMongoCollection<User> _userCollection;
        private readonly IMongoCollection<Course> _courseCollection;

        public UserController(IMongoClient client)
        {
            var database = client.GetDatabase("osdu_academy");
            _userCollection = database.GetCollection<User>("users");
            _courseCollection = database.GetCollection<Course>("courses");
        }

        
        [HttpPost("{userId}/course/{route}/apply/")]
        public bool ApplyToCourse(string userId, string route)
        {
            // Validate the course's existence in the first place
            var courseFields = CourseFieldBuilder.Include(c => c.Id);
            var courses = _courseCollection
                .Find(c => c.PublicRoute == route)
                .Project<Course>(courseFields)
                .ToList();

            if (courses.Count == 0)
                return false;
            var course = courses.Single();
            
            // Validate the user's existence in the first place
            var userFields = UserFieldBuilder.Include(u => u.CoursesApplied);
            var users = _userCollection
                .Find(u => u.Id == userId)
                .Project<User>(userFields)
                .ToList();
            
            if (users.Count == 0)
                return false;

            var user = users.Single();
            if (user.CoursesApplied.Contains(course.Id))
                return false;

            var update = Builders<User>.Update.PushEach("courses_applied", new List<ObjectId>
            {
                course.Id
            }, position: 0);
            
            _userCollection.UpdateOne(u => u.Id == userId, update);
            
            return true;
        }

        [HttpGet("{userId}/course/{route}/enrolled/")]
        public bool IsInCourse(string userId, string route)
        {
            // Validate the course's existence in the first place
            var courseFields = CourseFieldBuilder.Include(c => c.Id);
            var courses = _courseCollection
                .Find(c => c.PublicRoute == route)
                .Project<Course>(courseFields)
                .ToList();

            if (courses.Count == 0)
                return false;
            var course = courses.Single();
            
            // Validate the user's existence in the first place
            var userFields = UserFieldBuilder.Include(u => u.CoursesApplied);
            var users = _userCollection
                .Find(u => u.Id == userId)
                .Project<User>(userFields)
                .ToList();
            
            if (users.Count == 0)
                return false;

            var user = users.Single();
            // Return a boolean telling if the course id is contained in the user's course_applied array in the db
            return user.CoursesApplied
                .Contains(course.Id);
        }
    }
}