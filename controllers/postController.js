const postService = require('../services/postService')
const postModel = require('../models/post')

async function index(req,res){
    const posts = await postService.getAllPosts();
    res.render('posts/index',{title:'<h1>HOME</h1>',posts: posts})
}

async function show(req, res) {
    const postId = req.params.id;

    const [post,otherPosts] = await Promise.all([
        postService.getPostById(postId),
        postService.getOtherPosts(postId)
    ])
    if (post) {
        res.render('posts/show', { post, otherPosts  });
    } else {
        res.status(404).render('errors/404');
    }
}

function store(req,res){
    const post = new postModel({
        title: 'How to make money online',
        content: 'Hello World',
        author:'Mg MG'
    })
    post.save();
    res.render('posts/index')
}
module.exports = {
    index,
    show,
    store
}