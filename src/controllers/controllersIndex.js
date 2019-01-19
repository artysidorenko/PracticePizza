const express = require('express');
const home = require('./home');
const about = require('./about');
const pizzaList = require('./pizzaList');
const addPizza = require('./addPizza');
const pizzaDetail = require('./pizzaDetail');

const router = express.Router();

router.get('/', home.get);
router.get('/about', about.get);
router.get('/pizza', pizzaList.get);
router.get('/pizza/:pizza', pizzaDetail.get);
router.get('/addPizza', addPizza.get);


module.exports = router;
