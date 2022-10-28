// Mysql2
const mysql = require("mysql2");

// Connect to DB
const conn = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Sqlhab214?',
      database: 'employees'
    },
    console.log(`Connected to the employees database.`)
  );

  connection.connect(function (err) {
    if (err) throw err;
  });
  
  module.exports = conn;