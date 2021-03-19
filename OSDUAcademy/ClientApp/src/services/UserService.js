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
    }
};

export default UserService;