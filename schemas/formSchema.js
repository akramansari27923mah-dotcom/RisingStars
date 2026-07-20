import mongoose from 'mongoose';

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
  age: {
    type: Number,
    trim: true,
    required: true,
  },
  country: {
    type: String,
    trim: true,
    required: true,
  },
  grade: {
    type: String,
    trim: true,
    required: true,
  },
  school: {
    type: String,
    trim: true,
    required: true,
  },
  timezone: {
    type: String,
    trim: true,
    required: true,
  },
  whatsapp: {
    type: Number,
    trim: true,
    required: true,
  },
  isValidated: {
    type: Boolean,
    default: false,
  },
  verificationCode: String,
});

export const formDataModel =
  mongoose?.models.formData || mongoose?.model('formData', formDataSchema);
