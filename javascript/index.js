function isvalidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }
    if (password.includes(" ")) {
        return false;
    }
    if (password.includes(username)) {
        return false;
    }
    return true;
}

console.log(isvalidPassword("abc123459", "user"));