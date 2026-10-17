import { Router } from "express";
import {createPost, findPostsByPeriod, deletePost, findPostsByAuthor,
    findPostsByTags, updatePost, findPostById, addLike, addComment}  from "../controllers/post.controller.js";


const router = Router();

router.post('/post/:user', createPost);
router.get('/post/:postId', findPostById);
router.patch('/post/:postId/like', addLike);
router.get('/posts/author/:user', findPostsByAuthor);
router.patch('/post/:postId/comment/:commenter', addComment)
router.delete('/post/:postId', deletePost)
router.get('/posts/tags', findPostsByTags)
router.get('/posts/period', findPostsByPeriod)
router.patch('/post/:postId', updatePost);

export default router;