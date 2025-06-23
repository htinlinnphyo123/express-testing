function returnHome(req,res){
    res.render('index',{title:'Home'});
}

module.exports = {
    returnHome
}