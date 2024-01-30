/*
Name: Zulkifli Salami
January 30th, 2024
ICE3
*/

// Array literal
let myArray = [1,2,3,4,5];

// Creating arrays using the constructor
let myArrayConstructor = new Array();
console.log(`Empty array: ${myArrayConstructor}`);
myArrayConstructor.push(24);
console.log(`Array: ${myArrayConstructor}`);

//Create array using values in the constructor
let myArrayConstructor2 = new Array(1,2,3,4,5);
console.log(`Array 2: ${myArrayConstructor2}`);
console.log('Array 2:', myArrayConstructor2);

let array2 = new Array(10);
console.log(`New array 3: ${array2}`);
// Add push 80 to the array
array2.push(80);
console.log(`New array 3: ${array2}`);

// Tuesday
let tuesdayArray = new Array(10).fill("Tuesday");
console.log(`Class is on ${tuesdayArray}`); 

/**
 * Squares two numbers
 * @param {*} x 
 * @returns square value of the number
 */
function square(x) {
    return x * x;
}

let nums = new Array(1, 33, 22, 5);
let squaredNums = nums.map(function(value){
    return square(value);
});

console.log(`Squared numbers: ${squaredNums}`);

// squareNums using arrow function
let squareNums = nums.map(value =>{
    return square(value)
});
console.log(`Square Nums Arrow Function: ${squareNums}`);