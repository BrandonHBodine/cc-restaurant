'use strict';
var express = require('express');
var router = express.Router();
var app = express();
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
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(3000, function () {
  console.log('Restaurants app listening on port 3000!');
});
