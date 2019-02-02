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
    author: req.body.author,
  })
  // send response to router
  .then(pizza => res.render('addSuccess', { pizza }))
  .catch((error) => {
    res.render('serverError', { error });
    // eslint-disable-next-line no-console
    console.log(error);
  });

module.exports = addPizza;
