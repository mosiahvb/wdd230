const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  prophets.forEach(prophet => {
    const card = document.createElement('section');
    const h2 = document.createElement('h2');
    const birthday = document.createElement('p');
    const birthplace = document.createElement('p');
    const img = document.createElement('img');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthday.textContent = `Date of Birth: ${prophet.birthday}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);

    card.appendChild(h2);
    card.appendChild(birthday);
    card.appendChild(birthplace);
    card.appendChild(img);

    cards.appendChild(card); // Append card to the cards div, not card to card
  });
}

getProphetData();
