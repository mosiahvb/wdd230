const url = "data/members.json";
const card = document.querySelector(".directory");
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    displayDirectory(data.directory);
  }
  
  const displayDirectory = (directory) => {
    directory.forEach(member => {
        const sec = document.createElement('section');
        const h2 = document.createElement('h2');
        const phone_number = document.createElement('p');
        const addresses = document.createElement('p');
        const website = document.createElement('p');
        const membership = document.createElement('p');
        const img = document.createElement('img');

        h2.textContent = `${member.names}`;
        phone_number.textContent = `${member.phone_numbers}`;
        addresses.textContent = `${member.addresses}`;
        website.textContent = `${member.website_URLs}`;
        membership.textContent = `${member.membership_level}`;
        img.setAttribute('src', member.image);
        img.setAttribute('alt', member.altText)

        sec.appendChild(h2);
        sec.appendChild(phone_number);
        sec.appendChild(addresses);
        sec.appendChild(website);
        sec.appendChild(membership);
        sec.appendChild(img);

        card.appendChild(sec); // Append sec to the cards div
    });
}

  getData();