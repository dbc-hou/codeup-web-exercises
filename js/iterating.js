(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names = ["Bob","Carol","Ted","Alice"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log("There are " + names.length + " names in the names array.");
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

console.log("Hello, my name is " + names[0] + ".");
console.log("Hello, my name is " + names[1] + ".");
console.log("Hello, my name is " + names[2] + ".");
console.log("Hello, my name is " + names[3] + ".");

names.forEach(function (name) {
    console.log("Let me introduce you to " + name + ".");
})
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
names.forEach(function (name) {
    console.log("Nice to meet you, " + name + "!");
})
// for (var i=0;i<(names.length);i++) {
//     console.log("Nice to meet you, " + names[i] + "!");
// }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
function first(arrayInput1) {
    console.log(arrayInput1[0]);
}

function second(arrayInput2) {
    console.log(arrayInput2[1]);
}

function last(arrayInput3) {
    console.log(arrayInput3[arrayInput3.length - 1]);
}

    first([1,2,3,4,5]);
    second([1,2,3,4,5]);
    last([1,2,3,4,5]);
})();

