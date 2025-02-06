import express from "express";
import multer from "multer";
import path from "path";
import {
  createProduct,
  deleteProduct,
  product,
  products,
  updateProduct,
} from "../controllers/productControllers.js";
import { auth } from "../middelware/auth.js";
import { admin } from "../middelware/admin.js";
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const now = Date.now();
    cb(null, now + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
router.get("/", products);
router.get("/:id", product);
router.post(
  "/createProduct",
  auth,
  admin,
  upload.single("file"),
  createProduct
);
router.post("/edit/:id", auth, admin, upload.single("file"), updateProduct);
router.delete("/:id", deleteProduct);
export default router;
