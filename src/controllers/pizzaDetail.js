const pizzas = require('./../../public/pizzaStatic');
const recipes = require('./../../public/recipe');

exports.get = (req, res) => {
  const reqPizzaName = req.params.pizza;
  const pizzaNames = pizzas.map(elem => elem.name);
  if (pizzaNames.includes(reqPizzaName)) {
    const pizza = pizzas.filter(elem => elem.name === reqPizzaName)[0];
    const recipe = recipes.filter(elem => elem.name === reqPizzaName)[0];
    res.render('pizzaDetail', { pizza, recipe });
  }

  // next();
};
