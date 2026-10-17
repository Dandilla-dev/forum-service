import * as postRepository from '../repository/post.repository.js';

export const createPost = async (author, data) => {
   const tags = [...new Set(data.tags)];
   return await postRepository.createPost({author, ...data, tags});
};


export const deletePost = async (postId) => {
    const post = await postRepository.deletePost(postId);
    if(!post) {
        throw new Error(`Post with id ${postId} not found`);
    }
    return post;
}

 export const findPostById = async (postId) => {
    const post = await postRepository.findPostById(postId);
    if(!post) {
        throw new Error(`Post with id ${postId} not found`);
    }
    return post;
 }

 export const findPostsByTags = async (tagsString) => {
     //TODO
 }

 export const findPostsByAuthor= async (author) => {
    //TODO
 }

 export const updatePost = async (id, data) => {
     //TODO
 }

 export const addLike = async (id) => {
     //TODO
 }

 export const addComment = async (id, commenter, comment) => {
     //TODO
 }

 export const findPostsByPeriod = async (dateFrom, dateTo) => {
     //TODO
 }