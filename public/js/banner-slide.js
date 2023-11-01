let btnContainer = document.getElementById('button_container')

let buttons = btnContainer.getElementsByClassName('button_banner')

let bannerImage = document.getElementById('banner_images')

let button1 = document.getElementById('button_banner_1')
let button2 = document.getElementById('button_banner_2')
let button3 = document.getElementById('button_banner_3')
let button4 = document.getElementById('button_banner_4')
let button5 = document.getElementById('button_banner_5')
let button6 = document.getElementById('button_banner_6')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("activ");
        current[0].className = current[0].className.replace(" activ", "");
        this.className += " activ";
      });
}

button1.addEventListener ("click", function() {
    bannerImage.style.backgroundImage = "url('./../assets/images/BANNER/GUITBAN1.jpg')"
  });

button2.addEventListener ("click", function() {
    bannerImage.style.backgroundImage = "url('./../assets/images/IMG_BANNER/jazz.jpg')"
  });

button3.addEventListener ("click", function() {
    bannerImage.style.backgroundImage = "url('./../assets/images/IMG_BANNER/rock.jpg')"
  });

button4.addEventListener ("click", function() {
    bannerImage.style.backgroundImage = "url('./../assets/images/IMG_BANNER/electro.jpg')"
  });

button5.addEventListener ("click", function() {
    bannerImage.style.backgroundImage = "url('./../assets/images/IMG_BANNER/hip-hop.jpg')"
  });

button6.addEventListener ("click", function() {
    bannerImage.style.backgroundImage = "url('./../assets/images/IMG_BANNER/clasica.jpg')"
  });