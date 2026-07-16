import mongoose from "mongoose";
import { config } from "@/lib/config";

export const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("DB CONNECTED SUCCESSFULLY");
  } catch (err) {
    console.error(err.message);
    console.log("DB CONNECTION FAILED ");
  }
};
