import express from "express";
import { allUsers, editUser, me } from "../controllers/userController.js";
import { auth } from "../middelware/auth.js";
import { admin } from "../middelware/admin.js";
import multer from "multer";
import path from "path";
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
router.get("/me", auth, me);

router.get("/users", auth, admin, allUsers);
router.post("/edit", auth, upload.single("file"), editUser);

export default router;
