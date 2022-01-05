// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> only logs *if the iteration number is odd*

function loopX(numIterations) {
    let intIterations = Math.abs(parseInt(numIterations));
    for (let i = 1;i <= intIterations;i++) {
        if (i % 2 != 0) {
            console.log(i + ": This is an odd iteration.");
        }
    }
}

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> logs "This is an even iteration" on the evens
//      -> logs "This is an odd iteration" on the odds

function loopXY(numIterations) {
    let intIterations = Math.abs(parseInt(numIterations));
    for (let i = 1;i <= intIterations;i++) {
        if (i % 2 == 0) {
            console.log(i + ": This is an even iteration.");
        } else {
            console.log(i + ": This is an odd iteration.");
        }
    }
}

// TODO: MINI EXERCISE
//      Make a new version of your getPassword function using a for-loop!
//      -> The purpose of the for-loop is to only allow a maximum number of attempts
//          -> If the max attempt used unsuccessfully, alert the user of such and RETURN or BREAK
//      -> Once the user enters the correct password, use the 'break' keyword to end the loop
//      -> After the loop concludes, alert the use they have entered the correct password

function getPasswordWithForLoop(numGuesses) {
    let correctPass = "Dynamo22";
    for(i = 0;i<numGuesses;i++) {
        let guess = prompt("Please enter your password.");
        if (guess !== correctPass) {
            alert("Sorry, that's incorrect.");
        } else {
            alert("That'll do, pig. That'll do.");
            break;
        }
    }
    if (i === numGuesses) {
        alert("You're all out of guesses, amigo. ¡Adios!")
    }
}

loopX(-10.4);
loopXY(16);
getPasswordWithForLoop(3);