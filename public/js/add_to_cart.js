function cartButton(){
    changeCartOnClick()
}

let button = document.getElementById('cart_button')
let emptyCartImg = document.getElementById('empty_cart')
let fullCartImg = document.getElementById('full_cart')

function changeCartOnClick() {
    
    button.addEventListener("click", (event) => {
        event.preventDefault();

        if (empty_cart) {
            emptyCartImg.src.display = 'block'
            fullCartImg.src.display = 'none'
        } else {
            emptyCartImg.src.display = 'none'
            fullCartImg.src.display = 'block'
        }

    })
}
cartButton()

