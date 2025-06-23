const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine','ejs');

//middleware
const trackRequest = require('../middleware/trackRequest')
app.use(trackRequest);

//router
const postRouter = require('../route/postRoute');
const homeRouter = require('../route/homeRoute');
app.use('/',homeRouter);
app.use('/posts',postRouter);

app.use((req, res) => {
    console.log('404 coming');
    res.status(404);
    res.render('errors/404')
});

module.exports = app;