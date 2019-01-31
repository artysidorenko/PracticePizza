const { Pizza } = require('./../model');
const pizzaStatic = require('./../../public/pizzaStatic');

const pizzaList = {};

pizzaList.get = (req, res) => Pizza
  .all()
  .then(pizzaDatabase => res.render('pizzaList', { pizzaStatic, pizzaDatabase }));

module.exports = pizzaList;
