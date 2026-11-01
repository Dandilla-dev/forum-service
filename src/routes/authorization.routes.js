import {Router} from 'express';
import {ADMIN} from '../configuration/constants.js';
import {hasRole, isOwner, isOwnerOrHasRole} from '../middlewares/authorization.middleware.js';

const router = Router();
router.all('/account/user/:login/role/:role', hasRole(ADMIN));
router.patch('/account/user/:user', isOwner('user'));
router.delete('/account/user/:login', isOwnerOrHasRole('login', ADMIN));

export default router;