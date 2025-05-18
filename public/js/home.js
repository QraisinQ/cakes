const isLogged = JSON.parse(sessionStorage.getItem('auth')) || false;
const cardButtons = document.getElementsByClassName('get-it-button');
const loginLink = document.getElementById('loginLink');
const logoutLink = document.getElementById('logoutLink');
const cartLink = document.getElementById('cartLink');

if (isLogged) {
	loginLink.classList.add('d-none');
	logoutLink.classList.remove('d-none');
	cartLink.classList.remove('d-none');
} else {
	loginLink.classList.remove('d-none');
	logoutLink.classList.add('d-none');
	cartLink.classList.add('d-none');
}

const logout = () => {
	sessionStorage.setItem('auth', JSON.stringify(false));
	window.location.replace('/');
};

logoutLink.onclick = logout;

const goToLogin = () => {
	window.location.replace('/login.html');
};

const addItemToCart = (e) => {
	const button = e.target;
	const itemTitle = button.dataset.title;
	const itemId = button.dataset.id;

	let cart = [];

	try {
		cart = JSON.parse(sessionStorage.getItem('cart'));
		const item = cart.find(({ id }) => id == itemId);

		if (item) {
			item.count += 1;
		} else {
			cart.push({ id: itemId, count: 1 });
		}

		sessionStorage.setItem('cart', JSON.stringify(cart));
	} catch (err) {
		sessionStorage.setItem('cart', JSON.stringify([{ id: itemId, count: 1 }]));
	} finally {
		alert(`${itemTitle} - added to cart!`);
	}
};

for (let button of cardButtons) {
	button.onclick = isLogged ? addItemToCart : goToLogin;
}
