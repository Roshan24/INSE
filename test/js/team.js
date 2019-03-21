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



    getTeams();

});

async function getTeams() {
    const dir = window.location.href.slice(0, window.location.href.lastIndexOf("/"));

    const res = await fetch(`${dir}/teamJoin.html`, { method: GET });
    console.log(res);
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
    return response;
    // const jsonResponse = response.JSON();
    // return jsonResponse;
}