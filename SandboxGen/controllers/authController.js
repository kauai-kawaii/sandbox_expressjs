// controllers/authController.js

const mysql = require("mysql2");
const dbConfig = require("../config/dbConfig"); // Your MySQL database configuration
const connection = mysql.createConnection(dbConfig);

exports.authenticateUser = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const sqlQuery = "SELECT * FROM student_info WHERE username = ?";
  connection.query(sqlQuery, [username], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).send("Internal server error");
    }

    if (results.length === 0) {
      return res.status(401).send("Username not found");
    }

    const user = results[0];
    if (user.password !== password) {
      return res.status(401).send("Incorrect password");
    }

    // Authentication successful
    res.render("success"); // Render the success HTML file
  });
};
