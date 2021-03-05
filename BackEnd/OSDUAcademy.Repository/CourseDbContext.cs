using System;
using Microsoft.EntityFrameworkCore;
using OSDUAcademy.Data;

namespace OSDUAcademy.Repository
{
    public class CourseDbContext : DbContext
    {
        public CourseDbContext(DbContextOptions<CourseDbContext> options) : base(options)
        {

        }
        
        public DbSet<Course> Courses { get; set; }
    }
}
