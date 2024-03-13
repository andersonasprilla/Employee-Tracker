USE employee_db;

SELECT * FROM department;
SELECT * FROM role;
SELECT id, title, salary FROM role;



SELECT role.id AS id, title, department.name AS department, salary
FROM role
LEFT JOIN department ON role.department_id = department.id;

UPDATE employee SET manager_id = 1 WHERE id = 2;
