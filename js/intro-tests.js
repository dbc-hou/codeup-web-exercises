function count(stringyInput) {
    if (stringyInput === null || stringyInput === undefined) {
        return false;
    }
    let whatType = typeof stringyInput
    if (whatType === "string") {
        console.log("It's a string!");
        console.log("The argument passed to this function is of type " + whatType + ", and it has " +
            stringyInput.length + " characters.");
        return stringyInput.length;
    } else if (whatType === "number") {
        console.log("The type of input is " + whatType + ".");
        return false;
    } else if (whatType === "boolean") {
        console.log("The type of input is " + whatType + ".");
        return false;
    }
}
function countTests() {
    console.log("This string passed to the function has this many characters: " + count("The quick brown fox jumps over the lazy dog."));
    console.log("Do numerics work? " + count(23));
    console.log("Let's try true: " + count(true));
    console.log("Let's try false: " + count(false));
    console.log("Let's try a null value: " + count(null));
    console.log("What if we pass nothing to the parameter? " + count());
}

countTests();