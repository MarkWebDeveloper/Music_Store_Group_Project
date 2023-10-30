let btnContainer = document.getElementById('button_container')

let buttons = btnContainer.getElementsByClassName('button_banner')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
}