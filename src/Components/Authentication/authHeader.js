function authHeader() {
    let user = JSON.parse(localStorage.getItem("user"));
    user.authdata = undefined;
    
    if (user && user.authdata) {
        return {"Authorization": "Basic" + user.authdata};
    } else {
        return {};
    }
}