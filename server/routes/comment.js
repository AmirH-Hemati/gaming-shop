import express from "express";
import { AddComment, getComments } from "../controllers/comment.js";
import { auth } from "../middelware/auth.js";
const router = express.Router();

router.post("/addComment", auth, AddComment);
router.get("/comments/:id", getComments);
export default router;
