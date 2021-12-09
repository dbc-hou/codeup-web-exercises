var a = 1;
var b = a++;
var c = ++a;
console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);

var d = "hello";
var e = false;
console.log(d++);
console.log(++e);

var perplexed;
console.log(perplexed + 2);

var price = 2.7;
console.log(price.toFixed(2));
//when price = a string "2.7", the toFixed function returns a big ol' error.

console.log(isNaN(0));
console.log(isNaN(1));
console.log(isNaN(""));
console.log(isNaN("string"));
console.log(isNaN("0"));
console.log(isNaN("1"));
console.log(isNaN("3.145"));
console.log(isNaN(Number.MAX_VALUE));
console.log(isNaN(Infinity));
console.log(isNaN("true"));
console.log(isNaN(true));
console.log(isNaN("false"));
console.log(isNaN(false));
console.log(NaN == NaN);
