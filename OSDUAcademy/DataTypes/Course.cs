using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace OSDUAcademy.DataTypes
{
    [BsonIgnoreExtraElements]
    public class Course
    {
        // Using this attribute to serialize the id to the client 
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        
        [BsonElement("title")]
        public string Title { get; set; }
        
        [BsonElement("desc")]
        public string Description { get; set; }

        [BsonElement("duration")]
        public string Duration { get; set; }
        
        [BsonElement("difficulty")]
        public string Difficulty { get; set; }
    }
}
