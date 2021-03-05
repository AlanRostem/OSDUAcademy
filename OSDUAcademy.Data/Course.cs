using System;

namespace OSDUAcademy.Data
{
    public class Course
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public float Rating { get; set; }

        /// <summary>
        /// Set self to another course 
        /// </summary>
        /// <param name="course"></param>
        public void Set(Course course)
        {
            Id = course.Id;
            Title = course.Title;
            Description = course.Description;
            Rating = course.Rating;
        }
    }
}
