let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "******",
  database: "mysql_tutorial"
});

connection.connect();

connection.query("SELECT * FROM topic", function(error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});

connection.end();
