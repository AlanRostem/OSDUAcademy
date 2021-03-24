import ls from "local-storage"

const UserService = {
    _user: null,

    isUnsafeLoginPersisted() {
        const email = ls.get("email_unsafe");
        const password = ls.get("password_unsafe");
        return email !== null && password !== null;  
    },
    
    reLogUnsafe(callback) {
        UserService.loginUser(ls.get("email_unsafe"), ls.get("password_unsafe"), callback);
    },
    
    setUser(user) {
        this._user = user;
    },

    getUser() {
        return this._user;
    },

    isLoggedIn() {
        return this._user != null;
    },

    applyToCourse(courseRoute, callback) {
        fetch("user/" + this._user.id + "/course/" + courseRoute + "/apply", {
            "method": "POST"
        })
            .then(response =>
                response.text())
            .then(callback);
    },

    checkEnrollment(courseRoute, callback) {
        fetch("user/" + this._user.id + "/course/" + courseRoute + "/enrolled")
            .then(response => response.text())
            .then(callback);
    },

    loginUser(email, password, callback) {
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
            .then(response =>
                response.json())
            .then(data => {
                callback(data);
                if (!data.success) return;
                ls.set("email_unsafe", email);
                ls.set("password_unsafe", password);
            });
    },

    fetchEnrolledCourses(callback) {
        fetch("user/" + this._user.id + "/courses/applied")
            .then(response => response.json())
            .then(data => callback(data))
    },
    
    logOut() {
        if (UserService.isLoggedIn()) {
            this._user = null;
            ls.set("email_unsafe", null);
            ls.set("password_unsafe", null);
        }
    }
};

export default UserService;