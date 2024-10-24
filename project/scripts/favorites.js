document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active")
        navigation.classList.toggle("menu-open");
    });
});


const favoriteContainer = document.querySelector('#favorites')

const favoritePhotos = JSON.parse(localStorage.getItem('favorites')) || [];

if (favoritePhotos.length > 0) { /*Iterating through the favorites array to put the photos into the prepare container of the favorites page*/

    favoritePhotos.forEach(photo => {

        const image = document.createElement('img');
        image.src = photo.imageUrl;
        image.alt = photo.description

        favoriteContainer.appendChild(image)
        
    });
}