using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace OSDUAcademy.DataTypes
{
    public class Chapter
    {
        // Using this attribute to serialize the id to the client 
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("content")] // TODO: Fix this temporary solution
        public string Content { get; set; }

        [BsonElement("order")]
        public int Order { get; set; }

        [BsonElement("level")]
        public int Level { get; set; }

        [BsonElement("course_id")]
        public ObjectId CourseId { get; set; }
    }
}
