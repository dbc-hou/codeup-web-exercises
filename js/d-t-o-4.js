var username = "codeup";
var password = "notastrongpassword";
var pwLongEnough = password.length >= 5;
var pwNoUserName = password.includes(username);
var idShortEnough = username.length <= 20;
var noWhiteSpace = (username.startsWith(" ") || username.endsWith(" ") || password.startsWith(" ") || password.endsWith(" "));
var IDPWComboWorks = (pwLongEnough && !pwNoUserName && idShortEnough && !noWhiteSpace);
console.log("Can the user log in? " + IDPWComboWorks);