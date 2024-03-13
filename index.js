const inquirer = require('inquirer')




// Define the questions to ask the user using inquirer
const questions = [
    {
        type: 'list',
        message: 'What would you like to do ? ',
        name: 'question',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
    },
]



// Main function to initialize the application
const init = () => {
    inquirer
    .prompt(questions)
    .then((choices) => {
        
        console.log(choices)       
    })
}

init()