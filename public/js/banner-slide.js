const banner_images = document.querySelector('.banner_images');
const button_container = document.querySelectorAll('.button_container button');

button_container.forEach((button, index) => {
    button.addEventListener('click', () => {
        const slideWidth = document.querySelector('.slide').offsetWidth;
        banner_images.style.transform = `translateX(-${index * slideWidth}px)`;
    });
});