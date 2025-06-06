//Import express module (framework for building web applications and APIs)
const express = require("express");
// Initialize express application and store it in the app variable
const app = express();
//Import the body-parser meddleware, used to parse incoming request bodies
const bodyParser = require("body-parser");
//Import myDatabase object from a local module  located at ./database/database
const { myDatabase } = require("./database/database");

const PORT = 3000;

// Adds middleware to parse application/x-www-form-urlencoded form data (like what you get from HTML forms).
//extended: true allows parsing of rich objects and arrays.
app.use(bodyParser.json());

//Set EJS (Embedded JavaScript) as the templating/view engine to render dynamic HTML pages.
app.set("view engine", "ejs");

//Defines a GET route handler for the root path (/). When someone visits the homepage, this function will be called.
app.get("/", (req, res) => {
  //Calls a method getAllCakes() on your database abstraction to retrieve a list of cakes from the database.
  myDatabase
    .getAllCakes()
    //When the database query resolves successfully, it receives rows and fields.
    //The view index.ejs is rendered with cakes as a variable containing the database results.
    .then(([rows, fields]) => {
      res.render("index", { cakes: rows });
    })
    //Logs any error that occurs during the database query.
    .catch((err) => console.log(err));
});

// Receives email and password from the request body
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Queries the database for a user with the given email.
  myDatabase.getUserByEmail(email).then(([rows, fields]) => {
    //   If no user is found, respond with: 401 Unauthorized
    if (!rows.length) {
      res.status(401).send("");
      return;
    }

    // If the password does not match the one stored in the database, respond with: 401 Unauthorized
    const [user] = rows;

    if (user.password !== password) {
      res.status(401).send("");
      return;
    }
    // If email exists and password matches, respond with: 200 OK
    res.status(200).send("Ok");
  });
});

//Server static files from the public ddirectory. These files are accessible directly via the URL.
app.use(express.static("public", { extensions: ["html"] }));

//Start the server on port 3000. Logs a message when the server is up and running
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
