console.log("xhr_script.js loaded");

// get the button for xhr
let btn_xhr = $('#xhrJoke');

// create a url variable
let url_xhr = "https://icanhazdadjoke.com/";

// create a click callback that handles the API call
$(btn_xhr).on('click', (() => {
    console.log("xhr button clicked");
    // create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // configure the request
    xhr.open("GET", url_xhr);
    xhr.setRequestHeader("Accept", "application/json");
    // create the callback
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let res = JSON.parse(xhr.responseText);
            console.log(res);
            // set the output
            $('#output').text(res.joke);
        }
    };
    // send the request
    xhr.send();
}));

