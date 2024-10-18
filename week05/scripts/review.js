const visits = document.querySelector('#visits')

let visitsArray = getVisits() || [];

let visited = visitsArray.length + 1

visitsArray.push(visited)

function getVisits(){
    return JSON.parse(localStorage.getItem('myVisits'))
}

function setVisits(){
    localStorage.setItem('myVisits', JSON.stringify(visitsArray))
}

setVisits()

if(visited === 1){
    visits.textContent = 'This is your first time on this page'
}
else{
    visits.textContent = visited
}