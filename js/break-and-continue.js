function oddLoop(){
    let userInput = prompt("Enter an odd integer between 1 and 49:");
    console.log("Number to skip is: " + userInput);
    for(i=1;i<50;i+=2) {
        if (i == userInput) {
            console.log("Yikes! Skipping number: " + userInput);
            continue;
        } else {
            console.log("Here is an odd number: " + i);
            continue;
        }
    }
}

oddLoop();