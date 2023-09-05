const mysql = require('mysql');

const db_con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "short_course",
});

db_con.end();
