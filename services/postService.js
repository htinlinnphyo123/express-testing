const blogModel = require('../models/post');

const getAllPosts = async () => {
    return await blogModel.find();
};

const getPostById = async (id) => {
    return await blogModel.findById(id);
};

const getOtherPosts = async (id) => {
    return await blogModel.find({ _id: { $ne: id } }); 
};

module.exports = {
    getAllPosts,
    getOtherPosts,
    getPostById,
};
