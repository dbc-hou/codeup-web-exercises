function getPassword(userInput) {
    let pw = "BettyWhite";
    let strikes = 1
    userInput = prompt("Enter the password, homes.");
    while (userInput !== pw) {
        console.log(strikes);
        alert("Sorry, that's incorrect. Strike " + strikes + ".");
        userInput = prompt("Enter the *correct* password, homes.");
        strikes++;
        if (strikes === 3) {
            alert("Strike three, you're out!");
            break;
        } else if (userInput === pw && strikes < 3) {
            alert("OK, you're in.");
            break;
        }
    }
}

function getBetterPassword2() {
    var answer = "howdy";
    var attempts = 0;
    var guess = "";
    do {
        guess = prompt("Enter your password: ");
        attempts++;
    } while(guess !== answer && count < 3);
    if(guess === answer) {
        alert("ok");
    } else {
        alert("not ok");
    }
}

function getMeaningOfLife(meaningfulNum) {
    let counter = parseInt(prompt("What is the meaning of life?"));
    if (isNaN(counter)) {
        counter = 0;
    }
    while (counter != meaningfulNum) {
        alert("Sorry, that ain't it.");
        console.log(counter);
        counter = parseInt(prompt("What is the meaning of life?"));
    }
    alert("The meaning of Life, the Universe, and Everything is " + counter + ".");
    if (counter === 42) {
        alert("It's 11:59 pm. Do you know where your towel is?")
    }
}

//getMeaningOfLife(42);

function multiplyByTwo() {
    let x = 2;
    console.log(x);
    while (x < 65536) {
        x *= 2;
        console.log(x);
    }
}

function iceCreamTruck(allCones) {
    var coneOrCones = "cones";
    console.log("I have " + allCones + " " + coneOrCones + " available for sale.");
    do {
        let amountPurchased = Math.floor(Math.random() * 5) + 1;
        if (allCones == 1) {
            coneOrCones = "cone";
        } else {
            coneOrCones = "cones";
        }

        if (amountPurchased > allCones) {
            console.log("Sorry, can't sell you " + amountPurchased + "; only " + allCones + " " + coneOrCones + " remaining.");
            amountPurchased = allCones;
        } else {
            allCones -= amountPurchased;
            console.log(amountPurchased + " " + coneOrCones + " purchased; " + allCones + " " + coneOrCones + " remaining.");
        }
    } while (allCones > 0);
    console.log("Yay! No more cones!");
}

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

// loopEvenNumbers(Math.abs(-25));
// multiplyByTwo();
iceCreamTruck(Math.floor(Math.random() * 50) + 50);