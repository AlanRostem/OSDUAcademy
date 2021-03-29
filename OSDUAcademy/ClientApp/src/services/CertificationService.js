import UserService from "./UserService";

/**
 * Const-object that contains helper functions for fetching or sending data using routes corresponding to 
 * certification test data in the backend. 
 */
const CertificationService = {
    /**
     * Asynchronously retrieve the pass rate and number of multiple-choice questions of a certification
     * quiz as part of a course
     * @param courseRoute {string} The route for a given course 
     * @param callback {function(data: Object)} A function called upon receiving the data from the backend. 
     */
    fetchQuestionsPreview(courseRoute, callback) {
        fetch("/certification/" + courseRoute + "/content/preview", {headers: UserService.getAuthObj()})
            .then(response => response.json())
            .then(data => {
                callback(data)
            });
    },

    /**
     * Asynchronously retrieve all questions of a certification test in a given course.
     * @param courseRoute {string} The route for a given course
     * @param callback {function(data: Object)} A function called upon receiving the data from the backend.
     */
    fetchAllQuestions(courseRoute, callback) {
        fetch("/certification/" + courseRoute + "/content/questions", {headers: UserService.getAuthObj()})
            .then(response => response.json())
            .then(data => {
                callback(data)
            });
    },

    /**
     * Asynchronously send answer submission data to the backend.
     * @param courseRoute {string} The route for a given course
     * @param answerArray {Array} An array of integers representing the index of an answer where its order is mapped to the question it belongs to
     * @param callback {function(data: Object)} A function called upon the backend responding to the submission 
     */
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
                callback(data)
            });
    },
};

export default CertificationService;