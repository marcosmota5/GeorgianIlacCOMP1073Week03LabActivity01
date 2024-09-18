// ### Step 1 ###
console.log("Step 1");

// Create the array
const library = [
    {
      title: "The Lord Of The Rings: The Fellowship Of The Ring",
      author: "J.R.R. Tolkien",
      status: {
        own: true,
        reading: false,
        read: false
      }
    },
    {
      title: "The Hitchhiker's Guide To The Galaxy",
      author: "Douglas Adams",
      status: {
        own: true,
        reading: false,
        read: false
      }
    },
    {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      status: {
        own: true,
        reading: false,
        read: false
      }
    }];

// Logs the array
console.log(library);

// ### Step 1 ###
console.log("Step 2");

// Set the read value to true to all 
library.forEach(book => {
    book.status.read = true;
});

// Logs the array
console.log(library);

// ### Step 3 ###
console.log("Step 3");

// Destructure the title of the first book and rename it to firstBook
const { title: firstBook } = library[0];

// Logs the value of the first book's title stored in the variable firstBook
console.log(firstBook);

// ### Step 4 ###
console.log("Step 4");

// Gets the library as a json string
const libraryJson = JSON.stringify(library, null, 2);

// Logs the JSON string
console.log(libraryJson);