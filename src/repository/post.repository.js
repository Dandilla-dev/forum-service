import Post from '../models/post.model.js';

export const createPost = async (postData) => {
    // const post = new Post(postData);
    // return post.save();
    return Post.create(postData);
}

export const findPostById = async (postId) => Post.findById(postId).exec();

export const deletePost = async (postId) => Post.findByIdAndDelete(postId).exec();

export const addLike = async (postId) => Post.findByIdAndUpdate(postId, { $inc: { likes: 1 } }, {returnDocument: 'after'}).exec();

export const findPostsByTags = async (tagsString) => Post.find({ tags: { $in: tagsString.split(',').map(tag => new RegExp(`^${tag}$`, 'i'))}}).exec();

export const findPostsByAuthor = async (user) => Post.find({author: new RegExp(`^${user}$`, 'i')}).exec();

export const updatePost = async (postId, data) => {
    const {title, tags, content} = data;
    const update = {};
    if (title) {
        update.title = title;
    }
    if (Array.isArray(tags) && tags.length > 0) {
        update.$addToSet = {tags: {$each: tags}};
    }
    if (content) {
        update.content = content;
    }
    return Post.findByIdAndUpdate(postId, update, {returnDocument: 'after'}).exec();
}

export const findPostsByPeriod = async (dateFrom, dateTo) => Post.find({dateCreated: {$gte: dateFrom, $lte: dateTo}}).exec();
