import express from "express";
import { me } from "../controllers/userController.js";
import { auth } from "../middelware/auth.js";
const router = express.Router();

router.get("/me", auth, me);
export default router;
