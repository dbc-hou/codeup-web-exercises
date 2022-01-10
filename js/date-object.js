const d = new Date();
const myBirthday = new Date(1962,10,13);

let e = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
let f = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
let myAge = e - myBirthday;
alert("The current date is " + e);
alert("The current time is " + f);
alert("My current age is " + myAge);
