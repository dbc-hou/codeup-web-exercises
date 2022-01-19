/* Combinations! How many combinations of y items can you form from a population of x items?
e.g., how many 5-card hands are possible from a 52-card deck?
 */

function combinations(x,y) {
    let a = factorial(x);
    let b = factorial(y);
    let c = factorial(x-y);
    return a / (b * c);
}

function factorial(x) {
    if (isNaN(x)) {
        return 0;
    } else if (x < 0 || x > 170) {
        return 0;
    }
    x = parseInt(Math.abs(x));
    let a = 1
    for (i=2;i<=x;i++) {
        a = a * i;
    }
    return a;
}

function arrayToString(anyArray) {
    let j = "";
    let k = "";
    for (let i=0;i<anyArray.length;i++) {
        k = anyArray[i].toString();
        j = j + k + ",";
    }
    j = j.substring(0,j.length - 1);
    return j;
}

