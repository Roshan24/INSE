'use strict';

window.addEventListener("load", () => {

  loadNavBar();

  window.addEventListener("scroll", (e) => {
    handleScroll(e);
  });

  const loginBtn = document.getElementById("login");
  const signupBtn = document.getElementById("signup");
  loginBtn.addEventListener("click", (e) => {
    handleLoginBtnClicked(e);
  });
  signup.addEventListener("click", (e) => {
    handleLoginBtnClicked(e);
  });

  const closeBtn = document.getElementById("close");
  closeBtn.addEventListener("click", () => {
    document.getElementById("login-modal").className = "hidden";
  })

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

function handleScroll(e) {
  e.preventDefault();
  let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  // document.getElementById("nav").style.paddingLeft = scrollTop;
  // $("nav").css("margin-left", scrollTop + "px");
   if (scrollTop > 0) {
     $('nav').css("box-shadow", "0 0 5px rgba(0, 0, 0, 0.3)");
   } else {
     $('nav').css("box-shadow", "0 -5px 3px rgba(0, 0, 0, 0.3)");
   }
}

function handleLoginBtnClicked(e) {

  document.getElementById("login-modal").className = "";
  document.getElementById("confirm-password").className = (e.target.textContent === "Login")?"hidden":"";

  document.getElementById("login-modal-title").textContent = e.target.textContent;
}
