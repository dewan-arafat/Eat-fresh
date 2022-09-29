//step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //step-2: get the email address inside the input email field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if (email === 'araf.pust16@gmail.com' && password === "aafat") {
        window.location.href = 'bank.html';
    }
    else {
        alart('Invalid Email or Password')
    }



})