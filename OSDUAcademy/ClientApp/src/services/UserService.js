import ls from "local-storage"

const UserService = {
    getUser() {
        return ls.get("user_data");
    },

    isLoggedIn() {
        return ls.get("user_data") != null;
    },

    getToken() {
        return ls.get("token");
    },

    getAuthObj() {
        const token = UserService.getToken();
        if (!token)
            return {};
        return {
            "Authorization": `Bearer ${token}`
        }
    },

    applyToCourse(courseRoute, callback, onError = () => {}) {
        fetch("user/course/" + courseRoute + "/apply", {
            "method": "POST",
            "headers": {
                "Authorization": `Bearer ${UserService.getToken()}`
            }
        })
            .then(async response => {
                if (!response.ok) {
                    onError();
                    return;
                }
                const data = await response.text();
                callback(data);
            });
    },

    checkEnrollment(courseRoute, callback, onError) {
        fetch("user/course/" + courseRoute + "/enrolled", {headers: UserService.getAuthObj()})
            .then(async response => {
                if (!response.ok) {
                    onError();
                    return;
                }
                const data = await response.text();
                callback(data);
            });
    },

    loginUser(email, password, callback, onError) {
        fetch("login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then(async response => {
                if (response.ok) {
                    const data = await response.json();
                    ls.set("user_data", data.user);
                    ls.set("token", data.token)
                    callback(data);
                } else {
                    onError()
                }
            });
    },

    fetchEnrolledCourses(callback, onError) {
        fetch("user/courses/applied", {headers: UserService.getAuthObj()})
            .then(async response => {
                if (!response.ok) {
                    onError();
                    return;
                }
                const data = await response.json();
                callback(data);
            });
    },
    
    fetchCompletedUserCourses(callback, onError) {
        fetch("user/courses/completed", {headers: UserService.getAuthObj()})
            .then(async response => {
                if (!response.ok) {
                    onError();
                    return;
                }
                const data = await response.json();
                callback(data);
            });
    },

    logOut() {
        if (UserService.isLoggedIn()) {
            ls.set("user_data", null);
            ls.set("token", null);
        }
    },

    checkLogin(callback) {
        fetch("login/check", {headers: UserService.getAuthObj()})
            .then(response => {
                callback(response.ok)
                if (!response.ok) {
                    this.logOut();
                }
            });
    },

};

export default UserService;