using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace OSDUAcademy.DataTypes
{
    // TODO: Create proper course media storage
    
    [BsonIgnoreExtraElements]
    public class Course
    {
        [BsonId] 
        public ObjectId Id { get; set; }
        
        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("desc")]
        public string Description { get; set; }
        
        [BsonElement("full_desc")]
        public string FullDescription { get; set; }
        
        [BsonElement("prerequisites")]
        public List<string> Prerequisites { get; set; }

        [BsonElement("difficulty")]
        public string Difficulty { get; set; }

        [BsonElement("duration")]
        public string Duration { get; set; }
        
        [BsonElement("public_route")]
        public string PublicRoute { get; set; }
        
        [BsonElement("sections")] 
        public List<ObjectId> Sections { get; set; }
        
        [BsonElement("certification_quiz_id")]
        public ObjectId CertificationQuizId { get; set; }
    }
}