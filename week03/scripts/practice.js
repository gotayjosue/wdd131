let firstName = 'Antonia';
let lastName = 'Francesca';

// function fullName(first,last){
    
//     return `The full name is: ${first} ${last}`
// }

// const fullName = function(first, last){
    
//     return `${first} ${last}`
// }

const fullName = (first, last) => {

    return `${first} ${last}`
}
document.querySelector('#fullName').textContent = fullName(firstName, lastName);
