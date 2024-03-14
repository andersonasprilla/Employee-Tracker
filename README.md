# Employee Management System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Walkthrough video [Link](https://app.screencastify.com/v3/watch/7fkTZExkGC8u1dj17u9J)

## Description

The Employee Management System is a command-line application designed to make it easy for non-developers to view and interact with information stored in databases. This system solves the problem of managing employee information, including departments, roles, and employee details, in a structured and user-friendly manner. It demonstrates the practical application of Node.js, MySQL, and Inquirer.js, combining backend technologies to manage data efficiently. Throughout the development of this project, important skills were honed in database design, SQL queries, and Node.js backend development.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Schema](#schema)
- [Seeds](#seeds)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribution](#contribution)
- [Questions](#questions)



## Installation

To install the Employee Management System, follow these steps:
1. Clone the repository to your local machine.
```sh
git clone git@github.com:andersonasprilla/Employee-Tracker.git
cd Employee-Tracker
```
1. Run npm install to install the necessary dependencies.
2. Ensure MySQL is installed on your system and you have access to create databases and tables.
3. Execute the schema.sql and seeds.sql in your MySQL database to create and seed the database.
4. Start the application by running node index.js.

Ensure you have Node.js and npm installed on your system to handle dependencies and run the project.

![Screenshot](/assets/Screenshot%20.png)

## Usage

After installation, the application can be started by executing:
```sh
node index.js
```

Follow the prompts to view or modify the employee database. Operations include viewing departments, roles, and employees, as well as adding departments, roles, employees, and updating employee roles.

## Schema

The database schema includes three tables:

* `department:` Contains department names.
* `role:` Contains job title, department, and salary for the role.
* `employee:` Contains employee names, roles, and managers.

## Seeds

Sample data for departments, roles, and employees are provided in seeds.sql to start with some data.

## Credits

This project was developed by [Luis Asprilla](https://www.linkedin.com/in/andersonasprilla/) . Special thanks to Node.js, MySQL, and Inquirer.js documentation.

## License
This project is licensed under the MIT License. For more information, please visit [here](https://opensource.org/licenses/MIT).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 
## Features

* Interactive command-line interface for managing employee information.
* View, add, and update departments, roles, and employees.
* Structured database schema for efficient data management.

## Contribution

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## Questions

If you have any questions about the repo, open an issue or contact me through my [LinkedIn](https://www.linkedin.com/in/andersonasprilla/) You can find more of my work at [GitHub](https://github.com/andersonasprilla).




