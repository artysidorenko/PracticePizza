const pizzas = require('./../model/modelIndex');

exports.get = (req, res) => {
  res.render('pizzaList', { pizzas });
};
