using System;
using System.Linq;
using OSDUAcademy.Data;

namespace OSDUAcademy.Services
{
    public interface ICourse
    {
        Course GetCourse(int? id);
        
        IQueryable<Course> Courses { get; }

        void Save(Course course);

        void Delete(int? id);
    }
}
