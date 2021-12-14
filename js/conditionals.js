"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(colorName) {
//     if (colorName == "blue") {
//         return colorName + " is the color of the sky.";
//     }   else if (colorName == "red") {
//         return "Strawberries are " + colorName;
//     }   else {
//         return "I don't know anything about " + colorName;
//     }
// }


// function analyzeColor(colorName) {
//     switch (colorName) {
//         case "blue":
//             alert(colorName + " is the color of the sky.");
//             break;
//         case "red":
//             alert("Strawberries are " + colorName + ".");
//             break;
//         default:
//             alert("I don't know anything about " + colorName + ".");
//             break;
//     }
// }
//
// // //console.log(analyzeColor(randomColor));
// //
// function favoriteColor(colorChoice) {
//     let msgString = analyzeColor(colorChoice);
//     alert(msgString);
// }
// let myColor = prompt("What...is your favorite color?");
// // let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// // let randomColor = colors[Math.floor(Math.random() * colors.length)];
// analyzeColor(myColor);

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumber,totalAmount) {
//     var discountPct;
//     switch (luckyNumber) {
//         case 0:
//             discountPct = 0;
//             break;
//         case 1:
//             discountPct = .1;
//             break;
//         case 2:
//             discountPct = .25;
//             break;
//         case 3:
//             discountPct = .35;
//             break;
//         case 4:
//             discountPct = .5;
//             break;
//         case 5:
//             discountPct = 1;
//             break;
//         default:
//             discountPct = 0;
//             break;
//     }
//     return ((1-discountPct) * totalAmount).toFixed(2);
// }
// function applyDiscount() {
//     let calc = Math.floor(Math.random() * 6);
//     let totalBilled = parseFloat(prompt("Please enter the total amount billed: "))
//     alert("That will be $" + calculateTotal(calc,totalBilled) + ", please.")
// }
//
// applyDiscount();
//
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
//
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */
// function funWithNumbers() {
//     let wannaPlay = confirm("Do you qualified to enter an integer when prompted for one?");
//     if (wannaPlay) {
//         let numInput = prompt("OK, so enter an integer:");
//         let parsedNum = parseInt(numInput);
//         if ((parsedNum % 2 == 1) || (parsedNum % 2 == -1)) {
//             alert(parsedNum + ": That's an odd number, isn't it?")
//         } else {
//             alert(parsedNum + ": I believe that's an even number.")
//         }
//         let numPlus100 = parsedNum + 100;
//         alert("Add 100 to that, and you get " + numPlus100);
//         if (parsedNum > 0) {
//             alert("Also, your number is positive.")
//         } else if (parsedNum < 0) {
//             alert("Also, your number is negative.")
//         } else {
//             alert("Your number is zero, neither positive nor negative.")
//         }
//     }
// }
// funWithNumbers();

function analyzeColor1(color) {
    if (color.toLowerCase() == "blue" || color.toUpperCase() == "BLUE") {
        return color + " is the color of the sky.";
    }
    if (color.toLowerCase() == "red" || color.toUpperCase() == "RED") {
        return color + " is the color of love.";
    }
    if (color.toLowerCase() == "green" || color.toUpperCase() == "GREEN") {
        return color + " is the color of envy.";
    }
    return "I'm sorry, I don't know anything about " + color;
}

console.log(analyzeColor1("blue"))
console.log(analyzeColor1("RED"))
console.log(analyzeColor1("GrEeN"))
console.log(analyzeColor1("rhinoceros"))