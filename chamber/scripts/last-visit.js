if (typeof(Storage) !== "undefined") {
    var lastVisit = localStorage.getItem("lastVisit");
    var currentDate = new Date().getTime();

    if (!lastVisit) {
        document.getElementById("visitor-welcome").innerHTML = "<p>Welcome! Let us know if you have any questions.</p>";
    } else {
        var difference = currentDate - parseInt(lastVisit);
        var daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            document.getElementById("visitor-welcome").innerHTML = "<p>Back so soon! Awesome!</p>";
        } else if (daysDifference === 1) {
            document.getElementById("visitor-welcome").innerHTML = "<p>You last visited 1 day ago.</p>";
        } else {
            document.getElementById("visitor-welcome").innerHTML = "<p>You last visited " + daysDifference + " days ago.</p>";
        }
    }
    localStorage.setItem("lastVisit", currentDate);
}