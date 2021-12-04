const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=41.0352&lon=-111.9386&units=imperial&appid=c237600c167adebeac526f5ef2f76e7a';

fetch(apiURL)
  .then((response) => response.json())
  .then((forecast) => {
    
    document.getElementById('current-cond').textContent = forecast.current.weather[0].description;
    document.getElementById('temperature').textContent = Math.round(forecast.current.temp) + "°F";
    document.getElementById('humidity').textContent = forecast.current.humidity + "%";
    document.getElementById('windSpeed').textContent = forecast.current.wind_speed +" mph";
    
    const temp = forecast.current.temp;
    const speed = forecast.current.wind_speed;
    const result = windChill(temp, speed)
    
    function windChill(t, s) {
      let compute = 35.74 + (0.6215 * t) - 35.75 * Math.pow(s, 0.16) + (0.4275 * t * Math.pow(s, 0.16));
      let total = Math.round(compute);
      return total; 
    }
    
    if ((temp > 50) || (speed < 3)) {
      document.getElementById("windChillOutput").innerHTML = "NA";
    } else {
      document.getElementById("windChillOutput").innerHTML = result + "&deg;F";
    }
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let day = 1; day <= 3; day++) {
      var date = new Date(forecast.daily[day].dt * 1000);
      document.getElementById(`day${day}`).textContent = days[date.getDay()];

      const imagesrc = 'https://openweathermap.org/img/wn/' + forecast.daily[day].weather[0].icon + '@2x.png';
      const desc = forecast.daily[day].weather[0].description;
      document.getElementById(`icon${day}`).setAttribute('src', imagesrc);
      document.getElementById(`icon${day}`).setAttribute('alt', desc);

      document.getElementById(`temp${day}`).textContent = Math.round(forecast.daily[day].temp.day) + '°F';
    } 

  });

 
