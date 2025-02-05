import express from "express";
import { me } from "../controllers/userController.js";
const router = express.Router();

router.get("/me", me);
export default router;
