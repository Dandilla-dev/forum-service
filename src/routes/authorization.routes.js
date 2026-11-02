import {Router} from 'express';
import {ADMIN, MODERATOR} from '../configuration/constants.js';
import {
    hasRole,
    isOwner,
    isOwnerOrHasRole,
    checkPostOwner,
    isPostOwnerOrHasRole
} from '../middlewares/authorization.middleware.js';

const router = Router();
router.all('/account/user/:login/role/:role', hasRole(ADMIN));
router.patch('/account/user/:user', isOwner('user'));
router.delete('/account/user/:login', isOwnerOrHasRole('login', ADMIN));
router.post('/forum/post/:author', isOwner('author'))
router.patch('/forum/post/:id/comment/:commenter', isOwner('commenter'))
router.patch('/forum/post/:id', checkPostOwner)
router.delete('/forum/post/:id', isPostOwnerOrHasRole(MODERATOR))

export default router;