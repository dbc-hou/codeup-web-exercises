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
            console.log(amountPurchased + " cones purchased; " + allCones + " " + coneOrCones + " remaining.");
        }
    } while (allCones > 0);
    console.log("Yay! No more cones!");
}
multiplyByTwo();
iceCreamTruck(Math.floor(Math.random() * 50) + 50);