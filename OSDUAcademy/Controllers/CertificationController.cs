using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using OSDUAcademy.DataTypes;

namespace OSDUAcademy.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CertificationController : ControllerBase
    {
        private IMongoCollection<Course> _courseCollection;
        private IMongoCollection<CertificationQuiz> _quizCollection;

        public CertificationController(IMongoClient client)
        {
            var database = client.GetDatabase("osdu_academy");
            _courseCollection = database.GetCollection<Course>("courses");
            _quizCollection = database.GetCollection<CertificationQuiz>("certification_quizzes");
        }
        
        [HttpGet("{route}/content/preview")]
        public Dictionary<string, object> GetQuizPreview(string route)
        {
            var courseFields = Builders<Course>.Projection
                .Exclude(c => c.Id);

            var course = _courseCollection
                .Find(c => c.PublicRoute == route)
                .Project<Course>(courseFields)
                .ToList().Single();

            var quizFields = Builders<CertificationQuiz>.Projection
                .Include(q => q.Questions)
                .Include(q => q.PassRate);

            var quiz = _quizCollection
                .Find(q => q.Id == course.CertificationQuizId)
                .Project<CertificationQuiz>(quizFields)
                .ToList().Single();
            
            var data = new Dictionary<string, object>
            {
                ["questionCount"] = quiz.Questions.Count,
                ["passRate"] = quiz.PassRate,
            };

            return data;
        }
    }
}