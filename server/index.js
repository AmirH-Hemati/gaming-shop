import express from "express";
import mongoose, { mongo } from "mongoose";
import authRouter from "./routes/auth.js";
import productRouter from "./routes/product.js";
import cors from "cors";
const app = express();
mongoose
  .connect("mongodb://localhost:27017/gaming-shop")
  .then(() => {
    console.log("mongo db connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(
  cors({
    origin: ["http://192.168.1.4:5173", "http://localhost:5173"],
  })
);
app.use(express.json());
app.use(express.static("images"));
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.listen(1212, () => {
  console.log("listen on port 1212");
});
