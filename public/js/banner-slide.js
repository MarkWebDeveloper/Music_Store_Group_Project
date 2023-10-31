const bannerImages = document.querySelector('.banner_images');
const buttons = document.querySelectorAll('.button_banner button');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const slideWidth = document.querySelector('.banner_image').offsetWidth;
        bannerImages.style.transform = `translateX(-${index * slideWidth}px)`;
    });
});