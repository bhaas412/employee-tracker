// Require DB connection
const conn = require("./conn");

// TODO: Create class with methods called via prompt that query the DB
class DB {
    
    // Constructor to pass reference for queries
    constructor(connection) {
        this.connection = connection;
    }

    // TODO: SQL methods

}

modules.exports = new DB(conn);