const CourseService = {
    fetchFrontPageCourseData(courseRoute, callback) {
        fetch('course/' + courseRoute)
            .then(response => response.json())
            .then(callback);
    },
    
    fetchCoursesByTrending(callback) {
        fetch('course/trending')
            .then(response => response.json())
            .then(callback);
    },


    fetchCoursesByDomain(domainToSearchBy, callback) {
        fetch('course/domain/' + domainToSearchBy)
            .then(response => response.json())
            .then(callback);
    }
};

export default CourseService;