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

        const photoContainer = document.createElement('div')
        photoContainer.classList.add('photoContainer')

        const overlay = document.createElement('div')
        overlay.classList.add('overlay')

        const eraseButton = document.createElement('button')
        eraseButton.classList.add('erase')
        eraseButton.textContent = 'Delete From Favorites'

        const star = document.createElement('span')
        star.classList.add('star')
        star.textContent = '🌟'

        image.src = photo.imageUrl;
        image.alt = photo.description

        photoContainer.appendChild(star)
        photoContainer.appendChild(image)
        photoContainer.appendChild(eraseButton)
        favoriteContainer.appendChild(photoContainer)
        
        eraseButton.addEventListener('click', () =>{

            const updateFavorites = favoritePhotos.filter(fav => fav.imageUrl !== photo.imageUrl)
            localStorage.setItem('favorites', JSON.stringify(updateFavorites));

            photoContainer.remove()
        })
        
    });
}