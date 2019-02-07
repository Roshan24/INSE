'use strict';

window.addEventListener("load", () => {

  loadNavBar();
  checkLoggedIn();

  window.addEventListener("scroll", (e) => {
    handleScroll(e);
  });

  //Special page load for login.html
  const page = window.location.href.slice(window.location.href.lastIndexOf("/", window.location.href.length));

  if (page === "/login.html") checkLoginSignUp();

});

//Loads and styles the navigtion bar
function loadNavBar() {
    const nav = document.getElementById("nav");
    nav.innerHTML = '<a href="index.html" class="active">Home</a><a href="sport.html">Sports</a><a href="league.html">Leagues</a><a href="about-us.html">About Us</a><span id="nav-login"><i class="material-icons" id="account">account_circle</i><a href="login.html" id="login" onclick="localStorage.setItem(\'login\', \'true\')">Login</a> or <a href="login.html" id="signup" onclick="localStorage.setItem(\'login\', \'false\')">Sign up</a></span>';

    setActive(window.location.href, nav);
}

/**
 * Set class of button to active page to 'active'
 *
 * @param page   href of the page the user is on
 *
 * @param nav    nav bar to be changed
 */
function setActive(page, nav) {
    const navChildren = nav.children;

    for (const child of navChildren) {
        child.className = "";
        if (child.href == page) {
            child.className = "active";
        }
    }
}

//Will be implemented when mobile nav page is styled
function styleMobileNav() {

}

/**
 * Adds in fancy effect on scroll (shadow below nav bar)
 *
 * @param e   The screen
 */
function handleScroll(e) {
  e.preventDefault();
  //Below finds where the user has scrolled to
  let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

   if (scrollTop > 0) {
     $('nav').css("box-shadow", "0 0 5px rgba(0, 0, 0, 0.3)");
   } else {
     $('nav').css("box-shadow", "0 -5px 3px rgba(0, 0, 0, 0.3)");
   }
}

// Below function uses localStorage to check whether user
// is logged in, and ajusts nav bar accordingly
function checkLoggedIn() {
  const navLogin = document.getElementById("nav-login");

  if (localStorage.getItem("loggedIn") == undefined) {
    localStorage.setItem("loggedIn", "false");
    navLogin.innerHTML = '<a href="login.html" id="login" onclick="localStorage.setItem(\'login\', \'true\')">Login</a> or <a href="login.html" id="signup" onclick="localStorage.setItem(\'login\', \'false\')">Sign up</a>'
  } else if (localStorage.getItem("loggedIn") == "false") {
    navLogin.innerHTML = '<a href="login.html" id="login" onclick="localStorage.setItem(\'login\', \'true\')">Login</a> or <a href="login.html" id="signup" onclick="localStorage.setItem(\'login\', \'false\')">Sign up</a>'
  } else if (localStorage.getItem("loggedIn") == "true") {
    navLogin.innerHTML = '<i class="material-icons" id="account">account_circle</i>'

    const account = document.getElementById("account");
    account.addEventListener("click", (e) => {
        handleAccountBtnClicked();
    });
  }

}

// TODO: Complete this function. Will handle the user
// logging in/signing up
function handleUserLoginSignUp(login) {

  console.log(login);

  if (login.toLowerCase() === "login") {

  }

}

// TODO: Will redirect user to their personal profile
function handleAccountBtnClicked() {

}


/**
 * Sends a post request to the server.
 *
 * @param url            url post request is sent to
 *
 * @param data           data sent with the post request *                       to url
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

//Styles login.html depending on whether user is logging in or not
function checkLoginSignUp() {
  if (localStorage.getItem("login") === "true") {
    document.getElementById("confirm-password-label").className = "hidden";
    document.getElementById("email-label").style.top = "25%";
    document.getElementById("password-label").style.top = "50%";
    localStorage.setItem("login", "");
  } else if (localStorage.getItem("login") === "false") {
    document.getElementById("confirm-password-label").className = "";
    localStorage.setItem("login", "");
  }
}
