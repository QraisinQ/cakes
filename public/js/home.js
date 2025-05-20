// checks the user
const isLogged = JSON.parse(sessionStorage.getItem("auth")) || false;
// DOM elements
const cardButtons = document.getElementsByClassName("get-it-button");
const loginLink = document.getElementById("loginLink");
const logoutLink = document.getElementById("logoutLink");
const basketLink = document.getElementById("basketLink");

// checks if logged in - shows logout and basket links, if logged out hides loggin and basket
if (isLogged) {
  loginLink.classList.add("d-none");
  logoutLink.classList.remove("d-none");
  basketLink.classList.remove("d-none");
} else {
  loginLink.classList.remove("d-none");
  logoutLink.classList.add("d-none");
  basketLink.classList.add("d-none");
}
// sets auth to false, clears the basket, redirects to the homepage
const logout = () => {
  sessionStorage.setItem("auth", JSON.stringify(false));
  sessionStorage.setItem("basket", JSON.stringify([]));
  window.location.replace("/");
};
//  logs out on click
logoutLink.onclick = logout;

// redirects to the login page
const goToLogin = () => {
  window.location.replace("/login.html");
};

// Displays  different image in the carousel each time the page is loaded

// Runs the function after HTML page loaded
window.addEventListener("DOMContentLoaded", () => {
  // Selects all images with .carousel-item class
  const items = document.querySelectorAll(".carousel-item");
  // Selects all dots with .carousel-indicators class
  const indicators = document.querySelectorAll(".carousel-indicators button");
  // Generates random integer inside 0 to item.length-1 range
  const randomIndex = Math.floor(Math.random() * items.length);
  // REmoves an active class from set of items (images)
  items.forEach((item) => item.classList.remove("active"));
  // Removes an active class from set of indicators(dots)
  indicators.forEach((indicator) => indicator.classList.remove("active"));
  // Sets an active class to randomly chosen item(image)
  items[randomIndex].classList.add("active");
  // Sets an active class to randomly chosen indicator(dot)
  indicators[randomIndex].classList.add("active");
});

//adds item to the basket
const addItemTobasket = (e) => {
  const button = e.target;
  const itemTitle = button.dataset.title;
  const { id: itemId, price, image, product } = button.dataset;

  let basket = [];
  //  tries to load the current basket from session storage
  try {
    basket = JSON.parse(sessionStorage.getItem("basket"));
    // checks if this item exists in the basket
    const item = basket.find(({ id }) => id == itemId);
    //    if yes, increments amount, if no adds 1 item
    if (item) {
      item.count += 1;
    } else {
      basket.push({ id: itemId, count: 1, price, image, product });
    }
    //if no basket data, creates new, alerts addition
    sessionStorage.setItem("basket", JSON.stringify(basket));
  } catch (err) {
    sessionStorage.setItem(
      "basket",
      JSON.stringify([{ id: itemId, count: 1, price, image, product }])
    );
  } finally {
    alert(`${itemTitle} - added to basket!`);
  }
};
// if logged in, adding to the basket, if not - redirects ot the log in page
for (let button of cardButtons) {
  button.onclick = isLogged ? addItemTobasket : goToLogin;
}
