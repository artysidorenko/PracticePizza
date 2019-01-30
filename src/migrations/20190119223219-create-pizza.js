
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Pizzas', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
    photoUrl: {
      type: Sequelize.STRING,
    },
    ingredients: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
    },
    instructions: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  /* eslint-disable-next-line no-unused-vars */
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Pizzas'),
};
