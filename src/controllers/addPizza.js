// *****************************************************************************
// Controller for the add pizza page
//
// ******************************************************************************

// Import database

const { Pizza } = require('../model');

const addPizza = {};

addPizza.get = (req, res) => {
  res.render('addPizza');
};


addPizza.post = (req, res) => Pizza
  // build the SQL INSERT statement using req params
  .create({
    name: req.body.name,
    description: req.body.description,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  })
  // send response to router
  .then(pizza => res.status(201).send(pizza))
  .catch((error) => {
    res.status(400).send(`there was an error: ${error}`);
    console.log(error);
  });

module.exports = addPizza;
