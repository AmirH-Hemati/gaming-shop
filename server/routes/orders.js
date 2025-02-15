import express from "express";
import { orders } from "../controllers/orders.js";
import { auth } from "../middelware/auth.js";
import { admin } from "../middelware/admin.js";
const router = express.Router();

router.get("/", auth, admin, orders);

export default router;
