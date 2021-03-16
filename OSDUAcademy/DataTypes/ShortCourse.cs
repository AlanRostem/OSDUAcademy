using MongoDB.Bson.Serialization.Attributes;

namespace OSDUAcademy.DataTypes
{
    /// <summary>
    /// Mapping class for displaying small essential amounts of data to
    /// the client, such as displaying course cards on the home page.
    /// </summary>
    [BsonIgnoreExtraElements]
    public class ShortCourse
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
