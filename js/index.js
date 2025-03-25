const burgerButton = document.getElementById("burgerButton")
const burgerMenu = document.getElementById("burgerMenu")
const closeMenu = document.getElementById("closeMenu")

const restaurants = RESTAURANTS
const main = document.getElementById("root")
const list = document.createElement("ul")

function onBurgerButtonClick() {
  burgerMenu.classList.toggle("hidden")
}

restaurants.map((restaurant) => {
  const card = document.createElement("li")
  card.innerHTML = `
    <h2>${restaurant.name}</h2>
    <img src="${restaurant.picture}" alt="${restaurant.name}" />
    <address> ${restaurant.address} </address>
    `
  // Or you can decompose operation
  // const name = document.createElement("h2")
  // const picture = document.createElement("img")
  // const address = document.createElement("address")
  // name.textContent = restaurant.name
  // address.textContent = restaurant.address
  // picture.src = restaurant.picture
  // picture.alt = restaurant.name
  // card.appendChild(name)
  // card.appendChild(picture)
  // card.appendChild(address)

  list.appendChild(card)
})

main.appendChild(list)

burgerButton.addEventListener("click", onBurgerButtonClick)
closeMenu.addEventListener("click", onBurgerButtonClick)
