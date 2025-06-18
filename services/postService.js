const posts = [
    { id: 1, name: 'NAME 1', description: 'hello world 1' },
    { id: 2, name: 'NAME 2', description: 'hello world 2' },
    { id: 3, name: 'NAME 3', description: 'hello world 3' },
];

const getAllPosts = () => {
    return posts;
};

const getPostById = (id) => {
    return posts.find(post => post.id === id);
};

const getOtherPosts = (id) => {
    return posts.filter(post=> post.id!==id)
}

module.exports = {
    getAllPosts,
    getOtherPosts,
    getPostById,
};