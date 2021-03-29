import ls from "local-storage"

/**
 * Const-object that contains helper functions for fetching or sending data using routes corresponding to
 * user login and status. It also keeps the user data and Jwt token in the local storage. 
 */
const UserService = {
    /**
     * Retrieve the current user's data. If it is null, then it means the user is not logged in.
     * @returns {Object, null}
     */
    getUser() {
        return ls.get("user_data");
    },

    /**
     * Check if the user is logged in
     * @returns {boolean}
     */
    isLoggedIn() {
        return ls.get("user_data") != null;
    },

    /**
     * Retrieve the Jwt token of the user
     * @returns {string}
     */
    getToken() {
        return ls.get("token");
    },

    /**
     * Generate a header object containing bearer token for authentication. The object is empty if the token does not exist
     * @returns {{Authorization: string}|{}}
     */
    getAuthHeader() {
        const token = UserService.getToken();
        if (!token)
            return {};
        return {
            "Authorization": `Bearer ${token}`
        }
    },

    /**
     * Asynchronously ping the server for applying to a course when the user is logged in. When the backend responds, 
     * the callback function will invoke with a boolean passed into it determining if applying was successful. 
     * @param courseRoute {string} The route for a given course
     * @param callback {function(data: Object)} A function called upon receiving the data from the backend. 
     * @param onError {function} A function called upon an error occuring 
     */    
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

    /**
     * Asynchronously check if the currently logged in user is enrolled in a particular course. When the backend responds,
     * the callback function will invoke with a boolean passed into it determining if the user is applied to the course
     * @param courseRoute {string} The route for a given course
     * @param callback {function(data: Object)} A function called upon receiving the data from the backend.
     * @param onError {function} A function called upon an error occuring
     */
    checkEnrollment(courseRoute, callback, onError) {
        fetch("user/course/" + courseRoute + "/enrolled", {headers: UserService.getAuthHeader()})
            .then(async response => {
                if (!response.ok) {
                    onError();
                    return;
                }
                const data = await response.text();
                callback(data);
            });
    },

    /**
     * Asynchronously request a login attempt based on user credential inputs. The callback function will invoke with a 
     * json-object containing the user's full name and email along with a login token.   
     * @param email {string} The user's email input
     * @param password {string} The user's passwords input
     * @param callback {function(data: Object)} A function called upon receiving the data from the backend.
     * @param onError {function} A function called upon an error occuring
     */
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

    /**
     * Asynchronously retrieve data about the currently logged in user's enrolled courses in an array form. 
     * @param callback {function(data: Object)} A function called upon receiving the data from the backend.
     * @param onError {function} A function called upon an error occuring
     */
    fetchEnrolledCourses(callback, onError) {
        fetch("user/courses/applied", {headers: UserService.getAuthHeader()})
            .then(async response => {
                if (!response.ok) {
                    onError();
                    return;
                }
                const data = await response.json();
                callback(data);
            });
    },

    /**
     * Asynchronously retrieve data about the currently logged in user's completed courses in an array form.
     * @param callback {function(data: Object)} A function called upon receiving the data from the backend.
     * @param onError {function} A function called upon an error occuring
     */
    fetchCompletedUserCourses(callback, onError) {
        fetch("user/courses/completed", {headers: UserService.getAuthHeader()})
            .then(async response => {
                if (!response.ok) {
                    onError();
                    return;
                }
                const data = await response.json();
                callback(data);
            });
    },

    /**
     * Log out the current user. This function just deletes the local storage containing the user's login,
     * full name and email
     */
    logOut() {
        if (UserService.isLoggedIn()) {
            ls.set("user_data", null);
            ls.set("token", null);
        }
    },

    /**
     * Asynchronously check if the user's login token is still valid and not expired, or if they are logged in
     * in the first place. The callback will not invoke if the user login is not valid and instead will log 
     * the user out if their token was invalid. 
     * @param callback {function(data: Object)} A function called upon receiving the data from the backend.
     */
    checkLogin(callback) {
        fetch("login/check", {headers: UserService.getAuthHeader()})
            .then(response => {
                callback(response.ok)
                if (!response.ok) {
                    this.logOut();
                }
            });
    },

};

export default UserService;