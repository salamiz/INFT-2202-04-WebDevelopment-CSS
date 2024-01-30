/*
Name: Zulkifli Salami
January 30th, 2024
ICE3 - Part 2 - Selectors
*/

console.log("selectors.js is ready");
$(function(){
    console.log("DOM is ready");
});


/**
 * Highlight function
 * @param {*} element 
 */
function highlight(element){
    element.css('background-color', '#fcf300040');
}

/**
 * cssSelector function
 */
function cssSelectors(){
    //updating by tag 
    $('p').css('background-color', '#2a9d8f');  
    //updating by class (class = red-box)
    $('.red-box').css('background-color', '#2a9d8f'); 
    // updating by id (id = "list")
    $('#list').css('font-size', '40px');
    $('li:odd').css('background-color', "#fcf300040");
}


/**
 * Traversing the DOM
 */
function traversingTheDOM(){
    //$('#list').prev().css('background-color', "#2a9d8f")
    //$('#list').prev().next().css('background-color', "#2a9d8f");
    $('#list').find('li').css('background-color', '#2a9d8f');
    // traverse up to 1 level
    $('#list').parent('div').css('font-size', '24px');
    // traverse up to the body
    $('#list').parents('body').css('font-size', '24px');
}

/**
 * Filtering through the page
 */
function filtering(){
    $('#list').find('li').filter(':even').css('background-color', '#2a9d8f');
    // long function of the shortcut .filter(':even)
    $('#list').find('li').filter(function (i){
        return i % 2 === 0;
    }).css('background-color', 'red');
}


function addReplaceRemove(){
    $('ul#list li:first').append($("<ul><li> I'm the last item of the firstsub list </li></ul>"));
    // add to top
    $('ul#list').prepend($('<li> I am the last item of the first sub list </li>'));

    $('.red-box').after("<div class=\"red-box new-box\">New Red Box</div>");

    let newText = 'Last night I dreamt of San Pedro';
    $('p.grumpy').replaceWith(`<p>${newText}</p>`);
}

// Calling the functions
//cssSelectors();
//traversingTheDOM();
// filtering();
addReplaceRemove();