// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
let list = document.getElementsByTagName('ul')[0];

/* ADD NEW ITEM TO END OF LIST
// Create element
// Create text node
// Add text node to element
// Add element end of list
*/
let newListItemEnd = document.createElement('li');
let newListItemEndText = document.createTextNode('cream');
newListItemEnd.appendChild(newListItemEndText);
list.appendChild(newListItemEnd);

/* ADD NEW ITEM START OF LIST
// Create element
// Create text node
// Add text node to element
// Add element to list
*/
let newListItemStart = document.createElement('li');
let newListItemStartText = document.createTextNode('kale');
newListItemStart.appendChild(newListItemStartText);
list.insertBefore(newListItemStart, list.firstChild);

// All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
// Loop through elements
// Change class to cool
let listItems = document.querySelectorAll('ul li');
for (let i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
// h2 text
// No. of <li> elements
// Content
// Update h2 using innerHTML (not textContent) because it contains markup
let h2 = document.querySelector('h2');
let listCount = listItems.length;
h2.innerHTML = `Buy groceries <span>${listCount}</span>`;
