const LearningService = {
    _courseRoute: "/",
    setCurrentCourseRoute(route) {
        this._courseRoute = route;  
    },
    
    getCurrentCourseRoute() {
        return this._courseRoute;
    }
};

export default LearningService;