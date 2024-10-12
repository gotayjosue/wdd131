const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla, Colombia",
    dedicated: "2018, December, 9",
    area: 25349,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/320x200/2-Barranquilla-Columblia-Temple-2135201.jpg"
    },
    {
      templeName: "Belém Brazil",
      location: "Belém, Brazil",
      dedicated: "2022, November, 20",
      area: 28675,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/800x500/belem_brazil_temple_exterior2.jpg"
      }
  ];

const templeGalery = document.querySelector('#gallery')

  const displayTemples = (temples) => {
        templeGalery.innerHTML = '';
       temples.forEach(temple => {
        const article = document.createElement('article')
        const title = document.createElement('h3')
        const location = document.createElement('p')
        const dedicated = document.createElement('p')
        const size = document.createElement('p')
        const image = document.createElement('img')
        image.src = temple.imageUrl
        image.alt = temple.location
        image.loading = "lazy"

        title.textContent = temple.templeName;
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`
        size.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`
        image.innerHTML = image

        article.appendChild(title)
        article.appendChild(location)
        article.appendChild(dedicated)
        article.appendChild(size)
        article.appendChild(image)

        templeGalery.appendChild(article)

      })
    };

displayTemples(temples)

const old = document.querySelector('#old');


old.addEventListener('click', function(){
  event.preventDefault()
  const oldTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1900, 0, 1));
  displayTemples(oldTemples);

});

const newTemples = document.querySelector('#new');

newTemples.addEventListener('click', function(){
  event.preventDefault()
  const newTemplesFiltered = temples.filter(temple => new Date(temple.dedicated) > new Date(2000, 0, 1));
  displayTemples(newTemplesFiltered);

});

const largeTemples = document.querySelector('#large');

largeTemples.addEventListener('click', function(){
  event.preventDefault()
  const largeTemplesFiltered = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemplesFiltered);

});

const smallTemples = document.querySelector('#small');

smallTemples.addEventListener('click', function(){
  event.preventDefault()
  const smallTemplesFiltered = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemplesFiltered);

});

const currentYear = new Date().getFullYear();
const copyrightSymbol = "\u00A9" //This is the copyright simbol in Unicode//
const lastModified = new Date(document.lastModified);

document.getElementById('currentyear').textContent = `${copyrightSymbol}${currentYear}`;
document.getElementById('name').textContent = `Josué Gotay `;
document.getElementById('country').textContent = `Honduras`;
document.getElementById('lastModified').textContent = `Last modification ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active")
        navigation.classList.toggle("menu-open");
    });
});