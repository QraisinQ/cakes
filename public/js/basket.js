const isLogged = JSON.parse(sessionStorage.getItem('auth')) || false;
const logoutLink = document.getElementById('logoutLink');
const basketList = document.getElementById('basketList');
const totalPrice = document.getElementById('totalPrice');
const basketReciept = document.getElementById('basketReciept');
const buyButton = document.getElementById('buyButton');

if (!isLogged) {
	window.location.replace('/login.html');
}

const logout = () => {
	sessionStorage.setItem('auth', JSON.stringify(false));
	sessionStorage.setItem('basket', JSON.stringify([]));
	window.location.replace('/');
};

logoutLink.onclick = logout;

let basket = JSON.parse(sessionStorage.getItem('basket'));

if (!Array.isArray(basket)) basket = [];

const buyCakes = () => {
	alert(`Total sum: ${basket.reduce((acc, { count, price }) => acc + count * price, 0)}€`);
	basket = [];
	sessionStorage.setItem('basket', JSON.stringify([]));
	renderBasket(basket);
};

buyButton.onclick = buyCakes;

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

const incrementItem = (e) => {
	const button = e.target;
	const itemId = button.parentElement.dataset.id;
	const increment = +button.dataset.increment;

	const item = basket.find(({ id }) => itemId == id);

	item.count += increment;

	if (!item.count) {
		basket = basket.filter(({ id }) => id != itemId);
	}

	sessionStorage.setItem('basket', JSON.stringify(basket));
	renderBasket(basket);
};

const renderBasket = (items) => {
	basketList.innerHTML = items.map(getItem).join('');
	totalPrice.innerText = items.reduce((acc, { count, price }) => acc + count * price, 0);
	basketReciept.innerHTML = items
		.map(
			({ product, count, price }) =>
				`<div class="mb-3 d-flex justify-content-between align-items-center basket-reciept-item"><span>${product} x${count}</span> <span>${
					price * count
				}€</span></div>`
		)
		.join('');

	const controls = document.getElementsByClassName('basket-control');
	for (const control of controls) {
		control.onclick = incrementItem;
	}

	buyButton.disabled = !Boolean(basket.length);
};

renderBasket(basket);
