// mysql2
const mysql = require("mysql2");

// Connect to DB
const conn = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Sqlhab214?',
      database: 'employeetracker_db'
    },
    console.log(`Connected to the employees database.`)
  );

  conn.connect(function (err) {
    if (err) throw err;
  });
  
  module.exports = conn;