document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active")
        navigation.classList.toggle("menu-open");
    });
});

let photosList = []

const gallery = document.getElementById('gallery');
const search = document.getElementById('search-bar');
const noResultsMessage = document.querySelector('#noResultsMessage')

function displayPhotos(photos){
    gallery.innerHTML = ''

    if (photos.length === 0){
        noResultsMessage.style.display = 'block';
    }
    else{
        photos.forEach(photo => {
            noResultsMessage.style.display = 'none'
            const image = document.createElement('img')
            image.src = photo.imageUrl
            image.alt = photo.description
            image.loading = "lazy" 

            image.addEventListener('click', () => {
                localStorage.setItem('selectedPhoto', JSON.stringify(photo));
                window.location.href = 'details.html';
            });

            gallery.append(image)

        });
    }
}

const getPhotos = async() => {

    const response = await fetch("https://gotayjosue.github.io/wdd131/project/photos.json")

    photosList = await response.json();

    displayPhotos(photosList);
}


function searchPhotos(query){
    const filteredPhotos = photosList.filter(photo => photo.description.toLowerCase().includes(query.toLowerCase()))
    displayPhotos(filteredPhotos)
}

search.addEventListener('keypress', (event) => {

    if (event.key === 'Enter'){
        const searchTerm = search.value.trim();
        searchPhotos(searchTerm)
    }

});



getPhotos()