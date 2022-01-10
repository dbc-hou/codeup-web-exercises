(function() {
    "use strict";

    // create a circle object
    var circle = {
        //get the radius from the user on the web page:
        radius : parseFloat(prompt("Enter a positive number for the radius of a circle:")),

        getRadius: function () {

            if (this.radius < 0) {
                this.radius = Math.abs(this.radius);
            }
            return this.radius;
        },
        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            let area = Math.PI * Math.pow(this.getRadius(),2);
            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let roundedArea = this.getArea();
            if (doRounding) {
                roundedArea = Math.round(this.getArea());
            }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.getRadius() + ", is: " + roundedArea);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    // console.log("Raw circle information");
    // circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number");
    // circle.logInfo(true);
})();
