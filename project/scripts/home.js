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

    if (photos.length === 0){ /*Verifying if there are photos in the home page. This is because if the user search for something and nothing match this message is going to show up*/

        noResultsMessage.diplay = 'none';

        setTimeout(() => {
            noResultsMessage.style.display = 'block';
        }, 800);
        
    }
    else{
        noResultsMessage.style.display = 'none'
        photos.forEach(photo => {
            const image = document.createElement('img')
            image.src = photo.imageUrl
            image.alt = photo.description
            image.loading = "lazy" 

            /*This code bellow send the image information to the local storage
            to use it in the details page*/
            image.addEventListener('click', () => {
                localStorage.setItem('selectedPhoto', JSON.stringify(photo));
                window.location.href = 'details.html';
            });

            gallery.append(image)

        });
    }
}

const getPhotos = async() => { /*Getting the list of photos and their information from the json file in the github repository*/

    const response = await fetch("https://gotayjosue.github.io/wdd131/project/photos.json")

    photosList = await response.json();

    displayPhotos(photosList);
}


function searchPhotos(query){ /*This function compares the input provided by the user with the image description to show the results if some match is found*/
    if(query === ''){
        displayPhotos(photosList)
        return
    }
    const queryWords = query.toLowerCase().split(' ')
    const filteredPhotos = photosList.filter(photo => {
        const descriptionWords = photo.description.toLowerCase().split(', ');
        return queryWords.some(queryWord => descriptionWords.includes(queryWord))
    });

    displayPhotos(filteredPhotos)
}

search.addEventListener('input', () => {

    const searchTerm = search.value.trim();
    searchPhotos(searchTerm)

});

getPhotos()