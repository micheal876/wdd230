const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject["prophets"];

    prophets.forEach(prophet => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let birthdate = document.createElement("p");
        let birthplace = document.createElement("p");
        let image = document.createElement("img");

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
        image.setAttribute("src", prophet.imageurl);
        image.setAttribute(
            "alt",
            `${prophet.name} ${prophet.lastname} - ${prophet.order}`
        );

        card.appendChild(h2);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(image);
    
        document.querySelector("div.cards").appendChild(card);
      })
    });