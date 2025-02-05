import express from "express";
import multer from "multer";
import path from "path";
import { createProduct, products } from "../controllers/productControllers.js";
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
router.get("/", products);
router.post("/createProducte", upload.single("file"), createProduct);

export default router;
