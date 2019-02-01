// *****************************************************************************
// Controller for the pizza detail page
//
// ******************************************************************************

// Import static information in json format (for hardcoded pizza data)

const pizzasStatic = require('./../../public/pizzaStatic');
const recipesStatic = require('./../../public/recipe');

// Import instance of the database (for user-generated pizza data)

const { Pizza } = require('./../model');

// Get request from the router

exports.get = (req, res) => {
  const reqPizzaName = req.params.pizza;
  // check if request title is included in the site's static resource
  if (pizzasStatic.map(elem => elem.name).includes(reqPizzaName)) {
    const pizza = pizzasStatic.filter(elem => elem.name === reqPizzaName)[0];
    const recipe = recipesStatic.filter(elem => elem.name === reqPizzaName)[0];
    // note: in this case there are two pizza objects
    // the pizza description and the recipe details
    return res.render('pizzaDetail', { pizza, recipe });
  }
  // if request title is not included in site resources
  // we query the SQL database
  return Pizza
    .findAll({
      where: {
        name: reqPizzaName,
      },
    })
    .then((data) => {
      const pizza = data[0].dataValues;
      // note: in this case there is only one pizza object from the SQL datatable
      // thus the renderer uses a different hbs page to parse it
      // due to the need to use a different photo and different variable logic
      // TODO: use hbs helper function and refactor to remove the need for two pages
      res.render('pizzaDetailDb', { pizza });
    })
    .catch((error) => {
      res.render('serverError', { error });
      // eslint-disable-next-line no-console
      console.log(error);
    });
};
