import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4n4D5jth4fm4GE7ut7lWW-04lnDO2OkD-sg&s",
  },
  role: { type: String, default: "user" },
  phoneNumber: { type: String },
  addresses: [
    {
      province: { type: String },
      city: { type: String },
      street: { type: String },
      postalCode: { type: String },
      phone: { type: String },
    },
  ],
  date: { type: Date, default: Date.now },
});
export default mongoose.model("User", userSchema);
