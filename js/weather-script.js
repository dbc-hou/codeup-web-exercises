const MY_LNG_LAT_ARRAY = [-95.36936,29.76019];
const MY_LNG_LAT_STRING = '-95.36936,29.76019';
const SECONDS_IN_DAY = 3600 * 24;
const SECONDS_IN_REGULAR_YEAR = SECONDS_IN_DAY * 365;
const SECONDS_IN_SOLAR_YEAR = SECONDS_IN_DAY * 365.25;
const SECONDS_IN_LEAP_YEAR = SECONDS_IN_DAY * 366;


// This is the big function that calls other functions in a loop to display the five-day
// weather outlook below the map: high temp, low temp, brief description, humidity, wind speed and direction,
// and barometric pressure.
function doForecastingStuffForCoords(coords,unitType) {
    var lng = coords[0];
    var lat = coords[1];
    var html = ""
    var high, low, titleDate;
    var descrip, humidity, pressure;
    var windSpeed, windDir;
    var windSpeedAndDir;

    $('#forecast-div').html('');
    $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&appid=${DBC_OW_API_KEY}&units=${unitType}`)
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
                if (unitType === 'metric') {
                    windSpeedAndDir = `${windDir} ${windSpeed.toString()} kph`;
                    pressure = data.daily[i].pressure;
                } else {
                    windSpeedAndDir = `${windDir} ${windSpeed.toString()} mph`;
                    pressure = ((data.daily[i].pressure) / 33.86).toFixed(2);
                }

                html += repopulateWeather(i,high,low,titleDate,unitType);
                html += weatherDetails(descrip,humidity,windSpeedAndDir,pressure,unitType);
            }
            //console.log(html);
            $('#forecast-div').html(html);
        });
}

// This function dynamically creates the cards that display the forecast dates and expected temperatures.
// It displays metric temperatures by default, English imperial temperatures if that is requested
// via the radio buttons.
function repopulateWeather(i,hiTemp,loTemp,weatherDate,units) {
    var forecastHTML;

    forecastHTML = `<div class="card col-md-2" id="forecast-${i}">`;
    forecastHTML += `<div class="card-title bg-info pl-1 text-white text-center border border-3 border-dark" id="forecast-${i}-title"><h6>${weatherDate}</h6></div>`;
    forecastHTML += `<div class="card-body pl-1 py-0 text-dark" id="forecast-${i}-body">`;
    if (units === 'metric') {
        forecastHTML += `<p>Hi: ${hiTemp}ºC, Lo: ${loTemp}ºC</p>`;
    } else {
        forecastHTML += `<p>Hi: ${hiTemp}ºF, Lo: ${loTemp}ºF</p>`;
    }
    return forecastHTML;
}

// Display the date for each day of the forecast in ddd-mm-dd format.
function forecastDate(thisDay) {
    var d = new Date(thisDay * 1000);
    //var year = d.getFullYear().toString();
    var month = (d.getMonth()+1).toString();
    var day = d.getDate().toString();
    var weekday = convertWeekday(d.getDay());
    var formattedDate;
    if (d.getMonth() < 9) {
        month = `0${month}`;
    }
    if (d.getDate() < 10) {
        day = `0${day}`;
    }
    formattedDate = `${weekday} ${month}-${day}`
    return formattedDate;
}

function convertWeekday(numInput) {
    switch (numInput) {
        case 0:
            return "Sun.";
            break;
        case 1:
            return "Mon.";
            break;
        case 2:
            return "Tue.";
            break;
        case 3:
            return "Wed.";
            break;
        case 4:
            return "Thu.";
            break;
        case 5:
            return "Fri.";
            break;
        case 6:
            return "Sat.";
    }
}

// Fill in the remaining weather information in the body of each forecast card:
// description, humidity, wind, and pressure.
function weatherDetails(description,humidity,wind,pressure,units) {
    var html = `<p>Description: ${description}</p><hr/>`;
    html += `<p>Humidity: ${humidity}%</p><hr/>`;
    html += `<p>Wind: ${wind}</p><hr/>`;
    if (units==='metric') {
        html += `<p>Pressure: ${pressure} mb</p>`;
    } else {
        html += `<p>Pressure: ${pressure} in Hg</p>`;
    }
    html += `</div></div>`;
    return html;
}

// The weather API returns the wind direction in arc degrees, 0 to 360.
// This converts that measurement to approximate compass directions (within 22 or 23 degrees).
// e.g., 90 degrees is due east, but the range for east winds is 69 to 113 from due north.
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
