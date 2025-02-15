import express from "express";
import { payment, verify } from "../controllers/payment.js";
import { auth } from "../middelware/auth.js";
const router = express.Router();
router.post("/", auth, payment);
router.get("/verify", auth, verify);
export default router;
