const urlll = "data/members.json";

async function spotlightMembers() {
    const response = await fetch(urlll);
    const { directory } = await response.json();

    const silverGoldMembers = directory.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');
    const c1 = document.querySelector(".c1");
    const c2 = document.querySelector(".c2");
    const c3 = document.querySelector(".c3");

    for (let i = 0; i < Math.min(silverGoldMembers.length, 3); i++) {
        const member = silverGoldMembers[i];
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        h4.textContent = member.names;
        p1.textContent = `Address: ${member.addresses}`;
        p2.textContent = `Address: ${member.phone_numbers}`;
        p3.textContent = `Address: ${member.website_URLs}`;

        div.appendChild(h4);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        if (i === 0) {
            c1.appendChild(div);
        } else if (i === 1) {
            c2.appendChild(div);
        } else if (i === 2) {
            c3.appendChild(div);
        }
    }
}

spotlightMembers();
