window.addEventListener('load', (event)=>{
    const lu = document.querySelector('#lastUpdated');
    lu.textContent = document.lastModified;

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();
})