import { sendWelcomeMsg } from '@/lib/sendEmail';
import { formDataModel } from '@/schemas/formSchema';
import { NextResponse as res } from 'next/server';

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { code } = body;

    const user = await formDataModel.findOne({
      verificationCode: code,
    });

    if (!user) {
      return res.json(
        {
          message: 'Invalid verification code',
          success: false,
        },
        { status: 400 },
      );
    }

    if (user.isValidated) {
      return res.json(
        {
          message: 'Email already verified',
          success: false,
        },
        { status: 400 },
      );
    }

    user.isValidated = true;
    user.verificationCode = null;
    await user.save();

    try {
      await sendWelcomeMsg(user?.email);
    } catch (err) {
      console.error('Welcome email error:', err);
    }

    return res.json(
      {
        message: 'Email verified successfully',
        success: true,
      },
      { status: 200 },
    );
  } catch (err) {
    return res.json(
      {
        message: 'Internal server error',
        success: false,
      },
      { status: 500 },
    );
  }
};
