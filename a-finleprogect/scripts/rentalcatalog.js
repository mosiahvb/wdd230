document.addEventListener("DOMContentLoaded", function() {
    const hms1 = document.querySelector('#hms1');
    const hms2 = document.querySelector('#hms2');
    const hms3 = document.querySelector('#hms3');
    const hms4 = document.querySelector('#hms4');

    const hds1 = document.querySelector('#hds1');
    const hds2 = document.querySelector('#hds2');
    const hds3 = document.querySelector('#hds3');
    const hds4 = document.querySelector('#hds4');

    const hpa1 = document.querySelector('#hpa1');
    const hpa2 = document.querySelector('#hpa2');
    const hpa3 = document.querySelector('#hpa3');
    const hpa4 = document.querySelector('#hpa4');

    const hps1 = document.querySelector('#hps1');
    const hps2 = document.querySelector('#hps2');
    const hps3 = document.querySelector('#hps3');
    const hps4 = document.querySelector('#hps4');

    const jw4d1 = document.querySelector('#jw4d1');
    const jw4d2 = document.querySelector('#jw4d2');
    const jw4d3 = document.querySelector('#jw4d3');
    const jw4d4 = document.querySelector('#jw4d4');

    const jw2d1 = document.querySelector('#jw2d1');
    const jw2d2 = document.querySelector('#jw2d2');
    const jw2d3 = document.querySelector('#jw2d3');
    const jw2d4 = document.querySelector('#jw2d4');
    


    const url = `data/data.json`;

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

    function displayResults(data) {
        hms1.textContent = data["Max Rental Pricing"]["Rental Types"][0]["reservation"]["Half Day"];
        hms2.textContent = data["Max Rental Pricing"]["Rental Types"][0]["reservation"]["Full Day"];
        hms3.textContent = data["Max Rental Pricing"]["Rental Types"][0]["walk-in"]["Half Day"];
        hms4.textContent = data["Max Rental Pricing"]["Rental Types"][0]["walk-in"]["Full Day"];

        hds1.textContent = data["Max Rental Pricing"]["Rental Types"][1]["reservation"]["Half Day"];
        hds2.textContent = data["Max Rental Pricing"]["Rental Types"][1]["reservation"]["Full Day"];
        hds3.textContent = data["Max Rental Pricing"]["Rental Types"][1]["walk-in"]["Half Day"];
        hds4.textContent = data["Max Rental Pricing"]["Rental Types"][1]["walk-in"]["Full Day"];

        hps1.textContent = data["Max Rental Pricing"]["Rental Types"][2]["reservation"]["Half Day"];
        hps2.textContent = data["Max Rental Pricing"]["Rental Types"][2]["reservation"]["Full Day"];
        hps3.textContent = data["Max Rental Pricing"]["Rental Types"][2]["walk-in"]["Half Day"];
        hps4.textContent = data["Max Rental Pricing"]["Rental Types"][2]["walk-in"]["Full Day"];

        hpa1.textContent = data["Max Rental Pricing"]["Rental Types"][3]["reservation"]["Half Day"];
        hpa2.textContent = data["Max Rental Pricing"]["Rental Types"][3]["reservation"]["Full Day"];
        hpa3.textContent = data["Max Rental Pricing"]["Rental Types"][3]["walk-in"]["Half Day"];
        hpa4.textContent = data["Max Rental Pricing"]["Rental Types"][3]["walk-in"]["Full Day"];

        jw4d1.textContent = data["Max Rental Pricing"]["Rental Types"][4]["reservation"]["Half Day"];
        jw4d2.textContent = data["Max Rental Pricing"]["Rental Types"][4]["reservation"]["Full Day"];
        jw4d3.textContent = data["Max Rental Pricing"]["Rental Types"][4]["walk-in"]["Half Day"];
        jw4d4.textContent = data["Max Rental Pricing"]["Rental Types"][4]["walk-in"]["Full Day"];

        jw2d1.textContent = data["Max Rental Pricing"]["Rental Types"][5]["reservation"]["Half Day"];
        jw2d2.textContent = data["Max Rental Pricing"]["Rental Types"][5]["reservation"]["Full Day"];
        jw2d3.textContent = data["Max Rental Pricing"]["Rental Types"][5]["walk-in"]["Half Day"];
        jw2d4.textContent = data["Max Rental Pricing"]["Rental Types"][5]["walk-in"]["Full Day"];

        
    }

    apiFetch();
});
