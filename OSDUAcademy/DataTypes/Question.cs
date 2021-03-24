﻿using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;

namespace OSDUAcademy.DataTypes
{
    [BsonIgnoreExtraElements]
    public class Question
    {
        [BsonElement("question_text")]
        public string QuestionText { get; set; }
        
        [BsonElement("correct_answer_index")]
        public int CorrectAnswerIndex { get; set; }
        
        [BsonElement("correct_answer_description")]
        public string CorrectAnswerDescription { get; set; }
        
        [BsonElement("answers")]
        public List<string> Answers { get; set; }
    }
}