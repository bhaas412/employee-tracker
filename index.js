// Inquirer
const { prompt } = require("inquirer");
// console.table
const cTable = require('console.table');
// Require DB object in order to perform queries via callback
const db = require('./db');

// TODO: Implement Inquirer prompts for all database operations
// TODO: User input mapped to function that performs query on DB
// TODO: Return result back to terminal