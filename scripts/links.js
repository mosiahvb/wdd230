// Define the base URL of your GitHub Pages repository
const baseURL = "https://mosiahvb.github.io/wdd230/";

// Define the URL of your links.json data file
const linksURL = "https://mosiahvb.github.io/wdd230/data/links.json";

// Asynchronous function to get the links data from the links.json file
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

// Function to build out the activity links based on the data response
function displayLinks(weeks) {
    // Access the unordered list element where you want to display the links
    const ul = document.querySelector('section.card ul');

    // Loop through each week of the term
    weeks.forEach((week, index) => {
        // Create an empty string to store the HTML for this week's links
        let weekLinksHTML = "";

        // Add the week number to the string
        weekLinksHTML += `<li><a href="">${week.lesson}:</a>`;

        // Loop through the links for this week and add them to the string
        week.links.forEach((link, linkIndex) => {
            // Add a pipe character if this is not the first link
            if (linkIndex > 0) {
                weekLinksHTML += "|";
            }

            // Add the link title and URL to the string
            weekLinksHTML += `<a href="${baseURL}${link.url}">${link.title}</a>`;
        });

        // Close the list item
        weekLinksHTML += "</li>";

        // Append the HTML for this week's links to the unordered list
        ul.innerHTML += weekLinksHTML;
    });
}

// Call the getLinks() function to fetch the links data and display it
getLinks();
