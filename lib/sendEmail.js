import { transporter } from './transporter';
import {
  EMAIL_VERIFICATION_CODE,
  EMAIL_VERIFIED_TEMPLATE,
  RESEND_OTP_TEMPLATE,
} from './emailTemplate';

export const sendEmail = async (email, verificationCode) => {
  try {
    const info = await transporter.sendMail({
      from: '"Learnaxo" <officiallearnaxo@gmail.com>',
      to: email,
      subject: 'Your Learnaxo verification code',
      text: `
Your Learnaxo verification code is:

${verificationCode}

This code will expire in 10 minutes.

If you didn't request this code, please ignore this email.

Team Learnaxo
      `,
      html: EMAIL_VERIFICATION_CODE.replace('{OTP}', verificationCode),
    });

    console.log('Verification email sent:', info.messageId);
    return info;
  } catch (err) {
    console.error('Email sending failed:', err);
    throw err;
  }
};

export const sendWelcomeMsg = async (email) => {
  try {
    await transporter.sendMail({
      from: '"Learnaxo" <officiallearnaxo@gmail.com>',
      to: email,
      subject: 'Welcome to Learnaxo! Your email has been verified',
      text: `
Hello,

Your email has been verified successfully.

Welcome to Learnaxo! 🎉

You can now log in and start learning.

Team Learnaxo
      `,
      html: EMAIL_VERIFIED_TEMPLATE,
    });

    console.log('Welcome email sent successfully');
  } catch (err) {
    console.error('Error sending welcome email:', err);
  }
};

export const reSendOtp = async (email, otp) => {
  try {
    const info = await transporter.sendMail({
      from: '"Learnaxo" <officiallearnaxo@gmail.com>',
      to: email,
      subject: 'Your new Learnaxo verification code',
      text: `
You requested a new verification code.

Your OTP is: ${otp}

This OTP will expire in 10 minutes.

If you didn't request this code, you can safely ignore this email.

Team Learnaxo
      `,
      html: RESEND_OTP_TEMPLATE.replace('{OTP}', otp),
    });
    return info;
  } catch (err) {
    console.error('Failed to send resend OTP email:', err);
    throw err;
  }
};
