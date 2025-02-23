import express from "express";
import {
  orders,
  myOrders,
  order,
  updateOrder,
  myOrder,
} from "../controllers/orders.js";
import { auth } from "../middelware/auth.js";
import { admin } from "../middelware/admin.js";
const router = express.Router();

router.get("/", auth, admin, orders);
router.get("/myOrders", auth, myOrders);
router.get("/myOrders/:id", auth, myOrder);
router.get("/:id", auth, admin, order);
router.put("/:id", auth, admin, updateOrder);
export default router;
