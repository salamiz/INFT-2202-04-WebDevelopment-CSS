console.log('xhr_script.js loaded')

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// instantiate the XMLHttpRequest object with the new keyword
let xhr = new XMLHttpRequest();


// create a callback function to fire when the onreadystatechange happens
xhr.onreadystatechange = function() {
    // check that the state is done
    if (xhr.readyState === 4) {
        // turn into json
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        // update the 1st image
        document.getElementById('photo1').src = data[0].url;
        // update the 1st figcaption
        document.getElementById('caption1').innerText = data[0].title;
        // update the 2nd image
        document.getElementById('photo2').src = data[1].url;
        // update the 2nd figcaption
        document.getElementById('caption2').innerText = data[1].title;
    }
    // send error message
    else {
        console.log('There was a problem with the request.');
    }
}

// use the .open() method to configure the object
xhr.open('GET', url_photos, true);

// add datatype to header
xhr.setRequestHeader('Accept', 'application/json');

// use the .send() method to send the request
xhr.send();