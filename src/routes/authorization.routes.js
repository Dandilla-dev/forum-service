import {Router} from 'express';
import {ADMIN} from '../configuration/constants.js';
import {hasRole, isOwner} from '../middlewares/authorization.middleware.js';

const router = Router();
router.all('/account/user/:login/role/:role', hasRole(ADMIN));
router.patch('/account/user/:user', isOwner('user'));

export default router;