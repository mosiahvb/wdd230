const bann = document.querySelector('.banner');

const currentDayOfWeek = new Date().getDay();

if (currentDayOfWeek === 1 || currentDayOfWeek === 2 || currentDayOfWeek === 3) {

    const p = document.createElement('p');
    p.textContent = "Join us at 7PM for our Chamber meeting!!";

    const closeButton = document.createElement('button');
    closeButton.textContent = "Close";

    bann.appendChild(p);
    bann.appendChild(closeButton);

    closeButton.addEventListener('click', function() {
        bann.style.display = 'none'; 
    });
}

