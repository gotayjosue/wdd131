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