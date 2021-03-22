const LearningService = {
    _courseRoute: "/",
    
    loadLecture(courseRoute, sectionNo, lectureNo, callback) {
        fetch(`learn/content/${courseRoute}/sections/${sectionNo}/lectures/${lectureNo}`)
            .then(response =>
                response.text())
            .then(xml => {
                callback(xml);
                LearningService._courseRoute = courseRoute;
            });
    },
    
    getCurrentCourseRoute() {
        return this._courseRoute;
    }
};

export default LearningService;