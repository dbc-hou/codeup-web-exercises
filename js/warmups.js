// Requirements:
//     Their credit score must be over 680 AND have at least $4000 on-hand
// OR, they must have at least $10000 on-hand
// Scenario:
//     I have $12000 on-hand but have a 590 credit score. I get a loan.
//     I have $5000 on-hand with a 720 credit score. I get a loan
//     I have $3000 on-hand with a 720 credit score. I do not get a loan.
//     I have $9000 on-hand with a 590 credit score. I do not get a loan.

// function getLoan(credit,cash) {
//     var creditScore = 720;
//     var cashOnHand = 5000;
//     if (credit >= 680 && cash >= 4000) {
//         return "Grats, dude, you get a loan!";
//     }
//     else if (cash >= 10000) {
//         return "Wow, we don't care about your credit score. What color would you like?";
//     }
//     else {
//         return "Come back when your situation improves. Good day.";
//     }
// }
// console.log("Credit 590, Cash on hand $12000: " + getLoan(590,12000));
// console.log("Credit 720, Cash on hand $5000: " + getLoan(720,5000));
// console.log("Credit 720, Cash on hand $3000: " + getLoan(720,3000));
// console.log("Credit 590, Cash on hand $9000: " + getLoan(590,9000));

// function isFive(numInput) {
//     if (parseInt(numInput) === 5) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// console.log(isFive("5.00"));

// function isMultipleOfThree(dividend) {
//     if (isNaN(dividend)) {
//         return false
//     } else if (dividend % 3 == 0 || dividend % -3 == 0) {
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(isMultipleOfThree(NaN))

// TODO: MINI EXERCISE
// TODO: print all even numbers between 0 and 25;
// let counter = 0; // starting point
function loopEvenNumbers(intLimit) {
    let counter = 0;
    console.log("******************");
    if (counter > intLimit) {
        console.log("The counter is already too large!")
    } else {
        while (counter <= intLimit) {
            console.log("The counter value is now: " + counter);
            counter += 2;
        }
        console.log("******************");
        console.log("The counter has exceeded the limit. All done!");
    }
}

loopEvenNumbers(25);

function isPrime(num) {
    var primeness
    if (num===2 || num===3) {
        primeness = true
    } else if (num > 3) {
        for (var i=2;i<=Math.sqrt(num);i++) {
            if (num % i === 0) {
                primeness = false;
                break;
            } else {
                primeness = true;
            }
        }
    } else {
        primeness = false;
    }
    // if (primeness) {
    //     console.log(num + " is prime.");
    // } else {
    //     console.log(num + " is not prime.")
    // }
    return primeness
}
function First50Primes() {
    var testNum = 5
    for (i=0;i<=50;i++) {
        if (isPrime(testNum)) {
            console.log(i);
        }
        testNum++;
    }
}

First50Primes();