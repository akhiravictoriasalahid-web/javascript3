function isvalidPassword(password, username) {
    if (password.length < 8) {
        console.log("Your Password is not long enough");
        return false;
    }
    if (password.includes(" ")) {
        console.log("Your Password may not include spaces");
        return false;
    }
    if (password.includes(username)) {
        console.log("Your Password may not include Username");
        return false;
    } else {
        console.log("Your Password is approve");
        return true;
    }
}

console.log(isvalidPassword("abc123459", "user"));