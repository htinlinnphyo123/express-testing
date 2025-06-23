const express = require('express');
const homeRouter = express.Router();
const homeController = require('../controllers/homeController');

homeRouter.get('/', homeController.returnHome);

homeRouter.get('/about', (req, res) => {
    res.render('about');
});

module.exports = homeRouter;