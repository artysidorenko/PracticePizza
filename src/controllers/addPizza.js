const { Pizza } = require('../model');

module.exports = {
  get(req, res) {
    res.render('addPizza');
  },
  addPizza(req, res) {
    return Pizza
      .create({
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
      })
      .then(pizza => res.status(201).send(pizza))
      .catch((error) => {
        res.status(400).send(`there was an error: ${error}`);
        console.log(error);
      });
  },
};

// exports.get = (req, res) => {
//   res.render('addPizza');
// };
