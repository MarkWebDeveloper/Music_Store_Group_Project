function cartButton(){
    changeCartOnClick()
}

let button = document.getElementById('cart_button')
let emptyCartImg = document.getElementById('empty_cart')
let fullCartImg = document.getElementById('full_cart')

function changeCartOnClick() {
    
    button.addEventListener("click", (event) => {
        event.preventDefault();

        if (emptyCartImg.style.display == 'block') {
            emptyCartImg.style.display = 'none'
            fullCartImg.style.display = 'block'
        } else {
            emptyCartImg.style.display = 'block'
            fullCartImg.style.display = 'none'
        }

    })
}

cartButton()