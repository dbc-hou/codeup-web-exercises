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

var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
// removeAll(bugs, "roach") should return the original array b/c “roach” has no occurrances.

function removeAll(anyArray, anyItem) {
    let newArray = new Array
    for (let i = 0; i < anyArray.length; i++) {
        if (anyArray[i] !== anyItem) {
            newArray.push(anyArray[i]);
        }
    }

    return newArray;
}

var myCats = [
    {
        catName: "Fifi",
        age: 5
    },
    {
        catName: "Fluffy",
        age: 3
    },
    {
        catName: "Abby",
        age: 7
    }
];

function getNthCat(cats,n) {

// print out the cat at index 1
    return cats[n];

}

function reverseString(stringInput) {
    let stringOutput = "";
    for (let i = stringInput.length - 1; i >= 0; i--) {
        stringOutput += stringInput[i];
    }
    return stringOutput;
}
var aCat = getNthCat(myCats,1);

function findAverage(integerArray) {
    let result = 0;
    let j = integerArray.length
    for (let i = 0;i <= j - 1;i++){
        result += integerArray[i];
    };
    return result / j;
}

function sumOfSquares(a,b) {
    let leg1Squared = a**2;
    //alternative: let leg1Squared = Math.pow(a,2)
    let leg2Squared = b**2;
    //alternative: let leg1Squared = Math.pow(b,2)
    let hypotenuseSquared = leg1Squared + leg2Squared;
    return hypotenuseSquared;
}

function whichStringIsLonger(string1,string2) {
    let len1 = string1.length;
    let len2 = string2.length;
    if (typeof(string1) !== "string" || typeof(string2) !== "string") {
        return "false";
    }
//Note: elses are not needed when the results are returns. I just like this structure.
    if (len1 > len2) {
        return "first";
    } else if (len1 < len2) {
        return "second";
    } else if (len1 = len2) {
        return "neither";
    }
}

// Write a function called convertLowHighToObject that takes in a string that represents the low and high temperature
// in this format '35, 42' (assuming low will always be the left value and high the right)
// and returns an object with the properties 'low' and 'high' with the values of those respective properties
// set to the corresponding values in the input string.
//     NOTE: the values in the object should be of the number type
// Example input: '35, 42'
// Example return: {low: 35, high: 42}

function convertLowHighToObject(tempStringInput) {
    let tempArray = [];
    let commaIndex = tempStringInput.indexOf(",");
    let lowTemp = tempStringInput.substring(0,commaIndex);
    let lowTempConverted = parseInt(lowTemp);
    let spaceIndex = commaIndex+1;
    let highTemp = tempStringInput.substring(spaceIndex,tempStringInput.length);
    let highTempConverted = parseInt(highTemp);

    tempArray = {low: lowTempConverted, high: highTempConverted};
    return tempArray;

    //Note: This can be done much more simply with .split(", ")
}

console.log(convertLowHighToObject("17,43"));

// console.log(whichStringIsLonger(37,"bobby"));

// Write a function called countDuplicates that takes in a string
// and returns an object that contains the count for each letter within the given string.
//     ex: countDuplicates("adsjfdsfsfjsdjfhacabcsbajda")
// returns { a: 5, d: 4, s: 5, j: 4, f: 4, h: 1, c: 2, b: 2 }

function countDuplicates(strInput) {
    let countObject = {};
    let letterCount = 1;
    let strLower = strInput.toLowerCase();
    for (let i = 0; i < strInput.length; i++) {
        if (!(strInput[i] in countObject)) {
            countObject[strInput[i]] = letterCount;
        } else {
            countObject[strInput[i]] = countObject[strInput[i]] + 1;
        }
    }
    return countObject;
}
// console.log(countDuplicates("supercalifragilisticexpialidocious"))

// Write a function called makePerson. It takes 2 arguments: personName and age.
//     personName must be at least 1 character long. age must be between 1 and 150.
// If either of the parameters is invalid, output an appropriate message to the console and return FALSE.
//     If both parameters are valid, return an object containing personName and age.
//     E.g.,
//     console.log(makePerson("Bob", 30)); // outputs {personName:"Bob", age:30}
// console.log(makePerson("", 30));
// outputs:
// Person name cannot be blank
// false

function makePerson(personName, age) {
    let person = {
        name: personName,
        age: age
    };
    if (typeof age !== "number") {
        console.log("The person's age must be a number.");
        return false;
    }
    if (typeof personName !== "string") {
        console.log("The person's name must be a text string.");
        return false;
    }
    if (personName.length === 0) {
        console.log("The name cannot be blank.");
        return false;
    }
    if (age < 0 && age > 150) {
        console.log("Age must be between 0 and 150.")
    }
    return person;
}

console.log(makePerson("David", 59));