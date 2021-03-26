import ls from "local-storage"

const UserService = {
    getUser() {
        return ls.get("user_data");
    },

    isLoggedIn() {
        return ls.get("user_data") != null;
    },

    applyToCourse(courseRoute, callback) {
        fetch("user/" + this.getUser().id + "/course/" + courseRoute + "/apply", {
            "method": "POST"
        })
            .then(response =>
                response.text())
            .then(callback);
    },

    checkEnrollment(courseRoute, callback) {
        fetch("user/" + this.getUser().id + "/course/" + courseRoute + "/enrolled")
            .then(response => response.text())
            .then(callback);
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
                    callback(data);
                } else {
                    onError()
                }
            });
    },

    fetchEnrolledCourses(callback) {
        fetch("user/" + this.getUser().id + "/courses/applied")
            .then(response => response.json())
            .then(data => callback(data))
    },

    logOut() {
        if (UserService.isLoggedIn()) {
            ls.set("user_data", null)
        }
    }
};

export default UserService;