import * as postService from '../services/post.service.js';

export const createPost = async (req, res) => {
    const post = await postService.createPost(req.params.author, req.body);
    return res.status(201).json(post);
}

export const findPostById = async (req, res) => {
    try {
        const post = await postService.findPostById(req.params.postId);
        return res.json(post);
    } catch (e) {
        return res.status(404).json({
            "timestamp": new Date().toISOString(),
            "status": 404,
            "error": "Not Found",
            "message": e.message,
            "path": req.path
        });
    }
}

export const deletePost = async (req, res) => {
    try {
        const post = await postService.deletePost(req.params.postId);
        return res.json(post);
    } catch (e) {
        return res.status(404).json({
            "timestamp": new Date().toISOString(),
            "status": 404,
            "error": "Not Found",
            "message": e.message,
            "path": req.path
        });
    }
}

export const addLike = async (req, res) => {
    try {
        await postService.addLike(req.params.postId);
        return res.sendStatus(204)
    } catch (e) {
        return res.status(404).json({
            "timestamp": new Date().toISOString(),
            "status": 404,
            "error": "Not Found",
            "message": e.message,
            "path": req.path
        });
    }
}

export const findPostsByAuthor = async (req, res) => {
    return res.json(await postService.findPostsByAuthor(req.params.author));
}

export const addComment = async (req, res) => {
    try {
        const post = await postService.addComment(req.params.postId, req.params.commenter, req.body.message);
        return res.json(post);
    } catch (e) {
        return res.status(404).json({
            "timestamp": new Date().toISOString(),
            "status": 404,
            "error": "Not Found",
            "message": e.message,
            "path": req.path
        });
    }
}

export const findPostsByTags = async (req, res) => {
    let values = req.query.values;
    if (Array.isArray(req.query.values)) {
        values = req.query.values.join(',');
    }
    return res.json(await postService.findPostsByTags(values));
}

export const findPostsByPeriod = async (req, res) => {
    const {dateFrom, dateTo} = req.query;
    return res.json(await postService.findPostsByPeriod(dateFrom, dateTo));
}

export const updatePost = async (req, res) => {
    try {
        const post = await postService.updatePost(req.params.postId, req.body);
        return res.json(post);
    } catch (e) {
        return res.status(404).json({
            "timestamp": new Date().toISOString(),
            "status": 404,
            "error": "Not Found",
            "message": e.message,
            "path": req.path
        });
    }
}