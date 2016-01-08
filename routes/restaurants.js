'use strict';
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'Mundizzle',
    database: 'Mundizzle'
  }
});

// define the home page route
router.get('/add', function(req, res) {
  res.render('addrestaurant', {});
});

// define the home page route
router.post('/add', function(req, res) {
  console.log(req.body);
  knex('restaurants').insert(req.body).then(
    res.redirect('/')
  );
});

module.exports = router;
