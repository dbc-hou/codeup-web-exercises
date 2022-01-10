const d = new Date();

let e = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
let f = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
alert("The current date is " + e);
alert("The current time is " + f);