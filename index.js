const inquirer = require('inquirer');
const db = require('./server.js');
const { Table } = require('console-table-printer');

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
            p.addRow({ ID: row.id, Name: row.name });
        });
        // Print the table
        p.printTable();
        init();
    });
}

// Function to view all roles with department and salary
function viewAllRoles() {
    const query = `
    SELECT r.id, r.title, d.name AS department, r.salary
    FROM role r
    INNER JOIN department d ON r.department_id = d.id
    ORDER BY r.id ASC`;

    db.query(query, (err, results) => {
        if (err) throw err;
        const p = new Table();
        results.forEach(row => {
            p.addRow({
                ID: row.id, 
                Title: row.title, 
                Department: row.department, 
                Salary: row.salary
            });
        });
        p.printTable();
        init(); 
    });
}


// Function to view all employees with their details
function viewAllEmployees() {
    const query = `
        SELECT 
            e.id, 
            e.first_name, 
            e.last_name, 
            r.title, 
            d.name AS department, 
            r.salary, 
            CONCAT(m.first_name, ' ', m.last_name) AS manager
        FROM 
            employee e
        JOIN 
            role r ON e.role_id = r.id
        JOIN 
            department d ON r.department_id = d.id
        LEFT JOIN 
            employee m ON e.manager_id = m.id`;

    db.query(query, (err, results) => {
        if (err) throw err;
        const p = new Table();
        results.forEach(row => {
            p.addRow({
                ID: row.id, 
                'First Name': row.first_name, 
                'Last Name': row.last_name, 
                Title: row.title, 
                Department: row.department, 
                Salary: row.salary, 
                Manager: row.manager || 'None' 
            });
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

// Function to add an employee
function addEmployee() {
    db.query('SELECT id, title FROM role', (err, roles) => {
        if (err) throw err;
        db.query('SELECT id, CONCAT(first_name, " ", last_name) AS name FROM employee', (err, employees) => {
            if (err) throw err;
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'What is the first name of the employee?',
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'What is the last name of the employee?',
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'What is the role of the employee?',
                    choices: roles.map(role => ({ name: role.title, value: role.id })),
                },
                {
                    type: 'list',
                    name: 'manager',
                    message: 'Who is the manager of this employee?',
                    choices: [{ name: 'None', value: null }].concat(employees.map(employee => ({ name: employee.name, value: employee.id }))),
                }
            ]).then(answer => {
                db.query(
                    'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
                    [answer.firstName, answer.lastName, answer.role, answer.manager],
                    (err, result) => {
                        if (err) throw err;
                        console.log(`Added ${answer.firstName} ${answer.lastName} to employees`);
                        init();
                    }
                );
            });
        });
    });
}


// Main function to initialize the application
const init = () => {
    inquirer
        .prompt(questions)
        .then((choices) => {
            switch (choices.question) {
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
                case 'Add Employee':
                    addEmployee();
                    break;

            }
        });
}

init();
