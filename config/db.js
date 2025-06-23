const mongoose = require("mongoose");

const mongoURI = 'mongodb://localhost:27017/test';

const connectMongoDB = async () =>{
    try{
        await mongoose.connect(mongoURI)
    }catch(err){
        console.log(err);
        throw err;
    }
}

module.exports = connectMongoDB;