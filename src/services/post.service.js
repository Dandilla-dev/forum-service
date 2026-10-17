import * as postRepository from '../repository/post.repository.js';

export const createPost = async (author, data) => {
   const tags = [...new Set(data.tags)];
   return await postRepository.createPost({author, ...data, tags});
};


export const deletePost = async (id) => {
    //TODO
}

 export const findPostById = async (id) => {
     //TODO
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