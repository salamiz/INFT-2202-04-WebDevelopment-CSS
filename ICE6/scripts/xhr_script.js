console.log("xhr_script.js loaded");

// get the button for xhr
let btn_xhr = $('#xhrJoke');

// create a url variable
let url = "https://icanhazdadjoke.com/";

// create a click callback that handles the API call
$(btn_xhr).click(() => {
    console.log("xhr button clicked");
    // create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // configure the request
    xhr.open("GET", url_xhr);
    xhr.setRequestHeader("Accept", "application/json");
    // create the callback
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let joke = JSON.parse(xhr.responseText);
            console.log(joke);
            $('#xhrOutput').text(joke.joke);
        }
    };
    // send the request
    xhr.send();

});

