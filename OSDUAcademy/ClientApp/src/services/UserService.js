const UserService = {
    _user: null,

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
            .then(data =>
                callback(data));
    }
};

export default UserService;