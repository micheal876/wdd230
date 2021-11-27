/* ----- Get how many days since last visit ----- */


window.onload = function() {

    // function to calculate days between visits
    function daysBetween(start, end) {

        const oneDay = 1000 * 60 * 60 * 24;

        const diffInTime = start - end;

        const diffInDays = Math.round(diffInTime / oneDay);

        return diffInDays
    }

    // Check browser support
    if (typeof(Storage) != "undefined") {

        let newVisitDate = new Date();

        newVisit = newVisitDate.getTime();

        if (typeof localStorage.getItem("recentVisit") == typeof "string") {
            // outputs number of days since last visit
            document.querySelector(".lastvisit").innerText = daysBetween(newVisit, localStorage.getItem("recentVisit"));

            // reassign last visit
            let lastVisit = newVisit;

            // Store recent visit
            localStorage.setItem("recentVisit", lastVisit);

        } else {
            // Assign last visit to current visit
            let lastVisit = newVisit;

            // Store recent visit in local storage
            localStorage.setItem("recentVisit", lastVisit);

            document.querySelector(".lastvisit").innerText = "First visit! Welcome!";

    }} else {
        document.querySelector(".lastvisit").innerText = "Sorry, your browser does not support Web Storage...";
    
}}