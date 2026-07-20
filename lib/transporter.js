import nodemailer from 'nodemailer';
import { config } from './config';

// Create a transporter using SMTP
export const transporter = nodemailer.createTransport({
 service: "gmail",
  auth: {
    user: config.SMTP_USER,
    pass: config.SMTP_PASS,
  },
});
