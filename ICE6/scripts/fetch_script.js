console.log("fetch_script.js loaded");

// get the button for fetch
let btn_fecth = $('#fetchJoke');

// create a url variable
let url_fetch = "https://icanhazdadjoke.com/";

//need a header Accept value set to 'application/json'
let myFetchHeader = {"Accept": "application/json"};

// create the callback for the click
$(btn_fecth).on('click', (() => {
    // use fetch
    fetch(url_fetch, {
        // give the necessary header data
        headers: myFetchHeader}) 
        // first then() to recieve the promise
        .then((result) => {
            // send the json from the promise on to the next then()
            return result.json();
        })
        // second then() to handle the returned joke text   
        .then((jsonRes) => {
            console.log(jsonRes);
            // set the output
            $('#output').text(jsonRes.joke);
        })
})) 



