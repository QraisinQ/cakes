const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
//Set view engine
app.set('view engine', 'ejs');

// //Connect to the database
// connection.connect((err) => {
// 	if (err) {
// 		console.error('Error connection to database: ', err);
// 	} else {
// 		console.log('Connected to database!');
// 	}

app.get('/shop', function (req, res) {
	const ID = req.query.rec;
});

//Server static files from the public ddirectory
app.use(express.static('public'));

// //route to handle the login form submission
// app.post('/login', function (req, res) {
// 	const username = req.body.username;
// 	const password = req.body.password;
// 	// const { username, password = req, body }; // the same as previous 2 lines
// 	const authenticated = auth.authenticateUser(username, password);
// 	console.log(authenticated);

// 	if (authenticated) {
// 		console.log('Authentiction was successbul!');
// 		res.render('index');
// 	} else {
// 		console.log('Authentication was NOT successful!');
// 		res.render('login');
// 	}
// });

//Start the server
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
