using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace OSDUAcademy.DataTypes
{
    /// <summary>
    /// Mapping class for sections as part of a course in the database
    /// </summary>
    [BsonIgnoreExtraElements]
    public class Section
    {
        [BsonId]
        public ObjectId Id { get; set; }

        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("lectures")] 
        public List<Lecture> Lectures { get; set; }
    }
}
