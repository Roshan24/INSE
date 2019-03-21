window.addEventListener('load', () => {

    const addBtn = document.getElementById('add');
    let loggedIn = false;
    if (localStorage.getItem('loggedIn') == "true") {
        loggedIn = true;
    } else if (localStorage.getItem('loggedIn') == "true") {
        loggedIn = false;
    } else {
        // throw new error("Invalid local storage variable input");
    }

    addBtn.style.display = (loggedIn) ? "block" : "none";

});