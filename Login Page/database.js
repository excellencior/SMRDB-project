const mysql = require('mysql');

const connection = mysql.createConnection ({
    host: 'localhost',
    database: 'user_info_db',
    user: 'root',
    password:'mysqlDB34'
});

connection.connect((error) => {
    if (error) {
        throw error;
    }
    else {
        console.log("Database connected successfully");
    }
});

module.exports = connection;