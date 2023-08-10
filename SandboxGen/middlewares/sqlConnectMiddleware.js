var mysql = require("mysql2");

const dbConfig = require("../config/sqlConfig.js"); // Your MySQL database configuration
const connection = mysql.createConnection(dbConfig);

// RDS 접속
connection.connect(function (err) {
  if (err) {
    throw err;
  } else {
    connection.query(
      "SELECT professor_id FROM info_professor",
      function (err, rows, fields) {
        console.log(rows);
      }
    );
  }
});
