document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active")
        navigation.classList.toggle("menu-open");
    });
});


/*Like button functionality*/

const likeButton = document.querySelector('#like-button')

likeButton.addEventListener('click', () => { /*This function changes the class of the like button, if it's white it will turn it red and viceversa*/
    likeButton.classList.toggle('liked');
    likeButton.textContent = likeButton.classList.contains('liked') ? '❤️' : '🤍';

    const likedPhoto = JSON.parse(localStorage.getItem('selectedPhoto'))
    
    if (likedPhoto) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || []; /*Getting the favorites array from the local storage*/

        const isAlreadyFavorite = favorites.some(photo => photo.imageUrl === likedPhoto.imageUrl)

        if (!isAlreadyFavorite) { /*Add a photo to the favorites array when you click the like button*/

            favorites.push(likedPhoto);

            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
        else{ /*Erase a photo from the favorites array in the local storage*/
            favorites = favorites.filter(photo => photo.imageUrl !== likedPhoto.imageUrl)
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }

})

/*Place a photo in the details page*/

document.addEventListener('DOMContentLoaded', () => {
    const selectedPhoto = JSON.parse(localStorage.getItem('selectedPhoto')); /*This line here retrieve the data of the photo the user clicked on the home page*/

    if (selectedPhoto) { /*If data exists in 'selectedPhoto' the photo is placed in the prepared container with it's corresponding information*/
        document.querySelector('#artist-name').textContent = selectedPhoto.artist;
        document.querySelector('#large-image').src = selectedPhoto.imageUrl;

        let favorites = JSON.parse(localStorage.getItem('favorites')) || []
        const isFavorite = favorites.some(photo => photo.imageUrl === selectedPhoto.imageUrl)

        if (isFavorite){   /*Verify if the photo is in the favorites list*/
            likeButton.classList.add('liked') /*Add the 'liked' class if the photo is already in the favorites list*/
            likeButton.textContent = '❤️'
        }
    }
});