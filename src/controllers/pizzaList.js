// *****************************************************************************
// Controller for the pizza list page
//
// ******************************************************************************

// Import instance of the database

const { Pizza } = require('./../model');

// Get request from router

exports.get = (req, res) => Pizza
  .all()
  .then(pizzaDatabase => res.render('pizzaList', { pizzaDatabase }));
