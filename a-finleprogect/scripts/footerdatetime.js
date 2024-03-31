document.getElementById("currentYear").innerText = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("lastmodified").innerText = "Last modified: " + document.lastModified;
});