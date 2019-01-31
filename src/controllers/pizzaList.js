// const pizzas = require('./../model/pizzaStatic');

const pizzaStatic = require('./../../public/pizzaStatic');
const pizzaDatabase = require('./../model/pizza');

const pizzaList = pizzaDatabase.listPizzas;

exports.get = (req, res) => {
  res.render('pizzaList', { pizzaStatic, pizzaList });
};
