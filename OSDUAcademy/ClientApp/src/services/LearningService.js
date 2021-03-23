const LearningService = {
    _courseRoute: "/",
    _sectionNo: 0,
    _lectureNo: 0,
    
    loadLecture(courseRoute, sectionNo, lectureNo, callback) {
    
        fetch(`learn/content/${courseRoute}/sections/${sectionNo}/lectures/${lectureNo}`)
            .then(response =>
                response.text())
            .then(xml => {
                callback(xml);
                LearningService._sectionNo = sectionNo;
                LearningService._lectureNo = lectureNo;
            });
    },

    getSectionNo() {
        return LearningService._sectionNo;
    },
    
    getLectureNo() {
        return LearningService._lectureNo;
    },
    
    getCurrentCourseRoute() {
        return this._courseRoute;
    },
    
    startCourse(courseRoute, callback) {
        fetch("learn/" + courseRoute + "/start")
            .then(response =>
                response.json()
            )
            .then(data => {
                LearningService.loadLecture(courseRoute, data.section, data.lecture, callback);
                LearningService._courseRoute = courseRoute;
            });
    }
};

export default LearningService;