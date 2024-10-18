const currentYear = new Date().getFullYear();
const copyrightSymbol = "\u00A9" //This is the copyright simbol in Unicode//
const lastModified = new Date(document.lastModified);

document.getElementById('currentyear').textContent = `${copyrightSymbol}${currentYear}`;
document.getElementById('name').textContent = `Josué Gotay `;
document.getElementById('country').textContent = `Honduras`;
document.getElementById('lastModified').textContent = `Last modification ${document.lastModified}`;

let options = document.querySelector('#products')

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  function displayProducts(){
    products.forEach(product => {
        const option = document.createElement('option')
        option.textContent = product.name
        options.appendChild(option)
    })
  }

  displayProducts(products)