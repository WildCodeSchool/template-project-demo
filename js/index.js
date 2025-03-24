const burgerButton = document.getElementById("burgerButton")
const burgerMenu = document.getElementById("burgerMenu")
const closeMenu = document.getElementById("closeMenu")

function onBurgerButtonClick() {
  burgerMenu.classList.toggle("hidden")
}

burgerButton.addEventListener("click", onBurgerButtonClick)
closeMenu.addEventListener("click", onBurgerButtonClick)
