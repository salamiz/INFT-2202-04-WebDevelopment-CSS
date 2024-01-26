// Function to validate the entire form
function validateForm() {
    // Validate username
    var username = document.getElementById('usernameInput').value;
    var generalError = document.getElementById('generalError');
    if (!validateUsername(username)) {
        generalError.textContent = 'Invalid username. Username must be between 3 to 16 characters long.';
        generalError.style.backgroundColor = 'red';
        return false;
    }

    // Email Validation
    var email = document.getElementById('inputEmail4').value;
    if (!validateEmailAddressSimple(email)) {
        generalError.textContent = 'Invalid email. Must be in format xxx@xxx.com.';
        generalError.style.backgroundColor = 'red';
        return false;
    }
    return true;
}

// Function to validate the username
function validateUsername(username) {
    // Regex for username validation (example: letters, numbers, underscores, 3-16 characters)
    var usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    return usernameRegex.test(username);
}

// Clear error messages on form reset
document.getElementById('registration-form').onreset = function() {
    document.getElementById('generalError').textContent = '';
    document.getElementById('generalError').style.backgroundColor = 'transparent';
    // Clear other specific error fields as needed
};

 


/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */
function validateEmailAddressSimple(emailString) {
    console.log('in ValidateEmailAddress');

    // check for @ sign
    let atSymbol = emailString.indexOf('@');
    if(atSymbol < 1) return false;

    let dot = emailString.indexOf('.');
    if(dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;

    return true;
}

/*
 * Validate the email address
* @param {string} emailString
* @returns {boolean}    validation result
*/
function validateEmailAddressRegex(emailString) {
    //the regular expression to validate the email address for string+string|number bewten 2-20 characters
    // note the / and / at the beginning and end of the expression
    var emailRegex = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;

    //return true if the email address is valid - how to use regex
	return !!emailString && typeof emailString === 'string'
		&& emailString.match(emailRegex);
}


//TODO:
// Make all fields required (HTML)
// Add a pattern attribute in the telephone element (HTML)
// Ensure the password is redacted into dots on screen when typed in (HTML)
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!)
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?)
// Validate the username when the form is submitted
// Clear any additional error message and highlighting when the form is reset
// COMMENT EVERYTHING :D
