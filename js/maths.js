// 1. Write a function called add(num1, num2) which returns the sum of a and b
// 2. Write a function named square(numToSqr) which takes in a number (numToSqr) and returns the number multiplied by itself
// 3. Write a function called sumOfSquares(a, b).
//     You should find the square of a, then the square of b.
//     Invoke add(num1, num2) and pass the new squared values in as arguments.

function add(num1, num2) {
    return num1 + num2;
}

function square(numToSqr) {
    return numToSqr * numToSqr;
}

function sumOfSquares(a, b) {
    let c = square(a);
    let d  = square(b);
    let e = add(c,d);
    return e;
}

function getFizzBuzz(startingNum) {
    if (startingNum % 3 === 0) {
        console.log("fizz");
    } else if (startingNum % 5 === 0) {
        console.log("buzz");
    }
    if (startingNum % 3 === 0 && startingNum % 5 === 0) {
        return "FIZZ BUZZ"
    }
}
if (typeof getFizzBuzz(77) == "undefined") {
    console.log("Sorry, no return value.");
} else {
    console.log(getFizzBuzz(77));
}