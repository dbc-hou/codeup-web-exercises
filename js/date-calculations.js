//This code is adapted from Foolish Developer
//https://dev.to/code_mystery/javascript-age-calculator-calculate-age-from-date-of-birth-o9b-->

const millisecondsInOneYear = 31557600000;

function getAgeInYears(d1, d2){
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / millisecondsInOneYear);
}

function getAgeDMY() {
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(d1 > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';
}

function forecastDate(thisDay) {
    var d = new Date(thisDay * 1000);
    d = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate()
    // d = d.toISOString().split("T")[0];
    console.log(d);
}

function calcWindDir(cDeg) {
        if (24 <= cDeg && cDeg <= 68) {
            return "NE";
        } else if (69 <= cDeg && cDeg <= 113) {
            return "E";
        } else if (114 <= cDeg && cDeg <= 157) {
            return "SE";
        } else if (158 <= cDeg && cDeg <= 202) {
            return "S";
        } else if (203 <= cDeg && cDeg <= 247) {
            return "SW";
        } else if (248 <= cDeg && cDeg <= 293) {
            return "W";
        } else if (294 <= cDeg && cDeg <= 338) {
            return "NW";
        } else {
            return  "N";
    }

}

console.log(calcWindDir(170));