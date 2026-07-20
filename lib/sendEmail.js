import { transporter } from './transporter';
import {
  EMAIL_VERIFICATION_CODE,
  EMAIL_VERIFIED_TEMPLATE,
  RESEND_OTP_TEMPLATE,
} from './emailTemplate';

export const sendEmail = async (email, verificationCode) => {
  try {
    await transporter.sendMail({
      from: `officiallearnaxo@gmail.com`, // sender address
      to: email, // list of recipients
      subject: 'Email Verification Code', // subject line
      text: 'Hello world?', // plain text body
      html: EMAIL_VERIFICATION_CODE.replace('{OTP}', verificationCode), // HTML body
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const sendWelcomeMsg = async (email) => {
  try {
    await transporter.sendMail({
      from: `officiallearnaxo@gmail.com`,
      to: email,
      subject: 'Email Verified Successfully ', 
      text: 'Hello world?', 
      html: EMAIL_VERIFIED_TEMPLATE, 
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const reSendOtp = async (email, otp) => {
  try {
    await transporter.sendMail({
      from: `officiallearnaxo@gmail.com`, 
      to: email, 
      subject: 'Resend Otp ', 
      text: 'Hello world?', 
      html: RESEND_OTP_TEMPLATE.replace('{OTP}', otp),
    });
  } catch (err) {
    console.error(err.message);
  }
};
