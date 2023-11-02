let addToCartButton = document.getElementById('cart_button')
let headerCart = document.getElementById('header_cart_button')
let headerFullCart = document.getElementById('header_full_cart')
let headerEmptyCart = document.getElementById('header_empty_cart')

let cartIndex = 0

addToCartButton.addEventListener('click', (e) => {
    e.preventDefault();

    clicked = false

    if (headerEmptyCart.style.display == 'block') {
        cartIndex +=1
        headerCart.innerHTML = /* html */`
        <p>${cartIndex}</p>
        <img src="./../assets/images/ICONS/carrito-con-relleno.png" alt="full-cart" id="header_full_cart" class="header_cart">
        `
    } else {
        cartIndex +=1
        headerCart.innerHTML = /* html */`
        <p>${cartIndex}</p>
        <img src="./../assets/images/ICONS/carrito-con-relleno.png" alt="full-cart" id="header_full_cart" class="header_cart">
        `
    }
})