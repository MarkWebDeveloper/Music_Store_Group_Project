let productImg = document.getElementById('product_img')
let mini1 = document.getElementById('mini1')
let mini2 = document.getElementById('mini2')
let mini3 = document.getElementById('mini3')
let mini4 = document.getElementById('mini4')


mini1.addEventListener('click', (event) => {
    event.preventDefault();
    
    productImg.outerHTML = /* html */ `
    <img src="./../assets/images/GALLERY/Jethro-Tull-Thick-as-a-Brick-1-1.jpg" alt="product_img" id="product_img">
    `
})

mini2.addEventListener('click', (event) => {
    event.preventDefault();
    
    productImg.outerHTML = /* html */ `
    <img src="./../assets/images/MINIATURES/61ztN5Tl5EL._UF1000,1000_QL80_.jpg" alt="img2" id="mini2">
    `
})