const banner_images = document.querySelector('.banner_images');
const button_container = document.querySelectorAll('.button_container button');

button_container.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault()
        const slideWidth = document.querySelector('.banner_images').offsetWidth;
        banner_images.style.transform = `translateX(-${index * slideWidth}px)`;
    });
});