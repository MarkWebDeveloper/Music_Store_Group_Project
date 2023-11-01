function cartButton(){
    changeCartOnClick()
}

let addToCartbutton = document.getElementById('cart_button')
let emptyCartImg = document.getElementById('empty_cart')
let fullCartImg = document.getElementById('full_cart')

function changeCartOnClick() {
    
    addToCartbutton.addEventListener("click", (event) => {
        event.preventDefault();

        addToCartClicked = false

        if (addToCartClicked == false) {
            emptyCartImg.style.display = 'none'
            fullCartImg.style.display = 'block'
            addToCartClicked = true
        }

    })
}

cartButton()