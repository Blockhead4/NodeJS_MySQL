let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
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
