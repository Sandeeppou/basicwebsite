// Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        logo.style.display = "block";
    }
    else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}
function validateForm() {
    var username = document.forms["form-login"]["username"].value;
    var email = document.forms["form-login"]["email"].value;
    var password = document.forms["form-login"]["password"].value;
    if (username == "") {
        alert("First Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Last Name must be filled out");
        return false;
    }
    if (password == "") {
        alert("Email must be filled out");
        return false;
    }
}
function validateForm(){
var register_username = document.forms["register-form"]["register-username"].value;
    var register_email = document.forms["register-form"]["register_email"].value;
    var register_password = document.forms["register-form"]["register_password"].value;
    if (register_username == "") {
        alert("Username must be filled out");
        return false;
    }
    if (register_email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (register_password == "") {
        alert("Password must be filled out");
        return false;
    }
}
function toggleText(){
    var registration = document.getElementById("registration");
    if (registration.style.display === "none") {
        registration.style.display = "block";
    } else {
        registration.style.display = "none";
    }
}

