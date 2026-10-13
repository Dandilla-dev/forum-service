import { Router } from "express";
import {createPost, findPostsByPeriod, deletePost, findPostsByAuthor,
    findPostsByTags, updatePost, findPostById, addLike, addComment}  from "../controllers/post.controller.js";


const router = Router();

router.post('/forum/post/:user', createPost);
router.get('/forum/post/:postId', findPostById);
router.patch('/forum/post/:postId/like', addLike);
router.get('/forum/posts/author/:user', findPostsByAuthor);
router.patch('/forum/post/:postId/comment/:commenter', addComment)
router.delete('/forum/post/:postId', deletePost)
router.get('/forum/posts/tags', findPostsByTags)
router.get('/forum/posts/period', findPostsByPeriod)
router.patch('/forum/post/:postId', updatePost);

export default router;