using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace OSDUAcademy.DataTypes
{
    /// <summary>
    /// Mapping class for lectures in a course stored in the database
    /// </summary>
    [BsonIgnoreExtraElements]
    public class Lecture
    {
        [BsonElement("title")] 
        public string Title { get; set; }
    }
}