const bannerImages = document.querySelector('.banner_images');
const buttons = document.querySelectorAll('.button_banner button');

button_container.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault()
        const slideWidth = document.querySelector('.banner_images').offsetWidth;
        banner_images.style.transform = `translateX(-${index * slideWidth}px)`;
    });
});