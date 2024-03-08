//Create a simple library management system that allows users to add books, borrow, and return books. Books should be represented as objects with properties like title, author, and availability.
1.//Implement functions to add books to the library.
let book =[]
function addBook( title, author)
{
book.push({title, author , availablility:true});
console.log(`"${title}" by ${author} has been added to the library`);


}
addBook('computer', 'Bona');
addBook('Mathematics', 'onapo');
addBook('Economics', 'Damas');
addBook('physics', 'Rebecca');

// book.forEach(function(item,array,index){
//     console.log(item)
// }
// )
// console.log(book)
function displayAllList() {
    console.log("Books available in the library:");
    book.forEach(books => {
        console.log(`- "${books.title}" by ${books.author} is ${books.available ? 'available' : ' available'}`);
    });
}

displayAllList();
//Develop functions for users to borrow and return books, updating their availability status.

function borrowBook(title) {
    const bookIndex = book.findIndex(book => book.title === title && book.available);
    if (bookIndex !== -1) {
        book[bookIndex].available = false;
        console.log(`You have borrowed "${title}"`);
    } else {
        console.log(`the book, "${title}" is available for borrowing.`);
    }
}

function returnBook(title) {
    const bookIndex = book.findIndex(book => book.title === title && !book.available);
    if (bookIndex !== -1) {
        book[bookIndex].available = true;
        console.log(`You have returned "${title}"`);
    } else {
        console.log(`the book, "${title}" is currently borrowed or is available in the library.`);
    }
}
    borrowBook('Economics');
    borrowBook('Mathematics');
    returnBook('Mathematics');
    function displayAvailability() {
        console.log("Books available in the library:");
        book.forEach(book => {
            console.log(`- "${book.title}" by ${book.author} is ${book.available ? 'available' : ' available'}`);
        });
    }
    displayAvailability();





