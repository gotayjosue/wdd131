const currentYear = new Date().getFullYear();
const copyrightSymbol = "\u00A9" //This is the copyright simbol in Unicode//
const lastModified = new Date(document.lastModified);

document.getElementById('currentyear').textContent = `${copyrightSymbol}${currentYear}`;
document.getElementById('name').textContent = `Josué Gotay `;
document.getElementById('country').textContent = `Honduras`;
document.getElementById('lastModified').textContent = `Last modification ${document.lastModified}`;


let temperature = convertCelsius(15)

let wind = convertKilometers(18)

function calculateWindChill (temp, windSpeed) {

    windChill = 35.74 + 0.6215 * temp - 35.75 * windSpeed**0.16 + 0.4275 * temp * windSpeed**0.16

    return Math.round(windChill)
}

function convertFahrenheit(grades){

    celsius = (grades - 32) * 5/9

    return Math.round(celsius)

}

function convertCelsius(grades){

    fahrenheit = (grades * 9/5) + 32

    return Math.round(fahrenheit)

}

function convertKilometers(speed){

    miles = speed * 0.621371

    return Math.round(miles)
}

document.querySelector('#wind-chill').textContent = `${convertFahrenheit(calculateWindChill(temperature, wind))}ºC`