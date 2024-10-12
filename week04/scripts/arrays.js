const steps = ["one", "two", "three"];

const listTemplate = (step) => {
  return `<li>${step}<li>`;
}
const stepsHtml = steps.map(listTemplate)
document.querySelector("#myList").innerHTML = stepsHtml.join(' ');

const grades = ['A', 'B', 'A'];

const points = grades.map(grade => {
    if (grade == 'A'){

        return 4  
    }
    if (grade == 'B'){

        return 3
    }}
)


document.querySelector("#grades").innerHTML = points.join(' ')


const gpa = points.reduce((accumulator, point) => (accumulator + point) / grades.length);

document.querySelector('#gpa').innerHTML = gpa

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const fruitsRendered = fruits.filter(fruit => fruit.length > 6);

document.querySelector('#fruits').innerHTML = fruitsRendered.join(' - ');

const numberList = [12, 34, 21, 54];

const luckyNumber = numberList.indexOf(21);

document.querySelector('#lucky').innerHTML = luckyNumber;