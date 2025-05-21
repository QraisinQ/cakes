//Connect ot database:

// Import mysql2 library
const mysql = require("mysql2");

class MyDatabase {
  constructor() {
    //Create a connection to MySQL database
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "g00472936",
    });
  }
  // Retrieves all from cakes table
  getAllCakes() {
    return this.connection.promise().query("SELECT * FROM cakes;");
  }

  // Retrieves a user from database whose email matches the input
  getUserByEmail(email) {
    return this.connection
      .promise()
      .query(`SELECT * FROM users WHERE email='${email}';`);
  }
}

//Creates instance of MyDatabase
const myDatabase = new MyDatabase();

// Exports module
exports.myDatabase = myDatabase;
