 "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

var person = {};
    person.firstName = "David";
    person.lastName =  "Collins";
    person.sayHello = function () {
       return "Hello from " + person.firstName + " " + person.lastName + "!";
    };

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

// function totalSpent(amtPurchase) {
//     if (amtPurchase > 200) {
//         return amtPurchase * .88;
//     } else {
//         return amtPurchase;
//     }
// }
//
// function shopperDetails (shopper) {
//     let strDetail = shopper.name + " purchased a total of $" + shopper.amount + ".";
//     let strDiscount = shopper.name + " spent a total of $" + totalSpent(shopper.amount) + ".";
// }

function HEBTransaction () {
    var amtSpent;
    var discountApplied;
    shoppers.forEach(function (shopper) {
        if (shopper.amount > 200) {
            amtSpent = parseFloat(shopper.amount * .88);
            discountApplied = " did receive a discount and spent $"
        } else {
            amtSpent = parseFloat(shopper.amount);
            discountApplied = " did not receive a discount and spent $"
        }
        console.log(shopper.name + discountApplied + amtSpent.toFixed(2) + ".");
    });
 }

HEBTransaction();

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
var books = []
    createBook("Bad Luck Streak in Librarian School","Terwilliker","Stephens");
    createBook("The Amazing Lack of Amazingness in Kansas","W.S. 'Poppa'","Kramden");
    createBook("I Was the Walrus, but Now I\'m the Carpenter","Nancy","Lubovna");
    createBook("What Is Your Quest?","Larissa","Márquez Espadrilla");
    createBook("This Book Intentionally Left Untitled","Anonymous","Busch");

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
function bookInfo () {
    console.log("-----")
    for (let i = 0;i < books.length;i++) {
        console.log("Book #" + (i + 1));
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
        console.log("---");
    }
}

function showBookInfo (bookIndex) {
    console.log(books[bookIndex].title + " was written by " + books[bookIndex].author.firstName + " " + books[bookIndex].author.lastName + ".");
}
showBookInfo(1);

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
function createBook(bookTitle,authorFirst,authorLast) {
    var bookEntry = {
        title : bookTitle,
        author : {
            firstName : authorFirst,
            lastName : authorLast
        }
    }
    books.push(bookEntry);
}