using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;

namespace OSDUAcademy.DataTypes
{
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
