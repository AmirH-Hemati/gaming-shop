import express from "express";
import multer from "multer";
import path from "path";
import {
  createProduct,
  deleteProduct,
  detailsProducts,
  getProduct,
  getProducts,
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
    cb(null, now + file.originalname);
  },
});
const upload = multer({ storage: storage });
router.get("/", getProducts);
router.get("/:id", getProduct);
router.post(
  "/createProduct",
  auth,
  admin,
  upload.fields([
    { name: "image", maxCount: 1 },   
    { name: "images", maxCount: 5 },   
  ]),
  createProduct
);
router.post("/edit/:id", auth, admin, upload.single("file"), updateProduct);
router.delete("/:id", deleteProduct);
router.post("/details", auth, detailsProducts);
export default router;
