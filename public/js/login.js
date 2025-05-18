const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

loginForm.onsubmit = (e) => {
	e.preventDefault();
	const form = e.target;

	const email = form.elements.username.value;
	const password = form.elements.password.value;

	fetch('/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	})
		.then((response) => {
			if (response.ok) {
				sessionStorage.setItem('auth', JSON.stringify(true));
				window.location.replace('/');
			} else {
				sessionStorage.setItem('auth', JSON.stringify(false));
				loginError.classList.remove('d-none');
			}
		})
		.catch(console.log);
};
