document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active")
        navigation.classList.toggle("menu-open");
    });
});

const logo = document.getElementById('logo')

logo.addEventListener('click', () => {
    window.location.href = 'home.html'
})

const favoriteContainer = document.querySelector('#favorites')

const noFavoritesMessage = document.querySelector('#noFavoritesMessage')

let favoritePhotos = JSON.parse(localStorage.getItem('favorites')) || [];

if (favoritePhotos.length > 0) { /*Iterating through the favorites array to put the photos into the prepare container of the favorites page*/

    favoritePhotos.forEach(photo => {

        const image = document.createElement('img');

        const photoContainer = document.createElement('div')
        photoContainer.classList.add('photoContainer')

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

            favoritePhotos = favoritePhotos.filter(fav => fav.imageUrl !== photo.imageUrl)
            localStorage.setItem('favorites', JSON.stringify(favoritePhotos));

            photoContainer.remove()
        })
        
    });
}else{
    noFavoritesMessage.style.display = 'block'
}