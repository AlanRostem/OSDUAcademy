using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace OSDUAcademy.DataTypes
{
    [BsonIgnoreExtraElements]
    public class Lecture
    {
        [BsonElement("title")] 
        public string Title;
    }
}