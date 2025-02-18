import express from "express";
import { AddComment } from "../controllers/comment.js";
import { auth } from "../middelware/auth.js";
const router = express.Router();

router.post("/", auth, AddComment);
export default router;
