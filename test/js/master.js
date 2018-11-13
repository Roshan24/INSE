'use strict';

function init() {
    loadNavBar();
    setActive(window.location.href)
}

window.addEventListener("load", init);

function loadNavBar() {
    let nav = document.getElementById("nav");
    nav.innerHTML = '<a href="index.html" class="active">Home</a><a href="sport.html">Sports</a><a href="league.html">Leagues</a><a href="about-us.html">About Us</a><span id="nav-login"><a href="#" id="login">Login</a> or <a href="#" id="signup">Sign up</a></span>'

}

function setActive(page) {
    let nav = document.getElementById("nav");
    let navChildren = nav.children;
    for (const child of navChildren) {
        child.className = "";
        if (child.href == page) {
            child.className = "active";
        }
    }
}
