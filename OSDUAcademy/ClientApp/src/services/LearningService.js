const LearningService = {
    _courseRoute: "/",
    
    loadLecture(courseRoute, sectionNo, lectureNo, callback) {
        fetch(`learn/content/${courseRoute}/sections/${sectionNo}/lectures/${lectureNo}`)
            .then(response =>
                response.text())
            .then(xml => {
                callback(xml);
            });
    },
    
    getCurrentCourseRoute() {
        return this._courseRoute;
    },
    
    startCourse(courseRoute, callback) {
        LearningService._courseRoute = courseRoute;
        fetch("learn/" + courseRoute + "/start")
            .then(response =>
                response.json()
            )
            .then(data => {
                LearningService.loadLecture(courseRoute, data.section, data.lecture, callback);
            });
    }
};

export default LearningService;