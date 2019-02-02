const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('./../config/config.json')[env];

const basename = path.basename(__filename);

const db = {};

let sequelize;

if (process.env.DATABASE_URL) {
// the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL,
    {
      dialect: 'postgres',
      protocol: 'postgres',
      port: 5432,
      host: '<heroku host>',
      logging: true, // false
    });
} else if (config.use_env_variable) {
  // the application is being run on the local machine
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
