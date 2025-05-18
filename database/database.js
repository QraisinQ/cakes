//Connect ot database:
const mysql = require('mysql2');

class MyDatabase {
	constructor() {
		//Create a connection to MySQL database
		this.connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'root',
			database: 'g00472936',
		});
	}

	getAllCakes() {
		return this.connection.promise().query('SELECT * FROM cakes;');
	}

	getUserByEmail(email) {
		return this.connection.promise().query(`SELECT * FROM users WHERE email='${email}';`);
	}
}

const myDatabase = new MyDatabase();

exports.myDatabase = myDatabase;
