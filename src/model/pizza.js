
module.exports = (sequelize, DataTypes) => {
  const Pizza = sequelize.define('Pizza', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
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
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    },
    admin: {
      type: DataTypes.BOOLEAN,
    },
  }, {});
  /* eslint-disable-next-line no-unused-vars */
  Pizza.associate = (models) => {
    // associations can be defined here
  };
  return Pizza;
};

// TODO: add a column for 'author'
