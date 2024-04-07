const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');
const tomorrowsTemp = document.querySelector('#forecasted-temperature');
const highTempMessage = document.querySelector('.high-temp-popup');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=20.50&lon=-86.93&units=imperial&appid=17be162312ff4299e58005a6c2e3556c`;
const urll = `https://api.openweathermap.org/data/2.5/forecast?lat=20.50&lon=-86.93&units=imperial&appid=17be162312ff4299e58005a6c2e3556c`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiFetch2() {
    try {
        const response = await fetch(urll);
        if (response.ok) {
            const data = await response.json();
            displayResults2(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults2(dat) {
    tomorrowsTemp.innerHTML = `3PM-${dat.list[13].main.temp}&deg;F`;
    highTempMessage.innerHTML = `Today's High Temperature: ${dat.list[6].main.temp_max}&deg;F`;

    const closeButton = document.createElement('a');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '❌';

    highTempMessage.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
        highTempMessage.style.display = 'none';
    });
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    humidity.innerHTML = `${data.main.humidity}%`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

apiFetch2();
apiFetch();
