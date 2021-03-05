using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OSDUAcademy.Data;
using OSDUAcademy.Services;

namespace OSDUAcademy.Repository
{
    public class CourseRepository : ICourse
    {
        private readonly CourseDbContext _db;

        public CourseRepository(CourseDbContext db)
        {
            _db = db;
        }

        public Course GetCourse(int? id)
        {
            return _db.Courses.Find(id);
        }

        public IQueryable<Course> Courses => _db.Courses;
        public void Save(Course course)
        {
            if (course.Id == 0) // Add if the course is not present in the db
            {
                _db.Courses.Add(course);
                _db.SaveChanges();
            }
            else // Update the course if it already exists
            {
                var entity = _db.Courses.Find(course.Id);
                entity.Set(course);
                _db.SaveChanges();
            }
        }

        public void Delete(int? id)
        {
            Course course = _db.Courses.Find(id);
            _db.Courses.Remove(course);
            _db.SaveChanges();
        }
    }
}
