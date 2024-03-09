/**
 * NAME: Zulkifli Salami 
 * DATE: 03-08-2024
 */
console.log('pixabay.js loaded');

// API Key for Pixabay
const PIXABAY_API_KEY = '42776188-2e45d7382395ffa8f8795ec63'; // normally we would load a key through the .env file
// URL for Pixbay request
const PIXABAY_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&image_type=photo&orientation=horizontal&per_page=30&q=Cat`;
// Constant for image count


/**
 * makePosts
 * Creates posts for pictures.
 * @param {Array} images - The array of image objects from the Pixabay API response.
 */
const makePosts = (images) => {
    images.forEach((image) => {
        const cardHtml = `
            <div class="card" style="width: 18rem;">
                <img src="${image.webformatURL}" class="card-img-top" alt="${image.tags}">
                <div class="card-body">
                    <h5 class="card-title">Image Tags</h5>
                    <p class="card-text">${image.tags}</p>
                </div>
            </div>
        `;
        $('.blog-column').append(cardHtml);
    });
};

/**
 * getPictures
 * retrieves the pictures from Pixabay API
 */
const getPictures = () => 
{
    // use fetch to get the pictures from the API
    fetch(PIXABAY_URL)
        .then(response => response.json())
        .then(data => {
            if(data.hits && data.hits.length > 0) {
                makePosts(data.hits);
            } else {
                console.error('No images found');
            }
        })
        // handle error(s) with .catch()
        .catch(error => {
            console.error('Error fetching images:', error);
        });
};
$(document).ready(function(){
    getPictures();
});
