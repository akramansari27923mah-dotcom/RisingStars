import mongoose from "mongoose";

const formDataSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  phone: {
    type: Number,
    default: null,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    trim: true,
    required: true,
  },
});

export const formDataModel =
  mongoose?.models.formData || mongoose?.model("formData", formDataSchema);
