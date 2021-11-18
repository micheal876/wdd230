const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7f0d84b192d7b06436b826401d169039";

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('high-temp').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;


    
    var temp = parseFloat(document.getElementById("current-temp").innerHTML);
    var speed = parseFloat(document.getElementById("speed").innerHTML);

    var f = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed,0.16) + 0.4275 * temp * Math.pow(speed,0.16);
 console.log(f)
      if (temp <= 50 && speed > 3) {
        document.getElementById("windchill").innerHTML = f.toFixed(2);
      }  
else {
    document.getElementById("windchill").innerHTML = "N/A";
}
    
    
    

});