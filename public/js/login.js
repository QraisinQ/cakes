const loginForm = document.getElementById('loginForm');

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
		.then(response)
		.catch(console.log);
};
