using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace OSDUAcademy.DataTypes
{
    /// <summary>
    /// Mapping class for a user in the database. Make sure to use projection
    /// if you do not need to query for sensitive information, as it will be queried.
    /// </summary>
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
        
        [BsonElement("salt")]
        public string Salt { get; set; }    
        
        [BsonElement("courses_applied")] 
        public List<ObjectId> CoursesApplied { get; set; }
        
        [BsonElement("courses_completed")] 
        public List<ObjectId> CoursesCompleted { get; set; }
    }
}