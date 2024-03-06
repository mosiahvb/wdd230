// Define the URL of the JSON resource
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Select the HTML div element with id "cards"
const cards = document.querySelector('#cards');

// Function to fetch and display prophet data
async function getProphetData() {
  try {
    // Fetch data from the JSON URL
    const response = await fetch(url);
    
    // Convert response to JSON
    const data = await response.json();
    
    // Display data in console as a table (for testing)
    console.table(data.prophets);
    
    // Call function to display prophets
    displayProphets(data.prophets);
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call function to get prophet data
getProphetData();

// Function to display prophets
const displayProphets = (prophets) => {
  // Loop through each prophet
  prophets.forEach((prophet) => {
    // Create elements for the card
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let portrait = document.createElement('img');

    // Set the full name of the prophet
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    
    // Set attributes for the portrait image
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append elements to the card
    card.appendChild(fullName);
    card.appendChild(portrait);

    // Append card to the cards div
    cards.appendChild(card);
  });
}
