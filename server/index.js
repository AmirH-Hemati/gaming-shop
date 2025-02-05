import express from "express";
import mongoose, { mongo } from "mongoose";
import authRouter from "./routes/auth.js";
const app = express();
mongoose
  .connect("mongodb://localhost:27017/gaming-shop")
  .then(() => {
    console.log("mongo db connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/api/auth", authRouter);
app.listen(1212, () => {
  console.log("listen on port 1212");
});
