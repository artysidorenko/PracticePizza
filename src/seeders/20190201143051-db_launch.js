// eslint-disable-next-line
'use strict';

const startingValues = require('./../../public/starting_values');

const timestamp = new Date();
const seeder = startingValues.map((e) => {
  e.createdAt = timestamp;
  e.updatedAt = timestamp;
  e.author = 'admin';
  e.admin = true;
  return e;
});

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Pizzas', seeder, {}),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Pizzas', null, {}),
};
