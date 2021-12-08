var sample = "Hello Codeup";
var a = sample.length;
var b = sample.toUpperCase();
var c = sample.toLowerCase();
var d = sample + " Students";
var e = d.replace(" Students"," Class");
var f = sample.indexOf("c");
var g = sample.indexOf("C");
var h = e.substring(g,e.length);
console.log("Length of sample: " + a);
console.log("All Caps sample: " + b);
console.log("All Lowercase sample: " + c);
console.log("Expanded sample: " + d);
console.log("Amended sample: " + e);
console.log("Position of 'c' in sample: " + f + " (i.e., not found)");
console.log("Position of 'C' in sample: " + g);
console.log("sample minus Hello: " + h);

