'use strict';

window.addEventListener("load", () => {

  const page = window.location.href.slice(window.location.href.lastIndexOf("/", window.location.href.length));
  if (page === "/login.html") checkLoginSignUp();

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
  if (e.textContent === "Login") {
    // postDataToServer('profile.html', {
    //   // username:
    // });
  } else if (e.textContent === "Sign Up") {

  } else {
    console.log(e.textContent);
    throw new Error("Login Error");
  }
}

//Styles login.html depending on whether user is logging in or not
function checkLoginSignUp() {
  if (localStorage.getItem("login") === "true") {
    document.getElementById("confirm-password-label").className = "hidden";
    document.getElementById("email-label").style.top = "25%";
    document.getElementById("password-label").style.top = "50%";
    localStorage.setItem("login", "");
    document.getElementById("submit").textContent = "Login";
  } else if (localStorage.getItem("login") === "false") {
    document.getElementById("confirm-password-label").className = "";
    localStorage.setItem("login", "");
    document.getElementById("submit").textContent = "Sign Up";
  }
}

/**
 * Checks if the user has entered a valid password using
 * a regular expression
 *
 * @param e   Element of password to be checked
 */
function checkPasswordValid(e) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/g;
  //Have to store regex test in variable before testing
  //it due to a weird bug
  const verification = regex.test(e.value);

  e.style.borderBottomColor = (verification)?"#2F8":"#F11";
}

/**
 * Checks whether the confirm password field is the same
 * as the user entered password
 *
 * @param e   Element of confirm password field to be
 *            checked
 */
function checkConfirmPasswordValid(e) {
  if (!e) return false;
  if (e.value === "") return false;

  const passwordElem = document.getElementById("password");
  const password = passwordElem.value;

  e.style.borderBottomColor = (e.value === password)?"#2F8":"#F11";
}

/**
 * Sends a post request to the server.
 *
 * @param url            url post request is sent to
 *
 * @param data           data sent with the post request *                       to url in JSON format
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
  const jsonResponse = response.json();
  return jsonResponse;
}
