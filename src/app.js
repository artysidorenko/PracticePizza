// *****************************************************************************
// app.js - This file is the main starting point for the Node/Express server.
//
// ******************************************************************************

// Main dependencies

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const helpers = require('./views/helpers/index');

// Initialise Express

const app = express();

// Express middleware for parsing json

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express built-in automatic router for static directory

app.use(express.static(path.join(__dirname, '..', 'public')));

// Initialise Handlebars view builder

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  handlebars({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers,
  }),
);

// Import Controllers

const controllers = require('./controllers/router.js');

// Initialise controllers and middleware for handling 404 and 500 errors

app.use(controllers);
app.use((req, res) => {
  res.status(404).render('notFoundError');
});
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).render('serverError');
  console.log(err);
});

// Export Express App (for use in index.js entry point)

app.set('port', process.env.PORT || 3000);

module.exports = app;
