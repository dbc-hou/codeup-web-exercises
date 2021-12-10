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
var GoogleHours = 6, AmazonHours = 4, FacebookHours = 10;
var GoogleTotal = GooglePerHour * GoogleHours;
var AmazonTotal = AmazonPerHour * AmazonHours;
var FacebookTotal = FacebookPerHour * FacebookHours;
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
var offerExpired = false;
var premiumMember = true;
var regularCustomerCan = (productsPurchased > minProducts) && offerExpired;
var premiumCustomerCan = (premiumMember && offerExpired);
console.log("Can the regular customer? " + regularCustomerCan);
console.log("Can the premium customer? " + premiumCustomerCan);