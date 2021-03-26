using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace OSDUAcademy.DataTypes
{
    [BsonIgnoreExtraElements]
    public class User
    {
        [BsonId]
        public ObjectId Id { get; set; }
        
        [BsonElement("first_name")]
        public string FirstName { get; set; }
        
        [BsonElement("last_name")]
        public string LastName { get; set; }
        
        [BsonElement("email")]
        public string Email { get; set; }
        
        [BsonElement("password")]
        public string Password { get; set; }    
        
        [BsonElement("courses_applied")] 
        public List<ObjectId> CoursesApplied { get; set; }
        
        [BsonElement("courses_completed")] 
        public List<ObjectId> CoursesCompleted { get; set; }
    }
}