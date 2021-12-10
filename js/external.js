// let confirmed = confirm("Are you being indecisive???")
// if (confirmed) {
//     alert("Yes, you are.")
// } else {
//     alert("No, I guess not.")
// }

// let userInput = prompt("What...is your quest?")
// console.log(userInput)

console.log("Hello from external JavaScript!")
alert("Welcome to my website!")
let favoriteColor = prompt("What...is your favorite color?")
alert("Cool, " + favoriteColor + " is my favorite too!")

//The Renting Movies for the Kids Scenario
var dailyRental = 3
var LMDays = 3;
var BBDays = 5;
var HDays = 1;
alert("Video rental: Total cost = $" + (LMDays+BBDays+HDays) * dailyRental);

//The Contracting with Tech Demons Scenario
var GooglePerHour = 400;
var AmazonPerHour = 380;
var FacebookPerHour = 350;
var GoogleHours = parseInt(prompt("How many hours at Google?"))
var AmazonHours = parseInt(prompt("How many hours at Amazon?"))
var FacebookHours = parseInt(prompt("How many hours at Facebook?"));
var GoogleTotal = GooglePerHour * GoogleHours;
var AmazonTotal = AmazonPerHour * AmazonHours;
var FacebookTotal = FacebookPerHour * FacebookHours;
var TotalCompensation = GoogleTotal + AmazonTotal + FacebookTotal
alert("Contract work: Total compensation for the week = $" + TotalCompensation);

//The Can the Student Be Enrolled Scenario
// var ClassFull = False;
// var Conflict = False;
// var CanBeEnrolled = (ClassFull && Conflict);
// console.log(CanBeEnr
let maxEnrollmentReached = false;
let scheduleConflict = true;
let canEnroll = (maxEnrollmentReached || scheduleConflict);
alert("Can the student enroll in the course? " + !canEnroll);

//The Can the Customer Use This Offer Scenario
var productsPurchased = parseInt(prompt("How many products purchased?"));
var minProducts = 2;
var offerExpired = false;
var premiumMember = true;
var regularCustomerCan = (productsPurchased > minProducts) && offerExpired;
var premiumCustomerCan = (premiumMember && offerExpired);
alert("Regular vs. Premium Customers: Can the regular customer...? " + regularCustomerCan);
alert("Regular vs. Premium Customers: Can the premium customer...? " + premiumCustomerCan);