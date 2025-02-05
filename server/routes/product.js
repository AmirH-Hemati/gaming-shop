import express from "express";
const router = express.Router();

router.get("/", products);
router.post("/createProducte", createProduct);

export default router;
