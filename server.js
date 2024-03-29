const express = require('express')

const mysql = require('mysql2')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_db'
},
console.log(`Connected to the employee_db database`)
)

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {});


  module.exports = db;