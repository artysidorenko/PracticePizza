
module.exports = (sequelize, DataTypes) => {
  const Pizza = sequelize.define('Pizza', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: 'No description Provided',
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  /* eslint-disable-next-line no-unused-vars */
  Pizza.associate = (models) => {
    // associations can be defined here
  };
  return Pizza;
};
