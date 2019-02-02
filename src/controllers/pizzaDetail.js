// *****************************************************************************
// Controller for the pizza detail page
//
// ******************************************************************************

// Import instance of the database

const { Pizza } = require('./../model');

// Get request from the router

exports.get = (req, res) => {
  const reqPizzaName = req.params.pizza;
  return Pizza
    .findAll({
      where: {
        name: reqPizzaName,
      },
    })
    .then((data) => {
      const pizza = data[0].dataValues;
      res.render('pizzaDetail', { pizza });
    })
    .catch((error) => {
      res.render('serverError', { error });
      // eslint-disable-next-line no-console
      console.log(error);
    });
};
