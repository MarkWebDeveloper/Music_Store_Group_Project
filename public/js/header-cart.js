let addToCartButton = document.getElementById('cart_button')
let headerCart = document.getElementById('header_cart_button')
let headerFullCart = document.getElementById('header_full_cart')
let headerEmptyCart = document.getElementById('header_empty_cart')

addToCartButton.addEventListener('click', (e) => {
    e.preventDefault();

    clicked = false

    cartIndex = 0

    if (clicked == false) {
        cartIndex =+ 1
        headerFullCart.style.display = 'none';
        headerEmptyCart.style.display = 'block';
        clicked = true
    }

    if (clicked == true) {
        cartIndex =- 1
        headerFullCart.style.display = 'block';
        headerEmptyCart.style.display = 'none';
        clicked = false
    }
    
})