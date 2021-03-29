/**
 * Const-object that contains helper functions for fetching or sending data using routes corresponding to
 * public information about a course. 
 */
const CourseService = {
    /**
     * Asynchronously retrieve detailed public data about a course
     * @param courseRoute {string} The route for a given course 
     * @param callback {function(data: Object)} A function called upon receiving the data from the backend.
     */
    fetchFrontPageCourseData(courseRoute, callback) {
        fetch('course/' + courseRoute)
            .then(response => response.json())
            .then(callback);
    },

    /**
     * Asynchronously retrieve an array of minimal data about courses. This should query the backend
     * to send data about the most trending courses currently.
     * @param callback {function(data: Object)} A function called upon receiving the data from the backend.
     */
    fetchCoursesByTrending(callback) {
        fetch('course/trending')
            .then(response => response.json())
            .then(callback);
    },

    /**
     * Asynchronously retrieve an array of minimal data about courses. This should query the backend
     * to send data about the most trending courses in a specific domain
     * @param domainToSearchBy {string} A normalized string denoting the desired course domain 
     * @param callback {function(data: Object)} A function called upon receiving the data from the backend.
     */
    fetchCoursesByDomain(domainToSearchBy, callback) {
        fetch('course/domain/' + domainToSearchBy)
            .then(response => response.json())
            .then(callback);
    }
};

export default CourseService;