import Post from '../models/post.model.js';

export const createPost = async (postData) => {
    // const post = new Post(postData);
    // return post.save();
    return Post.create(postData);
}

export const findPostById = async (postId) => Post.findById(postId).exec();

export const deletePost = async (postId) => Post.findByIdAndDelete(postId).exec();