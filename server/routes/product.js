import express from "express";
import { createProduct, products } from "../controllers/productControllers.js";
const router = express.Router();

router.get("/", products);
router.post("/createProducte", createProduct);

export default router;
