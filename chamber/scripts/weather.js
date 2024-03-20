const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const fTemp1 = document.querySelector('#future-temp1');
const fTemp2 = document.querySelector('#future-temp2');
const fTemp3 = document.querySelector('#future-temp3');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=43.57&lon=-116.56&units=imperial&appid=17be162312ff4299e58005a6c2e3556c`;
const urll = `https://api.openweathermap.org/data/2.5/forecast?lat=43.57&lon=-116.56&units=imperial&appid=17be162312ff4299e58005a6c2e3556c`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const forecastResponse = await fetch(urll);
            if (forecastResponse.ok) {
                const forecastData = await forecastResponse.json();
                displayResults(data, forecastData);
            } else {
                throw Error(await forecastResponse.text());
            }
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function formatDayOfWeek(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[date.getDay()];
    return dayOfWeek;
}

function displayResults(data, forecastData) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    fTemp1.innerHTML = `${formatDayOfWeek(forecastData.list[2].dt)}: ${forecastData.list[2].main.temp_min}&deg;F - ${forecastData.list[5].main.temp_max}&deg;F`;
    fTemp2.innerHTML = `${formatDayOfWeek(forecastData.list[12].dt)}: ${forecastData.list[11].main.temp_min}&deg;F - ${forecastData.list[14].main.temp_max}&deg;F`;
    fTemp3.innerHTML = `${formatDayOfWeek(forecastData.list[20].dt)}: ${forecastData.list[19].main.temp_min}&deg;F - ${forecastData.list[22].main.temp_max}&deg;F`;
}

apiFetch();