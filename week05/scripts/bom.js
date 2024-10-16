const button = document.querySelector('button[type="submit"]');
const input = document.querySelector('#favchap');
const list = document.querySelector('#list');

button.addEventListener('click', function(){
    
    
    if (input.value.trim() !== '') {
        displayList(input.value)
        chaptersArray.push(input.value)
        setChapterList();
        input.value = '';
        input.focus();
    }
});


let chaptersArray = getChapterList() || [];

function getChapterList(){

    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

chaptersArray.forEach(chapter => {

    displayList(chapter);

});

function displayList(item){
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        deleteChapter(li.textContent)
        input.focus();
    });

    li.append(deleteButton);
    list.append(li);
    input.focus();
}

function setChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}