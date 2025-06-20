const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine','ejs');

const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/test';

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
    
const postController = require('../controllers/postController');
const homeController = require('../controllers/homeController');

app.get('/', homeController.returnHome);
app.get('/posts', postController.index);
app.get('/posts/create',postController.store);
app.get('/posts/:id', postController.show);

app.get('/about', (req, res) => {
    res.render('about');
});

app.use((req, res) => {
    console.log('404 coming');
    res.status(404);
    res.render('errors/404')
});

app.listen(3000);