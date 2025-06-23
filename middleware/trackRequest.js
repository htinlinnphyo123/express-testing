const trackRequest = (req,res,next) => {
    console.log(req.host);
    next();
}
module.exports = trackRequest;