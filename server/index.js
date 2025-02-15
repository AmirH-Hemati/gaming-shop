import express from "express";
import mongoose, { mongo } from "mongoose";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/product.js";
import paymentRouter from "./routes/payment.js";
import ordersRouter from "./routes/orders.js";
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
app.use("/api/user", userRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/orders" ,ordersRouter);
app.listen(1212, () => {
  console.log("listen on port 1212");
});

// async function createAdminAccount() {
//   const password = "123";
// const salt = await bcy.genSalt(12);
//   const hasedhPassword = await bcy.hash(password, salt);
//   const reslut = await User.create({
//     email: "admin",
//     userName: "admin",
//     password: hasedhPassword,
//     role: "admin",
//   });
//   console.log("succsusfully created account");
// }
// createAdminAccount();
