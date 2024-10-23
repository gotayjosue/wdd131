document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active")
        navigation.classList.toggle("menu-open");
    });
});

const likeButton = document.querySelector('#like-button')

likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');
    likeButton.textContent = likeButton.classList.contains('liked') ? '❤️' : '🤍';
})

document.addEventListener('DOMContentLoaded', () => {
    const selectedPhoto = JSON.parse(localStorage.getItem('selectedPhoto'));

    if (selectedPhoto) {
        document.querySelector('#artist-name').textContent = selectedPhoto.artist;
        document.querySelector('#large-image').src = selectedPhoto.imageUrl;
    }
});