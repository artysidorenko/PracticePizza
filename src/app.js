const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

const controllers = require('./controllers/controllersIndex.js');
const handlebarsHelpers = require('./views/helpers/helpersIndex');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine(
  'hbs',
  handlebars({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    handlebarsHelpers,
  }),
);

app.use(controllers);
app.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = app;
