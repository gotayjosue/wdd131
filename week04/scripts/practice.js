let firstName = 'Antonia';
let lastName = 'Francesca';

// function fullName(first,last){
    
//     return `The full name is: ${first} ${last}`
// }

// const fullName = function(first, last){
    
//     return `${first} ${last}`
// }

// const fullName = (first, last) => {

//     return `${first} ${last}`
// }

// document.querySelector('#fullName').textContent = fullName(firstName, lastName);


const numbers = [1, 2, 3, 4, 5];

document.querySelector('#array1').textContent = numbers

const doubleNumbers = numbers.map(number => number / 2);

document.querySelector('#map').textContent = doubleNumbers;

const prices = [12, 24, 30, 50, 5];

document.querySelector('#array2').textContent = prices;

const discount = 0.15;

const discountPrices = prices.map(price => price - (price * discount));

document.querySelector('#discount').textContent = discountPrices

const selector = document.querySelector('#colorSelector');

selector.addEventListener('change', function(){

    const color = selector.value

    switch (color) {
        case 'dark':
            document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.825)';
            document.body.style.color = 'white';
            break;

        case 'default':
            document.body.style.color = ''
            document.body.style.backgroundColor = ''
            break;
    }
})

const normalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.querySelector('#array3').textContent = normalNumbers;

const oddNumbers = normalNumbers.filter(normalNumber => normalNumber % 2 != 0)

document.querySelector('#odd').textContent = oddNumbers