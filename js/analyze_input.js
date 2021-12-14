function funWithNumbers(numInput) {
    let parsedNum = parseFloat(numInput);
    var oddEven, absVal
    if ((parsedNum % 2 === 1) || (parsedNum % 2 === -1)) {
        oddEven = "odd";
    } else if (parsedNum % 2 === 0 || parsedNum % 2 === 0) {
        oddEven = "even";
    } else {
        oddEven = "decimal";
    }

    if (parsedNum > 0) {
        absVal = "positive";
    } else if (parsedNum < 0) {
        absVal = "negative";
    } else {
        absVal = "zero";
    }
    return "This number is " + oddEven + " and " + absVal;
}

function analyzeInput(inputValue) {
    let numChars = inputValue.length;
    if (!isNaN(inputValue)) {
        alert(funWithNumbers(inputValue));
    } else if (numChars <= 1) {
        switch (inputValue) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "o":
            case "O":
            case "u":
            case "U":
                alert("Hey, " + inputValue + " is a vowel!");
                break;
            case "y":
            case "Y":
                alert("Maybe not on Wheel of Fortune, but " + inputValue + " is sometimes a vowel.");
                break;
            default:
                alert("I believe " + inputValue + " is a consonant. Let me consult Wikipedia.");
        }
    } else {
        alert("That string contains " + numChars + " characters.");
    }
}
let s = analyzeInput(prompt("Enter a value, please."));
