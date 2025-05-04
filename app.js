const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { myDatabase } = require('./database/database');

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
//Set view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	myDatabase
		.getAllCakes()
		.then(([rows, fields]) => {
			res.render('index', { cakes: rows });
		})
		.catch((err) => console.log(err));
});

app.get('/shop', function (req, res) {
	// console.log(myDatabase.getAllCakes());
});

//Server static files from the public ddirectory
app.use(express.static('public'));

//Start the server
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
