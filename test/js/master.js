'use strict';

window.addEventListener("load", () => {

    loadNavBar();
    checkLoggedIn();

    window.addEventListener("scroll", (e) => {
        handleScroll(e);
    });

    const login = document.getElementById("login");
    if (login) {
        login.addEventListener("click", () => {
            localStorage.setItem("login", "true");
        });
    }

    const signup = document.getElementById("signup");
    if (signup) {
        signup.addEventListener("click", () => {
            localStorage.setItem("login", "false");
        });
    }

});

//Loads and styles the navigtion bar
function loadNavBar() {
    const nav = document.getElementById("nav");
    nav.innerHTML = '<a href="index.html" class="active">Home</a><a href="team.html">Teams</a><a href="league.html">Leagues</a><a href="about-us.html">About Us</a><span id="nav-login"><i class="material-icons" id="account">account_circle</i><a href="login.html" id="login">Login</a> or <a href="login.html" id="signup">Sign up</a></span>';

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
        navLogin.innerHTML = '<a href="login.html">Login</a> or <a href="login.html" id="signup">Sign up</a>'
    } else if (localStorage.getItem("loggedIn") == "false") {
        navLogin.innerHTML = '<a href="login.html" id="login">Login</a> or <a href="login.html" id="signup">Sign up</a>'
    } else if (localStorage.getItem("loggedIn") == "true") {
        navLogin.innerHTML = '<i class="material-icons" id="account">account_circle</i>'

        const account = document.getElementById("account");
        account.addEventListener("click", (e) => {
            handleAccountBtnClicked();
        });
    }

}

// TODO: Will redirect user to their personal profile
function handleAccountBtnClicked() {

}