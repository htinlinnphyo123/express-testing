const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
app.set('view engine','ejs')

const postController = require('../controllers/postController');
const homeController = require('../controllers/homeController');

app.get('/',homeController.returnHome);
app.get('/posts',postController.getAllPosts);

app.get('/about',(req,res)=>{
    res.render('about');
})

app.listen(3000);