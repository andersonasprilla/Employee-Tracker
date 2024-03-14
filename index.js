const inquirer = require('inquirer');
const db = require('./server.js'); 
const {Table} = require('console-table-printer');

// Define the questions to ask the user using inquirer
const questions = [
    {
        type: 'list',
        message: 'What would you like to do ? ',
        name: 'question',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
    },
];

// Function to view all departments
function viewAllDepartments() {
    db.query('SELECT * FROM department', (err, results) => {
        if (err) throw err;
        // Create a new table
        const p = new Table();
        results.forEach(row => {
            p.addRow({ID: row.id, Name: row.name});
        });
        // Print the table
        p.printTable();
        init(); 
    });
}

// Function to view all roles
function viewAllRoles() {
    db.query('SELECT * FROM role', (err, results) => {
        if (err) throw err;
        const p = new Table();
        results.forEach(row => {
            p.addRow(row);
        });
        p.printTable();
        init(); 
    });
}

// Function to view all employees
function viewAllEmployees() {
    db.query('SELECT * FROM employee', (err, results) => {
        if (err) throw err;
        const p = new Table();     
        results.forEach(row => {
            p.addRow(row);
        });
        p.printTable();
        init();
    });
}

// Function to add a department
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: 'What is the name of the department?',
        },
    ]).then(answer => {
        db.query('INSERT INTO department (name) VALUES (?)', [answer.deptName], (err, result) => {
            if (err) throw err;
            console.log(`Added ${answer.deptName} to departments`);
            init();
        });
    });
}

// Main function to initialize the application
const init = () => {
    inquirer
    .prompt(questions)
    .then((choices) => {
        switch(choices.question) {
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add Department':
                addDepartment();
                break;
        }
    });
}

init();
