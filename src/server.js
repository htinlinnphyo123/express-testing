const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine','ejs');

const postController = require('../controllers/postController');
const homeController = require('../controllers/homeController');

app.get('/', homeController.returnHome);
app.get('/posts', postController.index);
app.get('/posts/:id', postController.show);

app.get('/about', (req, res) => {
    res.render('about');
});

app.use((req, res) => {
    res.status(404);
    res.render('errors/404')
});

app.listen(3000);