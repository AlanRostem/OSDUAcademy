using MongoDB.Bson.Serialization.Attributes;

namespace OSDUAcademy.DataTypes
{
    [BsonIgnoreExtraElements]
    public class Course
    {
        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("desc")]
        public string Description { get; set; }

        [BsonElement("duration")]
        public string Duration { get; set; }
        
        [BsonElement("difficulty")]
        public string Difficulty { get; set; }
        
        [BsonElement("public_route")]
        public string PublicRoute { get; set; }
    }
}
