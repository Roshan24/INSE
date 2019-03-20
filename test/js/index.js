window.addEventListener('load', () => {

    window.addEventListener('scroll', handleScroll);

});

function handleScroll() {
    let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    const parallax = document.getElementById("parallax");

    let blur;

    blur = scrollTop / 64;

    parallax.style.filter = `blur(${blur}px)`;
}