function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex' 
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none' 
}

// VALIDASI INPUT
function validateData() {
    var first_name = document.getElementById('first_name');
    var last_name = document.getElementById('last_name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confpass = document.getElementById('confpass');

    if (first_name.value.length < 3) {
        alert("First Name must be at least 3 characters!");
    } else if (last_name.value.length < 3) {
        alert("Last Name must be at least 3 characters!");
    } else if (!email.value.includes('@')){
        alert("Email must contains '@'");
    } else if (!checkAlphaNum(password.value)) {
        alert("Password must be AlphaNumeric");
    } else if (password.value != confpass.value) {
        alert("Password and Confirm Password must be the same!");
    } else {
        alert("Form has successfully submitted");
    }

    var isValid = true;

    if (isValid) {
        window.location.href = 'http://127.0.0.1:5500/html/home.html';
    } else {
        alert('Data tidak valid. Silakan coba lagi.');
    }
}

// VALIDASI PASSWORD
function checkAlphaNum(password) {
    var isAlpha = false;
    var isNumber = false;
    for (let i = 0; i < password.length; i++) {
        if(isNaN(password[i])) {
            isAlpha = true;
        } else {
            isNumber = true;
        }

        if(isAlpha && isNumber) {
            return true;
        }
    }
    return false;
}