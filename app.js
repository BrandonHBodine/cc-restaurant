'use strict';
var express = require('express');
var bcrypt = require('bcrypt');
var pg = require('pg');
var bodyParser = require('body-parser');

var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    port     : 5432,
    user     : 'Mundizzle',
    database : 'Mundizzle'
  }
});

var router = express.Router();
var app = express();

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Require router files
var restaurants = require('./routes/restaurants');

// Host the static files
app.use(express.static('public'));
// Use router files
app.use('/restaurants', restaurants);


// Set templating Engine to handle bars and let it use .html
app.set('views', './views');
app.set('view engine', 'hbs');


app.get('/', function (req, res) {
  // Connect to the database and retrive Restaurants
  knex('restaurants').select().then(function(rows) {
    console.log(rows);
    res.render('index', { restaurants: rows });
  });

});

app.listen(3000, function () {
  console.log('Restaurants app listening on port 3000!');
});
