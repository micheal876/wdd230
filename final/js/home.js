
function toggleMenu() {
   
    document.getElementById("primaryNav").classList.toggle("hide");
}

var current = new Date();
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("currentDate").innerHTML = day[current.getDay()] +
    ", " + current.getDate() + " " + month[current.getMonth()] + ", " +
    current.getFullYear();

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

var x = document.lastModified;
document.getElementById("dateLastModified").innerHTML = x;
