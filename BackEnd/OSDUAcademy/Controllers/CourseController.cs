using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OSDUAcademy.Data;
using OSDUAcademy.Services;

namespace OSDUAcademy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ICourse _db;

        public CourseController(ICourse db)
        {
            _db = db;
        }

        [HttpPost]
        public IActionResult Save([FromBody] Course data)
        {
            if (data is null)
                return BadRequest();
            _db.Save(data);
            return Ok(data);
        }

        [HttpGet("{id}")]
        public IActionResult GetCourse(int? id)
        {
            var data = _db.GetCourse(id);
            return Ok(data);
        }

        [HttpGet]
        public IActionResult GetCourses()
        {
            var data = _db.Courses;
            return Ok(data);
        }

        [HttpDelete]
        public IActionResult Delete(int? id)
        {
            _db.Delete(id);
            return Ok();
        }
    }
}
