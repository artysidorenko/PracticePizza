// *****************************************************************************
// model index.js - This file is used to initialise a Sequelize connection to
// the SQL database
//
// ******************************************************************************

// Main dependencies

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

// Import local configuration variables

const env = process.env.NODE_ENV || 'development';
const config = require('./../config/config.json')[env];

const basename = path.basename(__filename);
const db = {};

// Initialise Sequelize connection

let sequelize;
if (process.env.DATABASE_URL) {
// In this case the application is executed on Heroku ... using the user postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL,
    {
      dialect: 'postgres',
      protocol: 'postgres',
      port: 5432,
      host: 'ec2-54-243-223-245.compute-1.amazonaws.com',
      logging: true, // false
    });
} else if (config.use_env_variable) {
  // the application is being run on the local machine
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Parse js files in the current folder and import into the model

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

// Execute any specified associations

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
