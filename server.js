//Dependencies to get server up & running
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

//PORT
var PORT = process.env.PORT || 3000;

//Express
var app = express();
//console.log(app)

//Using Static Folder
app.use(express.static('public'));

//Using bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Using Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Declaring Routes
var routes = require('./controllers/burgers_controller');
app.use(routes);

//Start Express Server
app.listen(PORT, function () {
    console.log('Server is up & running on port: ' + PORT);
});