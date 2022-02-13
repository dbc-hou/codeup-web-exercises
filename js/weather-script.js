const MY_LNG_LAT_ARRAY = [-95.36936,29.76019];
const MY_LNG_LAT_STRING = '-95.36936,29.76019';
const SECONDS_IN_DAY = 3600 * 24;
const SECONDS_IN_REGULAR_YEAR = SECONDS_IN_DAY * 365;
const SECONDS_IN_SOLAR_YEAR = SECONDS_IN_DAY * 365.25;
const SECONDS_IN_LEAP_YEAR = SECONDS_IN_DAY * 366;

function doForecastingStuffForCoords(coords) {
    var lng = coords[0];
    var lat = coords[1];
    var html = ""
    var high, low, titleDate;
    var descrip, humidity, pressure;
    var windSpeed, windDir;
    var windSpeedAndDir;

    $('#forecast-div').html('');
    $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&appid=${DBC_OW_API_KEY}&units=metric`)
        .done(function (data) {
            //console.log(data);
            for (let i=0;i<=4;i++) {
                high = parseInt(data.daily[i].temp.max);
                low = parseInt(data.daily[i].temp.min);
                titleDate = forecastDate(data.daily[i].dt);
                descrip = data.daily[i].weather[0].description;
                humidity = data.daily[i].humidity;
                windSpeed = parseInt(data.daily[i].wind_speed);
                windDir = calcWindDir(parseInt(data.daily[i].wind_deg));
                windSpeedAndDir = `${windDir} ${windSpeed.toString()} kph`;
                pressure = data.daily[i].pressure;
                html += repopulateWeather(i,high,low,titleDate);
                html += weatherDetails(descrip,humidity,windSpeedAndDir,pressure);
            }
            console.log(html);
            $('#forecast-div').html(html);
        });
}

function repopulateWeather(i,hiTemp,loTemp,weatherDate) {
    var forecastHTML;

    forecastHTML = `<div class="card col-md-2" id="forecast-${i}">`;
    forecastHTML += `<div class="card-title bg-info pl-1 text-white text-center border border-3 border-dark" id="forecast-${i}-title"><h6>${weatherDate}</h6></div>`;
    forecastHTML += `<div class="card-body pl-1 py-0 text-dark" id="forecast-${i}-body">`;
    forecastHTML += `<p>Hi: ${hiTemp}ºC, Lo: ${loTemp}ºC</p>`;

    return forecastHTML;
}

function forecastDate(thisDay) {
    var d = new Date(thisDay * 1000);
    var year = d.getFullYear().toString();
    var month = (d.getMonth()+1).toString();
    var day = d.getDate().toString();
    var formattedDate;
    if (d.getMonth() < 9) {
        month = `0${month}`;
    }
    if (d.getDate() < 10) {
        day = `0${day}`;
    }
    formattedDate = `${year}-${month}-${day}`
    return formattedDate;
}

function weatherDetails(description,humidity,wind,pressure) {
    var html = `<p>Description: ${description}</p><hr/>`;
    html += `<p>Humidity: ${humidity}%</p><hr/>`;
    html += `<p>Wind: ${wind}</p><hr/>`;
    html += `<p>Pressure: ${pressure} mb</p>`;
    html += `</div></div>`;
    return html;
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
        return "N";
    }
}
// var d = new Date();
// var e = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
// console.log(repopulateWeather(0,15,6,e.toString()));
// console.log(weatherDetails("chance of oobleck",50,calcWindDir(170).toString() + " 12",1009))