const express = require("express");
const app = express();

//Connect ot database:
const mysql = require("mysql");
//Create a connection to MySQL database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "cakes",
});

//Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connection to database: ", err);
  } else {
    console.log("Connected to database!");
  }
});

//Server static files from the public ddirectory
app.use(express.static("home"));

app.get("/shop", function (req, res) {
  const ID = req.query.rec;
  connection.query(
    "SELECT * FROM cakes WHERE ID =? ",
    [ID],

    function (err, rows, fields) {
      if (err) {
        console.log("Error retrieving data from database:", err);
        res.status(500).send("Error retreiving data from database");
      } else if (rows.length === 0) {
        console.log(`No rows found for ID $[ID]`);
      } else {
        console.log("Data retreived from the database!");
        console.log(rows[0].Product);
        console.log(rows[0].Manufacturer);
        console.log(rows[0].Price);
        console.log(rows[0].Image);

        const prodName = rows[0].Product;
        const price = rows[0].Price;

        res.render("test.ejs", { myMessage: prodName, price: price });
      }
      //Inject data into a HTML
    }
  );
});

//Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
