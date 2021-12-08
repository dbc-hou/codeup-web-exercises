//The Renting Movies for the Kids Scenario
var dailyRental = 3
var LMDays = 3;
var BBDays = 5;
var HDays = 1;
console.log("Total cost: $" + (LMDays+BBDays+HDays) * dailyRental);

//The Contracting with Tech Demons Scenario
var GooglePerHour = 400;
var AmazonPerHour = 380;
var FacebookPerHour = 350;
var GoogleTotal = GooglePerHour * 6;
var AmazonTotal = AmazonPerHour * 4;
var FacebookTotal = FacebookPerHour * 10;
var TotalCompensation = GoogleTotal + AmazonTotal + FacebookTotal
console.log("Total compensation for the week: $" + TotalCompensation);

//The Can the Student Be Enrolled Scenario
// var ClassFull = False;
// var Conflict = False;
// var CanBeEnrolled = (ClassFull && Conflict);
// console.log(CanBeEnrolled);

//The Can the Customer Use This Offer Scenario
var productsPurchased = 3;
var minProducts = 2;
var offerExpired = False;
var premiumMember = True;
var regularCustomerCan = (productsPurchased >> minProducts) && offerExpired;
var premiumCustomerCan = (premiumMember && offerExpired);
console.log("Can the regular customer? " + regularCustomerCan);
console.log("Can the premium customer? " + premiumCustomerCan);