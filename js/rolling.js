function roll(strDice) {
    var numRolls, numSides, positionOfD;
    var rolls = [];
    var tempRoll;
    var sum = 0;
    positionOfD = strDice.indexOf("d");
    numRolls = parseInt(strDice.substring(0,positionOfD));
    numSides = parseInt(strDice.substring(positionOfD+1));
   // console.log(numRolls + "," + positionOfD + "," + numSides);
    for (var i = 1;i<=numRolls;i++) {
        tempRoll = Math.floor(Math.random()*numSides+1)
        rolls.push(tempRoll);
        console.log("I rolled a " + tempRoll + ".");
        sum += tempRoll;
    }
    console.log("The total of those rolls is " + sum + ".");
}

roll("2d20");