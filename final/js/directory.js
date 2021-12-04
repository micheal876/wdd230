const requestURL = 'js/businesses.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (directory) {
    // console.log(directory);
    const businesses = directory['businesses'];
  
    for (let i = 0; i < businesses.length; i++ ) {

      const name = businesses[i].name;
      document.getElementById(`business${i+1}`).textContent = name;

      const imagesrc = businesses[i].logo;
      const desc = businesses[i].name + ' logo';
      document.getElementById(`logo${i+1}`).setAttribute('src', imagesrc);
      document.getElementById(`logo${i+1}`).setAttribute('alt', desc);

      document.getElementById(`contact${i+1}`).innerHTML = 'Address: ' + businesses[i].address + '<br>' + 'Phone: ' + businesses[i].phone;
      document.getElementById(`website${i+1}`).innerHTML = '<a href="' + `${businesses[i].website}` + '" target="_blank" rel="noopener">' + businesses[i].website; + '</a>';
    } 
        // let card = document.createElement('section');
        // let img = document.createElement('img');
        // let h2 = document.createElement('h2');
        // let p = document.createElement('p');
        // let p2 = document.createElement('p');

        // card.setAttribute('class', 'grid');

        // img.setAttribute('src', businesses[i].logo);
        // img.setAttribute('alt', businesses[i].name + ' logo');
        // card.appendChild(img);

        // h2.textContent = businesses[i].name;
        // card.appendChild(h2);

        // p.innerHTML = 'Address: ' + businesses[i].address + '<br>' + 'Phone: ' + businesses[i].phone;
        // card.appendChild(p);

        // p2.innerHTML = '<a href="' + `${businesses[i].website}` + '" target="_blank">' + businesses[i].website; + '</a>';
        // card.appendChild(p2);

        // document.querySelector('div.directory').appendChild(card);
 
    //}
  });

  // buttons
  var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

