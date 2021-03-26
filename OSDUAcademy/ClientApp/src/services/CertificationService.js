import UserService from "./UserService";

const CertificationService = {
    fetchQuestionsPreview(courseRoute, callback) {
        fetch("/certification/" + courseRoute + "/content/preview", {headers: UserService.getAuthObj()})
            .then(response => response.json())
            .then(data => {
                callback(data)
            });
    },
    
    fetchAllQuestions(courseRoute, callback) {
        fetch("/certification/" + courseRoute + "/content/questions", {headers: UserService.getAuthObj()})
            .then(response => response.json())
            .then(data => {
                callback(data)
            });
    },
    
    submitAnswers(courseRoute, answerArray, callback) {
        fetch("/certification/" + courseRoute + "/submit/", {
            method: "POST",
            body: JSON.stringify({
                answers: answerArray
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": `Bearer ${UserService.getToken()}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                callback(data)
            });
    },
};

export default CertificationService;