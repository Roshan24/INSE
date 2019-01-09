'use strict';

window.addEventListener("load", () => {

  //Code below for future stuff

  // window.addEventListener("scroll", (e) => {
  //   e.preventDefault();
  //   var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  //   // document.getElementById("nav").style.paddingLeft = scrollTop;
  //   $("nav").css("margin-left", scrollTop + "px");
  //   console.log(scrollTop);
  // })

    loadNavBar();
});

function loadNavBar() {
    const nav = document.getElementById("nav");
    nav.innerHTML = '<a href="index.html" class="active">Home</a><a href="sport.html">Sports</a><a href="league.html">Leagues</a><a href="about-us.html">About Us</a><span id="nav-login"><a href="#" id="login">Login</a> or <a href="#" id="signup">Sign up</a></span>';

    setActive(window.location.href, nav);
}

function loadLogo(){
//   const logo = document.getElementById("logo");
//   nav.innerHTML = <img src="" alt = "SportVantage">
//
}

function setActive(page, nav) {
    const navChildren = nav.children;
    for (const child of navChildren) {
        child.className = "";
        if (child.href == page) {
            child.className = "active";
        }
    }
}

function styleMobileNav() {

}
