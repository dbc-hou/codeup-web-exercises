function multiplyByTwo() {
    let x = 2;
    console.log(x);
    while (x < 65536) {
        x *= 2;
        console.log(x);
    }
}

function iceCreamTruck(allCones) {
    var coneOrCones
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

loopEvenNumbers(Math.abs(-25));
multiplyByTwo();
iceCreamTruck(Math.floor(Math.random() * 50) + 50);