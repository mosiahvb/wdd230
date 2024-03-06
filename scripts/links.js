const baseURL = "https://mosiahvb.github.io/wdd230/";
const linksURL = "https://mosiahvb.github.io/wdd230/data/links.json";

// Asynchronous function to get the links data from the links.json file
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
  }
  
  getLinks();