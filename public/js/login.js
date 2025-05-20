// Gets access to the elements
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

//
loginForm.onsubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  const email = form.elements.username.value;
  const password = form.elements.password.value;
  // sends data with the email and password in JSON format
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    //   if response is true, stores "auth":true in session storage and redirects to the homepage
    .then((response) => {
      if (response.ok) {
        sessionStorage.setItem("auth", JSON.stringify(true));
        window.location.replace("/");
        // if false, stores "auth":false and shows the error
      } else {
        sessionStorage.setItem("auth", JSON.stringify(false));
        loginError.classList.remove("d-none");
      }
    })
    //   if error, shows hte error in the console
    .catch(console.log);
};
