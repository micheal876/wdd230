function windChill(tempF, windSpeed) {
  return 35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(windSpeed, 0.16) +
    0.4275 * tempF * Math.pow(windSpeed, 0.16);
}

// Information for current weather
const apiURLcurrent =
"https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=9cef91c93e68d2c9661f7465a0530962";
fetch(apiURLcurrent)
.then((response) => response.json())
.then((jsObject) => {
  document.querySelector("#weathertype").textContent =
    jsObject.weather[0].description;
  document.querySelector("#tempF").textContent =
    jsObject.main.temp.toFixed(0);
  document.querySelector("#humidity").textContent = jsObject.main.humidity;
  document.querySelector("#windspeed").textContent = jsObject.wind.speed;

  // if parameters are met, wind chill will be called
  if (jsObject.main.temp <= 50 && jsObject.wind.speed >= 3) {
      chill = windChill(jsObject.main.temp, jsObject.wind.speed);
      document.querySelector("#windchill").textContent = chill;
  }
  else {
      document.querySelector("#windchill").textContent = 'N/A';
  };
});

// Information for forecast
const apiURL =
"https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=9cef91c93e68d2c9661f7465a0530962";

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  let day = 1;
  const dayofWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

  const fiveDayForecast = jsObject.list.filter((forecast) =>
    forecast.dt_txt.includes("18:00:00")
  );

  fiveDayForecast.forEach((x) => {
    let d = new Date(x.dt_txt);
    document.querySelector(`#dayofweek${day}`).textContent =
      dayofWeek[d.getDay()];
    document.querySelector(`#dailytemp${day}`).textContent =
      x.main.temp.toFixed(0);

    let iconimg = document.createElement("img");

    const imagesrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
    const desc = x.weather[0].description;

    iconimg.setAttribute("src", imagesrc);
    iconimg.setAttribute("alt", desc);

    document.querySelector(`#icon${day}`).appendChild(iconimg);
    //document.querySelector(`#icon${day}`).setAttribute("src", imagesrc);
    //document.querySelector(`#icon${day}`).setAttribute("alt", desc);

    day++;
  });

  /*
   */
});
