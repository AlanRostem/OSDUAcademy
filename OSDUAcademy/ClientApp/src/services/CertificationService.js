const CertificationService = {
    fetchQuestionsPreview(courseRoute, callback) {
        fetch("/certification/" + courseRoute + "/content/preview")
            .then(response => response.json())
            .then(data => {
                callback(data)
            });
    },
    
    fetchAllQuestions(courseRoute, callback) {
        fetch("/certification/" + courseRoute + "/content/questions")
            .then(response => response.json())
            .then(data => {
                callback(data)
            });
    },
    
    submitAnswers(courseRoute, answerArray, callback) {
        fetch("/certification/" + courseRoute + "/submit", {
            method: "POST",
            body: JSON.stringify({
                answers: answerArray
            }),
            contentType: "text/json"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                callback(data)
            });
    },
};

export default CertificationService;