let d = new Date();
let year = d.getFullYear();
let fulldate = `${year}`;
document.querySelector("#year").textContent = fulldate;

let lastmod = new Date(document.lastModified)
document.querySelector("#updated").textContent = lastmod;