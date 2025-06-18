const postService = require('../services/postService')

function index(req,res){
    const posts = postService.getAllPosts();
    res.render('posts/index',{title:'<h1>HOME</h1>',posts: posts})
}

function show(req, res) {
    const postId = parseInt(req.params.id);
    const post = postService.getPostById(postId);
    const otherPosts = postService.getOtherPosts(postId);
    if (post) {
        res.render('posts/show', { post, otherPosts  });
    } else {
        res.status(404).render('errors/404');
    }
}

module.exports = {
    index,
    show
}