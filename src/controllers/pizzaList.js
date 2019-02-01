// *****************************************************************************
// Controller for the pizza list page
//
// ******************************************************************************

// Import  static information in json format (for hardcoded pizza data)

const pizzaStatic = require('./../../public/pizzaStatic');

// Import instance of the database (for user-generated pizza data)

const { Pizza } = require('./../model');

// Get request from router

exports.get = (req, res) => Pizza
  .all()
  .then(pizzaDatabase => res.render('pizzaList', { pizzaStatic, pizzaDatabase }));
