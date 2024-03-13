USE employee_db;

SELECT * FROM department;

SELECT roles.id as id , title, name as department, salary FROM roles
LEFT JOIN department ON role.department_id=department.id;
