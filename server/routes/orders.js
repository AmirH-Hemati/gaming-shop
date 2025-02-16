import express from "express";
import { orders, myOrders, order } from "../controllers/orders.js";
import { auth } from "../middelware/auth.js";
import { admin } from "../middelware/admin.js";
const router = express.Router();

router.get("/", auth, admin, orders);
router.get("/:id", auth, admin, order);
router.get("/myOrders", auth, myOrders);
export default router;
