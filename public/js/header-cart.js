let addToCartButton = document.getElementById('cart_button')
let headerCart = document.getElementById('header_cart_button')
let headerFullCart = document.getElementById('header_full_cart')
let headerEmptyCart = document.getElementById('header_empty_cart')

let cartIndex = 0

addToCartButton.addEventListener('click', (e) => {
    e.preventDefault();

    clicked = false

    // if (clicked == false) {
    //     cartIndex =+ 1
    //     headerFullCart.style.display = 'none';
    //     headerEmptyCart.style.display = 'block';
    //     clicked = true
    // }

    // if (clicked == true) {
    //     cartIndex =- 1
    //     headerFullCart.style.display = 'block';
    //     headerEmptyCart.style.display = 'none';
    //     clicked = false
    // }

    // if (headerFullCart.style.display == 'none') {
    //     cartIndex += 1
    //     headerFullCart.style.display = 'block';
    //     headerEmptyCart.style.display = 'none';
    //     let newNumElement = document.createElement('p')
    //     let newNumber = document.createTextNode(`${cartIndex}`)
    //     newNumElement.appendChild(newNumber)
    //     headerCart.insertBefore(newNumElement, headerEmptyCart)
    // } else {
    //     cartIndex += 1
    //     let newestNumElement = document.createElement('p')
    //     let newestNumber = document.createTextNode(`${cartIndex}`)
    //     newestNumElement.appendChild(newestNumber)
    //     newNumElement.replaceWith(newestNumElement)
    // }

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