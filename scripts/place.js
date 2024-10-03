const currentYear = new Date().getFullYear();
const copyrightSymbol = "\u00A9" //This is the copyright simbol in Unicode//
const lastModified = new Date(document.lastModified);

document.getElementById('currentyear').textContent = `${copyrightSymbol}${currentYear}`;
document.getElementById('name').textContent = `Josué Gotay `;
document.getElementById('country').textContent = `Honduras`;
document.getElementById('lastModified').textContent = `Last modification ${document.lastModified}`;


let temperature = convertCelsius(10) //Teperature un celsius//

let wind = convertKilometers(18) //wind speed in kilometers per hour//


//wind chill formula. It uses the temperature already converted to fahrenheit and the wind speed converted to mph//
const calculateWindChill = (temp, windSpeed) =>  windChill = 35.74 + 0.6215 * temp - 35.75 * windSpeed**0.16 + 0.4275 * temp * windSpeed**0.16


//This function converts the result of the calculateWindChill function to celsius//
function convertFahrenheit(grades){

    celsius = (grades - 32) * 5/9

    return Math.round(celsius)

}

//This formula converts the temperature variable input (which is celsius) to fahrenheit. For it to can be use by the calculateWindChill formula//
function convertCelsius(grades){

    fahrenheit = (grades * 9/5) + 32

    return Math.round(fahrenheit)

}

//This formula converts the wind variable input (which is km/h) to m/h. For it to can be use by the calculateWindChill formula//
function convertKilometers(speed){

    miles = speed * 0.621371

    return Math.round(miles)
}

if (temperature <= 50 && wind > 3 ) {

    document.querySelector('#wind-chill').textContent = `${convertFahrenheit(calculateWindChill(temperature, wind))}ºC`
} else{
    document.querySelector('#wind-chill').textContent = `N/A` 
}