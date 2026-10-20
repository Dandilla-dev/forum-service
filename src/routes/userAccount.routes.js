import { Router } from "express";
import {createAccount, deleteAccount, updateAccount, addRole, deleteRole,
    getUser, userLogin, changePassword} from "../controllers/userAccount.controller.js";
import {auth, isAdmin, isOwnerOrAdmin} from "../middlewares/userAccount.middleware.js";

const router = Router();

router.post("/register", createAccount);
router.delete("/user/:user", auth, isOwnerOrAdmin, deleteAccount);
router.patch("/user/:user", auth, isOwnerOrAdmin,  updateAccount);
router.patch("/user/:user/role/:role", auth, isAdmin, addRole);
router.delete("/user/:user/role/:role", auth, isAdmin, deleteRole);
router.get("/user/:user", auth, getUser);
router.post("/login", auth, userLogin);
router.patch("/password", auth, changePassword);

export default router;