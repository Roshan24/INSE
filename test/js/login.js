'use strict';

window.addEventListener("load", () => {

    checkLoginSignUp();

    const confirmPassword = document.getElementById("confirm-password");
    if (confirmPassword) {
        confirmPassword.addEventListener("input", (e) => {
            checkConfirmPasswordValid(e.target);
        });
    }

    const password = document.getElementById("password");
    if (password) {
        password.addEventListener("input", (e) => {
            checkPasswordValid(e.target);
            checkConfirmPasswordValid(confirmPassword);
        })
    }

    const submit = document.getElementById("submit");
    if (submit) {
        submit.addEventListener("click", (e) => {
            handleSubmit(e.target);
        })
    }

});

// TODO: Complete this function. Will handle the user
// logging in/signing up
function handleSubmit(e) {

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    if (!confirmPassword) {
        postDataToServer(`profile.html`, {
            username,
            password
        });
    } else {
        postDataToServer(`./profile.html`, {
            username,
            password,
            confirmPassword
        });
    }



    // if (e.textContent === "Login") {
    //     // postDataToServer('profile.html', {
    //     //   // username:
    //     // });
    // } else if (e.textContent === "Sign Up") {

    // } else {
    //     console.log(e.textContent);
    //     throw new Error("Login Error");
    // }
}

//Styles login.html depending on whether user is logging in or not
function checkLoginSignUp() {
    if (localStorage.getItem("login") === "true" || !localStorage.getItem("login")) {
        document.getElementById("login-signup-h").textContent = "Login";
        document.getElementById("confirm-password-label").className = "hidden";
        document.getElementById("email-label").style.top = "25%";
        document.getElementById("password-label").style.top = "50%";
        localStorage.setItem("login", "");
        document.getElementById("submit").textContent = "Login";
    } else if (localStorage.getItem("login") === "false") {
        document.getElementById("login-signup-h").textContent = "Sign Up";
        document.getElementById("confirm-password-label").className = "";
        localStorage.setItem("login", "");
        document.getElementById("submit").textContent = "Sign Up";
    }
}

/**
 * Checks if the user has entered a valid password using
 * a regular expression. Shows user using coloured text/underlining
 *
 * @param e   Element of password to be checked
 */
function checkPasswordValid(e) {
    //Full regex:
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/g;

    //Lists of regexs and elements
    //[lowercase, uppercase, number, special, length]
    const regexs = [/^(?=.*[a-z])/g, /^(?=.*[A-Z])/g, /^(?=.*\d)/g, /^(?=.*[@$!%*?&])/g, /^[A-Za-z\d@$!%*?&]{8,50}$/g];
    const elems = [document.getElementById("lowercase"), document.getElementById("uppercase"), document.getElementById("number"), document.getElementById("special"), document.getElementById("length")];

    for (let i = 0; i < regexs.length; i++) {
        elems[i].style.color = (regexs[i].test(e.value)) ? "#2F8" : "#F11";
    }

    e.style.borderBottomColor = (regex.test(e.value)) ? "#2F8" : "#F11";
}

/**
 * Checks whether the confirm password field is the same
 * as the user entered password
 *
 * @param e   Element of confirm password field to be
 *            checked
 */
function checkConfirmPasswordValid(e) {
    if (!e || e.value === "") return false;

    const passwordElem = document.getElementById("password");
    const password = passwordElem.value;

    e.style.borderBottomColor = (e.value === password) ? "#2F8" : "#F11";
}

/**
 * Sends a post request to the server.
 *
 * @param url            url post request is sent to
 *
 * @param data           data sent with the post request 
 *                       to url in JSON format
 *
 * @return jsonResponse  JSON response from the server
 */
async function postDataToServer(url = ``, data = {}) {
    const response = fetch(url, {
        method: "POST",
        mode: "same-origin",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    console.log(url);
    // const jsonResponse = response.JSON();
    // return jsonResponse;
}