using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace OSDUAcademy.DataTypes
{
    [BsonIgnoreExtraElements]
    public class Section
    {
        [BsonId]
        public ObjectId Id { get; set; }

        [BsonElement("title")]
        public string Title { get; set; }

        //[BsonElement("lectures")] 
        //public List<Lecture> Lectures;
    }
}
