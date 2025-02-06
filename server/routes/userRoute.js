import express from "express";
import { allUsers, me } from "../controllers/userController.js";
import { auth } from "../middelware/auth.js";
import { admin } from "../middelware/admin.js";
const router = express.Router();

router.get("/me", auth, me);

router.get("/users", auth, admin, allUsers);

export default router;
