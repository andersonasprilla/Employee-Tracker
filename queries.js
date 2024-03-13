const db = require('./server')


const queries = (choices) => {
    switch (choices) {
        case 'View All Departments':
            // Query database
            db.query('SELECT * FROM department', function (err, results) {
                console.log(results);
            });
    }
}

module.exports = queries;