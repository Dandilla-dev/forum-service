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

 export const findPostsByTags = async (tagsString) => await postRepository.findPostsByTags(tagsString);

 export const findPostsByAuthor= async (user) => await postRepository.findPostsByAuthor(user);

 export const updatePost = async (postId, data) =>  {
     const post = await postRepository.updatePost(postId, data);
     if(!post) {
         throw new Error(`Post with id ${postId} not found`);
     }
     return post;
 }

 export const addLike = async (postId) => {
     const post = await postRepository.addLike(postId);
     if(!post) {
         throw new Error(`Post with id ${postId} not found`);
     }
     return post;
 }

 export const addComment = async (id, commenter, comment) => {
     //TODO
 }

 export const findPostsByPeriod = async (dateFrom, dateTo) => await postRepository.findPostsByPeriod(dateFrom, dateTo);