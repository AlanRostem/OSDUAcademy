using MongoDB.Bson.Serialization.Attributes;

namespace OSDUAcademy.DataTypes
{
    [BsonIgnoreExtraElements]
    public class ShortCourseRepresentation
    {
        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("desc")]
        public string Description { get; set; }

        [BsonElement("difficulty")]
        public string Difficulty { get; set; }
        
        [BsonElement("public_route")]
        public string PublicRoute { get; set; }
        
        [BsonElement("img_url")]
        public string ImgUrl { get; set; }
    }
}
