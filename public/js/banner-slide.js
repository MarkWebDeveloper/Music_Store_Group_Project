let btnContainer = document.getElementById('button_container')
let buttons = btnContainer.getElementsByClassName('button_banner')
let bannerImage = document.getElementById('banner_images')
let sloganContainer = document.getElementById('slogan')

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
    bannerImage.innerHTML = /* HTML*/ `
    <div class="slogan-title">
        <h2 id="slogan">
            <span class="title-slogan title-slogan-1">DO</span>
            <span class="title-slogan title-slogan-2">YOU</span>
            <span class="title-slogan title-slogan-3">LOVE</span>
            <span class="title-slogan title-slogan-4">ROCK?</span>
        </h2>
            <a href="./gallery.html"><button id="button-banner">GO TO ROCK</button></a>
    </div>
    `
  });

button2.addEventListener ("click", function() {
    bannerImage.style.backgroundImage = "url('./../assets/images/IMG_BANNER/jazz.jpg')"
    bannerImage.innerHTML = /* HTML*/ `
    <div class="slogan-title">
        <h2 id="slogan">
            <span class="title-slogan title-slogan-1">DO</span>
            <span class="title-slogan title-slogan-2">YOU</span>
            <span class="title-slogan title-slogan-3">LOVE</span>
            <span class="title-slogan title-slogan-4">JAZZ?</span>
        </h2>
            <a href="./gallery.html"><button id="button-banner">GO TO JAZZ</button></a>
    </div>
    `
  });

button3.addEventListener ("click", function() {
    bannerImage.style.backgroundImage = "url('./../assets/images/IMG_BANNER/rock.jpg')"
    bannerImage.innerHTML = /* HTML*/ `
    <div class="slogan-title">
        <h2 id="slogan">
            <span class="title-slogan title-slogan-1">DO</span>
            <span class="title-slogan title-slogan-2">YOU</span>
            <span class="title-slogan title-slogan-3">LOVE</span>
            <span class="title-slogan title-slogan-4">POP?</span>
        </h2>
            <a href="./gallery.html"><button id="button-banner">GO TO POP</button></a>
    </div>
    `
  });

button4.addEventListener ("click", function() {
    bannerImage.style.backgroundImage = "url('./../assets/images/IMG_BANNER/electro.jpg')"
    bannerImage.innerHTML = /* HTML*/ `
    <div class="slogan-title">
        <h2 id="slogan">
            <span class="title-slogan title-slogan-1">DO</span>
            <span class="title-slogan title-slogan-2">YOU</span>
            <span class="title-slogan title-slogan-3">LOVE</span>
            <span class="title-slogan title-slogan-4">ELECTRO?</span>
        </h2>
            <a href="./gallery.html"><button id="button-banner">GO TO ELECTRO</button></a>
    </div>
    `
  });

button5.addEventListener ("click", function() {
    bannerImage.style.backgroundImage = "url('./../assets/images/IMG_BANNER/hip-hop.jpg')"
    bannerImage.innerHTML = /* HTML*/ `
    <div class="slogan-title">
        <h2 id="slogan">
            <span class="title-slogan title-slogan-1">DO</span>
            <span class="title-slogan title-slogan-2">YOU</span>
            <span class="title-slogan title-slogan-3">LOVE</span>
            <span class="title-slogan title-slogan-4">HIP-HOP?</span>
        </h2>
            <a href="./gallery.html"><button id="button-banner">GO TO HIP-HOP</button></a>
    </div>
    `
  });

button6.addEventListener ("click", function() {
    bannerImage.style.backgroundImage = "url('./../assets/images/IMG_BANNER/clasica.jpg')"
    bannerImage.innerHTML = /* HTML*/ `
    <div class="slogan-title">
        <h2 id="slogan">
            <span class="title-slogan title-slogan-1">DO</span>
            <span class="title-slogan title-slogan-2">YOU</span>
            <span class="title-slogan title-slogan-3">LOVE</span>
            <span class="title-slogan title-slogan-4">CLASSIC?</span>
        </h2>
            <a href="./gallery.html"><button id="button-banner">GO TO CLASSIC</button></a>
    </div>
    `
  });