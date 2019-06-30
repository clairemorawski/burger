// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
// * `selectAll()`
// * `insertOne()`
// * `updateOne()`
// * Export the ORM object in `module.exports`.


//Import mySQL Connection
var connection = require('../config/connection');

//Helper Functions
//1. Helper Function for SQL Syntax
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

//2. Helper Function to convert object key/value pairs to SQL syntax
function objtoSql(ob) {
    var arr = [];
    console.log('What is this object: ' + ob[0]);

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + '=' + value);
        }
    }
    return arr.toString();
}

//ORM Objects
var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            } else {
                cb(result);
            }
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = 'INSERT INTO ' + table;

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (table, objColsVals, condition, cb) {
        console.log('What is this: ' + objColsVals);
        var queryString = 'UPDATE ' + table;

        queryString += ' SET ';
        queryString += objtoSql(objColsVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

//Export ORM
module.exports = orm;