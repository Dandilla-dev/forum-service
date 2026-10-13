import * as postService from '../services/post.service.js';

export const createPost = async (req, res) => {
    const post = await postService.createPost(req.params.user, req.body);
        return res.status(201).json(post);
}

export const deletePost = async (req, res) => {
    const post = await postService.deletePost(req.params.postId);
    if (post) {
        return res.json(post);
    } else {
        return res.status(404).json({
            "timestamp": new Date().toISOString(),
            "status": 404,
            "error": "Not Found",
            "message": `Post with id = ${req.params.postId} not found`,
            "path": req.originalUrl
        });
    }
}

export const findPostById = async (req, res) => {
    const post = await postService.findPostById(req.params.postId);
    if (post) {
        return res.json(post);
    } else {
        return res.status(404).send()
    }
}

export const findPostsByTags = async (req, res) => {
    const posts = await postService.findPostsByTags(req.query.values);
        return res.json(posts);

}

export const findPostsByAuthor= async (req, res) => {
    const posts = await postService.findPostsByAuthor(req.params.user);
        return res.json(posts);

}

export const updatePost = async (req, res) => {
    const updated = await postService.updatePost(req.params.postId, req.body);
    if (updated) {
        return res.json(updated);
    } else {
        return res.status(404).send()
    }
}

export const addLike = async (req, res) => {
    const success = await postService.addLike(req.params.postId);
    if (success) {
        return res.status(204).send();
    } else {
        return res.status(404).send()
    }
}

export const addComment = async (req, res) => {
   const post = await postService.addComment(req.params.postId, req.params.commenter, req.body);
   if (post) {
        return res.json(post);
    } else {
        return res.status(404).send()
    }
}

export const findPostsByPeriod = async (req, res) => {
    const posts = await postService.findPostsByPeriod(req.query.dateFrom, req.query.dateTo);
    return res.json(posts);
}