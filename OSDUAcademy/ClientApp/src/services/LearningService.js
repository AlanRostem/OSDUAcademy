const LearningService = {
    _courseRoute: "/",
    setCurrentCourseRoute(route) {
        this._courseRoute = route;  
    },
    
    loadLecture(courseRoute, sectionNo, lectureNo, callback) {
        fetch(`learn/content/${courseRoute}/sections/${sectionNo}/lectures/${lectureNo}`)
            .then(response =>
                response.text())
            .then(xml => {
                callback(xml);
                LearningService.setCurrentCourseRoute(courseRoute);
            });
    },
    
    getCurrentCourseRoute() {
        return this._courseRoute;
    }
};

export default LearningService;