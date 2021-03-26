using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using OSDUAcademy.DataTypes;

namespace OSDUAcademy.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
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

        
        [HttpPost("course/{route}/apply/")]
        public bool ApplyToCourse(string route)
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
            var userFields = UserFieldBuilder
                .Include(u => u.CoursesApplied);
            var email = User.Identity?.Name;
            var users = _userCollection
                .Find(u => u.Email == email)
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
            
            _userCollection.UpdateOne(u => u.Email == email, update);
            
            return true;
        }

        [HttpGet("course/{route}/enrolled/")]
        public bool IsInCourse(string route)
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
            var userFields = UserFieldBuilder
                .Include(u => u.CoursesApplied)
                .Include(u => u.CoursesCompleted);
            var email = User.Identity?.Name;
            var users = _userCollection
                .Find(u => u.Email == email)
                .Project<User>(userFields)
                .ToList();
            
            if (users.Count == 0)
                return false;

            var user = users.Single();
            // Return a boolean telling if the course id is contained in the user's course_applied array in the db
            return 
                user.CoursesApplied
                .Contains(course.Id) || 
                user.CoursesCompleted
                .Contains(course.Id);;
        }

        [HttpGet("courses/applied")]
        public List<Course> GetAppliedCourses()
        {
            var list = new List<Course>();
            var userFields = UserFieldBuilder.Include(u => u.CoursesApplied);
            var email = User.Identity?.Name;
            var users = _userCollection
                .Find(u => u.Email == email)
                .Project<User>(userFields)
                .ToList();
            
            if (users.Count == 0)
                return list;

            var user = users.Single();

            var courseFields = CourseFieldBuilder
                .Include(c => c.Title)
                .Include(c => c.PublicRoute);
            
            foreach (var courseId in user.CoursesApplied)
            {
                var course = _courseCollection
                    .Find(c => c.Id == courseId)
                    .Project<Course>(courseFields)
                    .ToList().Single();
                list.Add(course);
            }
            
            return list;
        } 
        
        [HttpGet("courses/completed")]
        public List<Course> GetCompletedCourses()
        {
            var list = new List<Course>();
            var userFields = UserFieldBuilder.Include(u => u.CoursesCompleted);
            var email = User.Identity?.Name;
            var users = _userCollection
                .Find(u => u.Email == email)
                .Project<User>(userFields)
                .ToList();
            
            if (users.Count == 0)
                return list;

            var user = users.Single();

            var courseFields = CourseFieldBuilder
                .Include(c => c.Title)
                .Include(c => c.PublicRoute);
            
            foreach (var courseId in user.CoursesCompleted)
            {
                var course = _courseCollection
                    .Find(c => c.Id == courseId)
                    .Project<Course>(courseFields)
                    .ToList().Single();
                list.Add(course);
            }
            
            return list;
        }
    }
}