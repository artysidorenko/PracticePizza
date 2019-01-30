// const pizzas = require('./../model/pizzaStatic');

const pizzas = require('./../../public/pizzaStatic');

exports.get = (req, res) => {
  res.render('pizzaList', { pizzas });
};
