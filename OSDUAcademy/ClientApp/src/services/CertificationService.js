import UserService from "./UserService";
import authService from "../components/api-authorization/AuthorizeService";

const CertificationService = {

    fetchQuestionsPreview(courseRoute, callback) {
        authService.getAccessToken().then(token => {
            const init = {
                headers: !token ? {} : {'Authorization': `Bearer ${token}`}
            };

            fetch("/certification/" + courseRoute + "/content/preview", init)
                .then(response => response.json())
                .then(data => {
                    callback(data)
                });
        });
    },

    fetchAllQuestions(courseRoute, callback) {
        authService.getAccessToken().then(token => {
            const init = {
                headers: !token ? {} : {'Authorization': `Bearer ${token}`}
            };

            fetch("/certification/" + courseRoute + "/content/questions", init)
                .then(response => response.json())
                .then(data => {
                    callback(data)
                });
        });
    },

    submitAnswers(courseRoute, answerArray, callback) {
        authService.getAccessToken().then(token => {
            fetch("/certification/" + courseRoute + "/submit/" + UserService.getUser().id, {
                method: "POST",
                body: JSON.stringify({
                    answers: answerArray
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': token ? `Bearer ${token}` : undefined
                },
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    callback(data)
                });
        });
    },
};

export default CertificationService;