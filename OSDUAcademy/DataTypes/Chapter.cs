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
        [BsonId]
        public ObjectId Id { get; set; }

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
