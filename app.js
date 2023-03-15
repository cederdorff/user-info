"use strict";

window.addEventListener("load", initApp);

function initApp() {
    // Event Listeners
    document.querySelector("#form-create").addEventListener("submit", createUser);
}

function createUser(event) {
    event.preventDefault();

    const name = this.name.value;
    const title = this.title.value;
    const mail = this.mail.value;
    const image = this.image.value;

    console.log(name);
    console.log(title);
    console.log(mail);
    console.log(image);

    // validate user info
    const isValid = validateUser(name, title, mail, image);
    console.log(isValid);
}

function validateUser(name, title, mail, image) {
    if (name && title && mail && image) {
        console.log("User is valid");
        return true;
    } else {
        console.log("User is not valid");
        return false;
    }
}
