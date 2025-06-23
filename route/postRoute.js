const express = require('express');
const postRouter = express.Router();
const postController = require('../controllers/postController');

postRouter.get('/', postController.index);
postRouter.get('/create',postController.store);
postRouter.get('/:id', postController.show);

module.exports = postRouter;