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
};

export default CertificationService;