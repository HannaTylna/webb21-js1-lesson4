/* // Defining the values of form elements 
const firstName = document.contactForm.firstName.value;
const lastName = document.contactForm.lastName.value;
const email = document.contactForm.email.value;

// Defining error variables with a default value
const firstNameError = lastNameError = emailError = true;

function printError(elemId, hintMsg) {
    if(firstNameError){
       return document.getElementById(elemId).innerHTML = hintMsg;
    }else{
        return document.getElementById(elemId).innerHTML = "Thank you for your application"
    }
};

// Defining a function to validate form 
function validateForm() {
    // Validate name
    if(firstName == "") {
        printError("firstNameError", "Please enter your name");
    } else {
        printError("firstNameError", "");
        firstNameError = false;
    }
    if(lastName == "") {
        printError("lastNameError", "Please enter your last name");
    } else {
        printError("lastNameError", "");
        lastNameError = false;
    }
    // Validate email address
    if(email == "") {
        printError("emailError", "Please enter your email address");
    } else {
        printError("emailError", "");
        emailError = false;
    }
    // Prevent the form from being submitted if there are any errors
    if((firstNameError || lastNameError || emailError) == true) {
       return false;
    }
}; */