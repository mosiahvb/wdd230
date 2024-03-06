const baseURL = "https://mosiahvb.github.io/wdd230/";
const linksURL = "https://mosiahvb.github.io/wdd230/data/links.json";

// Asynchronous function to get the links data from the links.json file
async function getLinks() {
    try {
      // Fetch the links data from the links.json file
      const response = await fetch(linksURL);
      
      // Parse the JSON response
      const data = await response.json();
      
      // Call the displayLinks() function to build out the activity links
      displayLinks(data.lessons);
    } catch (error) {
      // Log any errors that occur during the fetching process
      console.error('Error fetching links data:', error);
    }
  }
  
  // Function to build out the activity links based on the data response
  function displayLinks(weeks) {
    // Access the container element where you want to display the links
    const container = document.getElementById('activity-links-container');
    
    // Loop through each week of the term
    weeks.forEach((week, index) => {
      // Create a heading element for the week
      const weekHeading = document.createElement('h2');
      weekHeading.textContent = `Week ${week.lesson}`;
      container.appendChild(weekHeading);
      
      // Create an unordered list element to hold the links for this week
      const linkList = document.createElement('ul');
      
      // Loop through the links for this week and create list items with links
      week.links.forEach(link => {
        // Create list item element
        const listItem = document.createElement('li');
        
        // Create anchor element for the link
        const linkElement = document.createElement('a');
        if (link.url) {
          // Check if the URL is provided
          linkElement.href = baseURL + link.url; // Construct the full URL
          linkElement.textContent = link.title;
        } else {
          // Handle case when URL is not provided
          linkElement.textContent = "Link not available";
          linkElement.style.color = "gray";
        }
        
        // Append the link to the list item
        listItem.appendChild(linkElement);
        
        // Append the list item to the link list
        linkList.appendChild(listItem);
      });
      
      // Append the link list to the container
      container.appendChild(linkList);
    });
  }
  
  // Call the getLinks() function to fetch the links data and display it
  getLinks();