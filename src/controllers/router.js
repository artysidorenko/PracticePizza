// *****************************************************************************
// Main application router
//
// ******************************************************************************

// import individual page controllers

const express = require('express');
const pizzaList = require('./pizzaList');
const addPizza = require('./addPizza');
const pizzaDetail = require('./pizzaDetail');

// initialise Express router

const router = express.Router();

// Routing functions

router.get('/', (req, res) => res.render('home'));
router.get('/about', (req, res) => res.render('about'));
router.get('/pizza', pizzaList.get);
router.get('/pizza/:pizza', pizzaDetail.get);
router.get('/addPizza', addPizza.get);

router.post('/addPizza', addPizza.post);

module.exports = router;
