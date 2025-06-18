function getAllPosts(req,res){
    const posts = [
        { id:1 , name: 'NAME 1', description: 'hello world'},
        { id:2 , name: 'NAME 2', description: 'hello world'},
        { id:3 , name: 'NAME 3', description: 'hello world'},
    ]
    res.render('index',{title:'<h1>HOME</h1>',posts: posts})
}

module.exports = {
    getAllPosts
}