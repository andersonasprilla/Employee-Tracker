INSERT INTO department (name)
VALUES ('Engineering'),
       ('Finance'),
       ('Legal'),
       ('Sales');

INSERT INTO role (title, department_id, salary)
VALUES ('Sales Lead', 4, 100000.00),
       ('Salesperson', 4, 80000.00),
       ('Lead Engineer', 1, 150000.00),
       ('Software Engineer', 1, 120000.00),
       ('Account Manager', 2, 160000.00),
       ('Accountant', 2, 125000.00),
       ('Legal Team Lead', 3, 250000.00),
       ('Lawyer', 3, 190000.00);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('John', 'Doe', 4),
       ('Mike', 'Chan', 4),
       ('Ashley', 'Rodriguez', 1),
       ('Kevin', 'Tupik', 1),
       ('Kunal', 'Singh', 2),
       ('Malia', 'Brown', 2),
       ('Sarah', 'Lourd', 3),
       ('Tom', 'Allen', 3);


