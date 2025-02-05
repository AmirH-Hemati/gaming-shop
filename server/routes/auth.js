import express from "express";
import { login, register } from "../controllers/auth.js";
const router = express.Router();

router.post("/login", login);
router.get("/test", (req, res) => {
  res.send("2222");
});
router.post("/register", register);
export default router;
