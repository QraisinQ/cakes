const isLogged = JSON.parse(sessionStorage.getItem('auth')) || false;
const cardButtons = document.getElementsByClassName('get-it-button');
const loginLink = document.getElementById('loginLink');
const logoutLink = document.getElementById('logoutLink');
const basketLink = document.getElementById('basketLink');

if (isLogged) {
	loginLink.classList.add('d-none');
	logoutLink.classList.remove('d-none');
	basketLink.classList.remove('d-none');
} else {
	loginLink.classList.remove('d-none');
	logoutLink.classList.add('d-none');
	basketLink.classList.add('d-none');
}

const logout = () => {
	sessionStorage.setItem('auth', JSON.stringify(false));
	sessionStorage.setItem('basket', JSON.stringify([]));
	window.location.replace('/');
};

logoutLink.onclick = logout;

const goToLogin = () => {
	window.location.replace('/login.html');
};

const addItemTobasket = (e) => {
	const button = e.target;
	const itemTitle = button.dataset.title;
	const { id: itemId, price, image, product } = button.dataset;

	let basket = [];

	try {
		basket = JSON.parse(sessionStorage.getItem('basket'));
		const item = basket.find(({ id }) => id == itemId);

		if (item) {
			item.count += 1;
		} else {
			basket.push({ id: itemId, count: 1, price, image, product });
		}

		sessionStorage.setItem('basket', JSON.stringify(basket));
	} catch (err) {
		sessionStorage.setItem('basket', JSON.stringify([{ id: itemId, count: 1, price, image, product }]));
	} finally {
		alert(`${itemTitle} - added to basket!`);
	}
};

for (let button of cardButtons) {
	button.onclick = isLogged ? addItemTobasket : goToLogin;
}
