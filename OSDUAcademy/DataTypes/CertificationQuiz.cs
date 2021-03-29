using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using OSDUAcademy.DataTypes;

namespace OSDUAcademy.DataTypes
{
    /// <summary>
    /// Mapping class for certification quizzes in the database
    /// </summary>
    [BsonIgnoreExtraElements]
    public class CertificationQuiz
    {
        [BsonId]
        public ObjectId Id { get; set; }
        
        [BsonElement("pass_rate")]
        public double PassRate { get; set; }
        
        [BsonElement("questions")]
        public List<Question> Questions { get; set; }
    }
}