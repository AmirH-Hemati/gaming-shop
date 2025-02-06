import express from "express";
import { me, users } from "../controllers/userController.js";
import { auth } from "../middelware/auth.js";
import { admin } from "../middelware/admin.js";
const router = express.Router();

router.get("/me", auth, me);

router.get("/users", admin, auth, users);
export default router;
