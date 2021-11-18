const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    const trifecta = towns.filter(town => town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven');
    // for (let i = 0; i < prophets.length; i++ ) { 
    trifecta.forEach(town => {
      let card = document.createElement('section');
      let h3 = document.createElement('h3');
      let motto = document.createElement('h4');
      let founded = document.createElement('p');
      let population = document.createElement('p');
      let rainfall = document.createElement('p');
      let data = document.createElement('div');
      let image = document.createElement('img');

      h3.textContent = `${town.name}`;
      motto.textContent = `${town.motto}`;
      founded.textContent = 'Founded: ' + town.yearFounded;
      population.textContent = 'Current Population: ' + town.currentPopulation;
      rainfall.textContent = 'Average Rainfall: ' + town.averageRainfall;
      
      image.setAttribute('src', `images/${town.photo}`);
      image.setAttribute('alt', `${town.name}`);
      data.setAttribute('class', 'data');
      
      
      card.append(h3);
      card.append(motto);
      card.append(data);
      data.append(founded);
      data.append(population);
      data.append(rainfall);
      card.append(image);

      document.querySelector('div.towns').append(card);
    }) 
  });   