using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace OSDUAcademy.DataTypes
{
    [BsonIgnoreExtraElements]
    public class Course
    {
        [BsonId]
        public ObjectId Id { get; set; }
        
        [BsonElement("title")]
        public string Title { get; set; }
        
        [BsonElement("desc")]
        public string Description { get; set; }

        [BsonElement("avg_rating")]
        public double AvgRating { get; set; }
    }
}
