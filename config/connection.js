// //Code to connect node to mysql
// export createConnection

var dotenv = require('dotenv');
dotenv.config();

//mySQL Dependency
var mysql = require('mysql');
var { DB_USER, DB_PASS, DB_NAME } = process.env;

//Creating mySQL connection
var config = {
    port: 3000,
    host: 'localhost',
    user: DB_USER,
    pass: DB_PASS,
    database: DB_NAME
};

var connection;
var host;

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
    host = 'JAWSDB';
} else {
    connection = mysql.createConnection(config);
    host = 'localhost';
}

connection.connect(function (err) {
    if (err) {
        console.log('Error connecting: ' + err.stack);
        return;
    } else {
        console.log('Connection on ' + host);
    }
});

//Export Connection
module.exports = connection;