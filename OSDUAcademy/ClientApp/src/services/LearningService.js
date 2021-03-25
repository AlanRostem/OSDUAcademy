import authService from "../components/api-authorization/AuthorizeService";

const LearningService = {
    _courseRoute: "/",
    _sectionNo: 0,
    _lectureNo: 0,
    _courseSectionData: [],

    loadLecture(courseRoute, sectionNo, lectureNo, callback) {
        authService.getAccessToken().then(token => {
            const init = {
                headers: !token ? {} : {'Authorization': `Bearer ${token}`}
            };
            fetch(`learn/content/${courseRoute}/sections/${sectionNo}/lectures/${lectureNo}`, init)
                .then(response =>
                    response.text())
                .then(xml => {
                    callback(xml);
                    LearningService._sectionNo = sectionNo;
                    LearningService._lectureNo = lectureNo;
                });
        });
    },

    getSectionNo() {
        return LearningService._sectionNo;
    },

    getLectureNo() {
        return LearningService._lectureNo;
    },

    getSectionData() {
        return LearningService._courseSectionData;
    },

    getCurrentCourseRoute() {
        return this._courseRoute;
    },

    startCourse(courseRoute, callback) {
        authService.getAccessToken().then(token => {
            const init = {
                headers: !token ? {} : {'Authorization': `Bearer ${token}`}
            };
            fetch("learn/" + courseRoute + "/start", init)
                .then(response =>
                    response.json()
                )
                .then(data => {
                    LearningService.loadLecture(courseRoute, data.section, data.lecture, callback);
                    LearningService._courseRoute = courseRoute;
                    const route = 'learn/' + courseRoute + "/overview";
                    fetch(route, init)
                        .then(response => response.json())
                        .then(data => {
                            LearningService._courseSectionData = data;
                        });
                });
        })

    },
    
    fetchCourseImage(courseRoute, image, callback) {
        authService.getAccessToken().then(token => {
            const init = {
                headers: !token ? {} : {'Authorization': `Bearer ${token}`}
            };

            fetch(`learn/content/${courseRoute}/images/${image}`, init)
                .then(response => response.blob())
                .then(blob => {
                    callback(URL.createObjectURL(blob));
                });
        });
    },

    fetchCurrentCourseOverview(callback) {
        authService.getAccessToken().then(token => {
            const init = {
                headers: !token ? {} : {'Authorization': `Bearer ${token}`}
            };

            const route = 'learn/' + LearningService.getCurrentCourseRoute() + "/overview";
            fetch(route, init)
                .then(response => response.json())
                .then(data => {
                    callback(data);
                });
        });
    }
};

export default LearningService;