// 3. Inside the `burgers_controller.js` file, import the following:
//    * Express
//    * `burger.js`
// 4. Create the `router` for the app, and export the `router` at the end of your file.

//Require Dependencies
var express = require('express');
var router = express.Router();

//Require Model
var burger = require('../models/burger');

//Get Route
router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        var exphbsObject = {
            burger: data
        };
        res.render('index', exphbsObject);
    });
});

//Post Route
router.post('/api/burgers', function (req, res) {
    burger.insertOne(
        ['burger_name', 'devoured'],
        [req.body.name, req.body.devoured],
        function (result) {
            res.json({ id: result.insertId });
        }
    );
});

//Put Route
router.put('/api/burgers/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;
    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function (result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    );
});

//Export Router
module.exports = router;