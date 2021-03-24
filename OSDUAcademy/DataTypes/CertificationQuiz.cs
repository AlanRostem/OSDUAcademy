using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using OSDUAcademy.DataTypes;

namespace OSDUAcademy.DataTypes
{
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