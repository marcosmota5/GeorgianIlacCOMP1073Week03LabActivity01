// ### Challenge 1 ###
console.log("Challenge 1");

// Create the array
const arr = [1, 2, 3, 4, 5];

// Logs the initial array
console.log(arr);

// Adds two items
arr.push(0, 6);

// Sort the array
arr.sort().reverse();

// Logs the array again
console.log(arr);




// ### Challenge 2 ###
console.log("Challenge 2");

// Creates the initial arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Logs both array
console.log(arr1);
console.log(arr2);

// Creates a new array which is both previous arrays combined, also create a Set with that array
// so it removes duplicates, then uses the spread syntax [...] to return back an array from the Set
const arr3 = [... new Set(arr1.concat(arr2))];

// Logs the third array
console.log(arr3);