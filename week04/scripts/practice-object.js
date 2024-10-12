const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections:{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
  };


const button = document.querySelector('#enrollStudent');

button.addEventListener ('click' , function(){

    const section = document.querySelector('#sections');

    const tr = document.createElement('tr');

    const th = document.createElement('th');

    th.innerHTML = `Welcome to the ${courseName} ${stuFirstName}!`;

    tr.appendChild(th);

    section.appendChild(tr);

});


