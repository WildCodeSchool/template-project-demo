const burgerButton = document.getElementById("burgerButton")
const burgerMenu = document.getElementById("burgerMenu")
const closeMenu = document.getElementById("closeMenu")

const restaurants = RESTAURANTS
const main = document.getElementById("root")
const list = document.createElement("ul")

restaurants.map((restaurant) => {
  const card = document.createElement("li")
  card.innerHTML = `
    <h2>${restaurant.name}</h2>
    <img src="${restaurant.picture}" alt="${restaurant.name}" />
    <address> ${restaurant.address} </address>
    `
  list.appendChild(card)
})

main.appendChild(list)

function onBurgerButtonClick() {
  burgerMenu.classList.toggle("hidden")
}

burgerButton.addEventListener("click", onBurgerButtonClick)
closeMenu.addEventListener("click", onBurgerButtonClick)
