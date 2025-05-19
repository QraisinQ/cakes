// Retreive the login status from session storage, parse status from JSON, if status not found, set it to false
const isLogged = JSON.parse(sessionStorage.getItem("auth")) || false;

// Get references to elements in DOM
const logoutLink = document.getElementById("logoutLink");
const basketList = document.getElementById("basketList");
const totalPrice = document.getElementById("totalPrice");
const basketReciept = document.getElementById("basketReciept");
const buyButton = document.getElementById("buyButton");

// Redirect to the login page if the user is not logged in.
if (!isLogged) {
  window.location.replace("/login.html");
}

// Run function when user clicks on logout. Function sets login status to false, clears the session storage, clears the basket, redirects to the homepage
const logout = () => {
  sessionStorage.setItem("auth", JSON.stringify(false));
  sessionStorage.setItem("basket", JSON.stringify([]));
  window.location.replace("/");
};
// Run function logout when user clicks on logout
logoutLink.onclick = logout;

//REtrieve the basket from session storage
let basket = JSON.parse(sessionStorage.getItem("basket"));
//If an array is not valid,set basket empty
if (!Array.isArray(basket)) basket = [];

//Function buyCakes shows alert message with total price, sets basket empty, sets empty session storage and renders empty basket
const buyCakes = () => {
  alert(
    `Total sum: ${basket.reduce(
      (acc, { count, price }) => acc + count * price,
      0
    )}€`
  );
  basket = [];
  sessionStorage.setItem("basket", JSON.stringify([]));
  renderBasket(basket);
};

// Runs function buyCakes on click
buyButton.onclick = buyCakes;

// Return HTML markup for an item in the basket. Show product image, name, price, and controls to increase/decrease quantity.
const getItem = ({ image, product, price, id, count }) => `
<div class="basket-card row mx-2 mb-3 rounded-2">
    <div class="basket-image col-4">
        <img src="images/cakes/${image}" alt="cake photo" />
    </div>
    <div class="basket-box d-flex flex-column justify-content-around p-2 col-5">
        <div class="basket-text">${product}:</div>
        <div class="basket-price">${price}€</div>
    </div>
    <div
        class="basket-count col-3 d-flex justify-content-center align-items-center basket-count"
        data-id="${id}"
    >
        <span class="px-1 basket-control" data-increment="-1">-</span><span class="mx-1">${count}</span
        ><span class="px-1 basket-control" data-increment="1">+</span>
    </div>
</div>
`;

//Function takes an event from button
const incrementItem = (e) => {
  const button = e.target;
  //  gets data id from buttons parent
  const itemId = button.parentElement.dataset.id;
  // encreases or decreases item count on click, converts to number with "+"
  const increment = +button.dataset.increment;
  // searches id which matches itemId
  const item = basket.find(({ id }) => itemId == id);
  // updates count
  item.count += increment;
  // checks if zero or false
  if (!item.count) {
    basket = basket.filter(({ id }) => id != itemId);
  }
  // saves updated basket to session storage
  sessionStorage.setItem("basket", JSON.stringify(basket));
  // calls the function
  renderBasket(basket);
};
// updates busket on the page
const renderBasket = (items) => {
  // returns HTML string for each item and combines into large string, updates basket items
  basketList.innerHTML = items.map(getItem).join("");
  // calculates total cost, shows it on the page
  totalPrice.innerText = items.reduce(
    (acc, { count, price }) => acc + count * price,
    0
  );
  // shows product, count and price on the page in a similar to basketList.innerHTML way
  basketReciept.innerHTML = items
    .map(
      ({ product, count, price }) =>
        `<div class="mb-3 d-flex justify-content-between align-items-center basket-reciept-item"><span>${product} x${count}</span> <span>${
          price * count
        }€</span></div>`
    )
    .join("");
  // sets amount of items
  const controls = document.getElementsByClassName("basket-control");
  for (const control of controls) {
    control.onclick = incrementItem;
  }
  // disables the button after the purchase or if the basket is empty
  buyButton.disabled = !Boolean(basket.length);
};

renderBasket(basket);
