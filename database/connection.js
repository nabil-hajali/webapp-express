const mysql2 = require('mysql2')
const connection = mysql2.createConnection({
    host:'localhost',
    user: 'root',
    password: 'password',
    database: 'web_app_movie',
})



connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database!');
})


module.exports = connection;
