using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using OSDUAcademy.DataTypes;

namespace OSDUAcademy.Controllers
{
    /// <summary>
    /// Controller for course certification requests
    /// </summary>
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class CertificationController : ControllerBase
    {
        /// <summary>
        /// Mapping class for json-data in this form:
        /// {
        ///     "answers": [0, 2, 1, 6]
        /// }
        /// It is used in <see cref="CertificationController.SubmitAnswers"/> as input from the user when
        /// submitting answers to a test. 
        /// </summary>
        public class AnswerData
        {
            [Required]
            public List<int> Answers { get; set; }
        }
        
        private IMongoCollection<Course> _courseCollection;
        private IMongoCollection<CertificationQuiz> _quizCollection;
        private IMongoCollection<User> _userCollection;

        public CertificationController(IMongoClient client)
        {
            var database = client.GetDatabase("osdu_academy");
            _courseCollection = database.GetCollection<Course>("courses");
            _quizCollection = database.GetCollection<CertificationQuiz>("certification_quizzes");
            _userCollection = database.GetCollection<User>("users");
        }
        
        /// <summary>
        /// Retrieve the pass rate and total amount of questions on the certification quiz.
        /// This is called before a user takes the quiz. 
        /// </summary>
        /// <param name="route">Route for the specified course</param>
        /// <returns></returns>
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

        /// <summary>
        /// Retrieve all multiple-choice questions and choices for each question
        /// </summary>
        /// <param name="route">Route for the specified course</param>
        /// <returns></returns>
        [HttpGet("{route}/content/questions")]
        public List<Question> GetQuizQuestions(string route)
        {
            var courseFields = Builders<Course>.Projection
                .Exclude(c => c.Id);

            var course = _courseCollection
                .Find(c => c.PublicRoute == route)
                .Project<Course>(courseFields)
                .ToList().Single();

            var quizFields = Builders<CertificationQuiz>.Projection
                .Include(q => q.Questions);

            var quiz = _quizCollection
                .Find(q => q.Id == course.CertificationQuizId)
                .Project<CertificationQuiz>(quizFields)
                .ToList().Single();

            var questions = quiz.Questions;
            
            foreach (var question in questions)
            {
                question.CorrectAnswerDescription = null;
                question.CorrectAnswerIndex = -1;
            }

            return questions;
        }

        /// <summary>
        /// Handled when the user presses "submit" on the front-end. The <see cref="AnswerData"/> class is used as
        /// input for the user's answer submission. In turn, the user will receive their correct answer percentage
        /// and a message about whether or not they passed. 
        /// </summary>
        /// <param name="route">Route for the specified course</param>
        /// <param name="data">Array of integers representing the multi-choice answer index where its order is mapped to the question.</param>
        /// <returns></returns>
        [HttpPost("/certification/{route}/submit/")]
        public Dictionary<string, object> SubmitAnswers(string route, [FromBody] AnswerData data)
        {
            var course = _courseCollection
                .Find(c => c.PublicRoute == route)
                .ToList().Single();

            var quizFields = Builders<CertificationQuiz>.Projection
                .Include(q => q.Questions)
                .Include(q => q.PassRate);

            var quiz = _quizCollection
                .Find(q => q.Id == course.CertificationQuizId)
                .Project<CertificationQuiz>(quizFields)
                .ToList().Single();

            var maxQuestionCount = quiz.Questions.Count;
            var correctAnswerCount = 0;
            for (var i = 0; i < data.Answers.Count; i++)
            {
                if (quiz.Questions[i].CorrectAnswerIndex == data.Answers[i])
                {
                    correctAnswerCount++;
                }
            }
            
            var correctAnswerRate = (float)correctAnswerCount / (float)maxQuestionCount;
            var passed = correctAnswerRate > quiz.PassRate;

            if (passed)
            {
                var email = User.Identity?.Name;

                var update = Builders<User>.Update.Push(u => u.CoursesCompleted, course.Id);
                _userCollection.UpdateOne(u => u.Email == email, update);

                var deletion = Builders<User>.Update.Pull(u => u.CoursesApplied, course.Id);
                _userCollection.UpdateOne(u => u.Email == email, deletion);
            }
            
            return new Dictionary<string, object>
            {
                ["correctAnswerRate"] = correctAnswerRate,
                ["passed"] = passed
            };
        }
    }
}