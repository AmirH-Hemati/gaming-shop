import express from "express";
import { cahngePassword, login, register } from "../controllers/auth.js";
import { auth } from "../middelware/auth.js";
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/changePassword", auth, cahngePassword);
export default router;
