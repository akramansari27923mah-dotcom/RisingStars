import { reSendOtp } from '@/lib/sendEmail';
import { formDataModel } from '@/schemas/formSchema';
import { NextResponse as res } from 'next/server';

export const POST = async (req) => {
  const body = await req.json();
  const { email } = body;
  try {
    const otp = Math.floor(100000 + Math.random() * 900000);

    const user = await formDataModel.findOne({ email: email });

    if (!user) {
      return res.json(
        {
          message: 'User not found',
          success: false,
        },
        { status: 404 },
      );
    }

    user.verificationCode = otp;
    await user.save();
    reSendOtp(user.email, otp)

    return res.json(
      {
        message: 'Resend Otp Successeded',
        success: true,
      },
      { status: 200 },
    );
  } catch (err) {
    return res.json(
      {
        message: 'User not found',
        success: false,
      },
      { status: 404 },
    );
  }
};
