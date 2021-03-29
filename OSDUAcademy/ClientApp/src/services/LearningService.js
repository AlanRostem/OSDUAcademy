import UserService from "./UserService";

/**
 * A stateful const-object that contains helper functions for fetching or sending data using routes corresponding to
 * course content. It also keeps track of the current course the user learning and what lecture they are on. 
 */
const LearningService = {
    _courseRoute: "/",
    _sectionNo: 0,
    _lectureNo: 0,
    _courseSectionData: [],

    /**
     * Asynchronously load a lecture from the backend based on its route, section- and lecture index. 
     * @param courseRoute {string} The route for a given course
     * @param sectionNo {int} The index of the section starting from zero
     * @param lectureNo {int} The index of the lecture starting from zero
     * @param callback {function(data: Object)} A function called upon receiving the data from the backend.
     */
    loadLecture(courseRoute, sectionNo, lectureNo, callback) {
        fetch(`learn/content/${courseRoute}/sections/${sectionNo}/lectures/${lectureNo}`, {headers: UserService.getAuthObj()})
            .then(response =>
                response.text())
            .then(xml => {
                callback(xml);
                LearningService._sectionNo = sectionNo;
                LearningService._lectureNo = lectureNo;
            });
    },

    /**
     * Get the current section index starting from zero
     * @returns {number}
     */
    getSectionNo() {
        return LearningService._sectionNo;
    },

    /**
     * Get the current lecture index starting from zero
     * @returns {number}
     */
    getLectureNo() {
        return LearningService._lectureNo;
    },

    /**
     * Get minimal about the current section. Used to display the overview
     * @returns {Object}
     */
    getSectionData() {
        return LearningService._courseSectionData;
    },

    /**
     * Get the route string of the current course
     * @returns {string}
     */
    getCurrentCourseRoute() {
        return this._courseRoute;
    },

    /**
     * Tell the backend that the user is going to start using the course 
     * courseRoute {string} The route for a given course 
     * callback {function(data: Object)} A function called upon receiving the data from the backend.
     */
    startCourse(courseRoute, callback) {
        fetch("learn/" + courseRoute + "/start", {headers: UserService.getAuthObj()})
            .then(response =>
                response.json()
            )
            .then(data => {
                LearningService.loadLecture(courseRoute, data.section, data.lecture, callback);
                LearningService._courseRoute = courseRoute;
                const route = 'learn/' + courseRoute + "/overview";
                fetch(route, {headers: UserService.getAuthObj()})
                    .then(response => response.json())
                    .then(data => {
                        LearningService._courseSectionData = data;
                    });
            });


    },

    /**
     * Asynchronously retrieve an image as part of a course
     * @param courseRoute {string} The route for a given course 
     * @param image {string} The image source
     * @param callback {function(data: string)} A function called upon receiving the data from the backend. The data parameter is a URL string for the image
     */
    fetchCourseImage(courseRoute, image, callback) {
        fetch(`learn/content/${courseRoute}/images/${image}`, {headers: UserService.getAuthObj()})
            .then(response => response.blob())
            .then(blob => {
                callback(URL.createObjectURL(blob));
            });
    },

    /**
     * Asynchronously retrieve data about a course's section and lecture overview
     * callback {function(data: Object)} A function called upon receiving the data from the backend.
     */
    fetchCurrentCourseOverview(callback) {
        const route = 'learn/' + LearningService.getCurrentCourseRoute() + "/overview";
        fetch(route, {headers: UserService.getAuthObj()})
            .then(response => response.json())
            .then(data => {
                callback(data);
            });
    }
};

export default LearningService;