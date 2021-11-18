const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7f0d84b192d7b06436b826401d169039";

fetch(forecastURL)
  .then((response) => response.json())
  .then((forecastjsObject) => {
    console.log(forecastjsObject);


    const forecast = forecastjsObject["list"];
    const table = document.querySelector("#fiveday");

    const forecastfilter = forecast.filter((x) => x.dt_txt.includes("18:00:00"));
    console.log(forecastfilter);

    forecastfilter.forEach((filtered) => {
      let tabledata = document.createElement('td');
      let tableimg = document.createElement('img');
      




      let tableimgURL = "https://openweathermap.org/img/w/" + filtered.weather[0].icon + ".png";
      tableimg.setAttribute("src", tableimgURL);
      tableimg.setAttribute("alt", filtered.weather[0].description);
      tabledata.innerHTML = filtered.main.temp.toFixed(0);


      console.log(tableimgURL);
      table.appendChild(tabledata);
      table.appendChild(tableimg);


    });

  });