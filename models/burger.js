// * Inside `burger.js`, import `orm.js` into `burger.js`
// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
// * Export at the end of the `burger.js` file.

var orm = require('../config/orm');
var burger = {
    selectAll: function (cb) {

        //Display complete table data
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },

    //Insert one value in one specific column
    insertOne: function (cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function (res) {
            cb(res);
        });
    },

    //Update one value in one specific column, when the condition is met
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;