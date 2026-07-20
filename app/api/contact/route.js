import { NextResponse as res } from 'next/server';
import { formDataModel } from '@/schemas/formSchema';
import { connectDB } from '@/lib/dataBase';

export const POST = async (req) => {
  connectDB();
  try {
    const body = await req.json();
    const {
      fullname,
      email,
      phone,
      subject,
      message,
      age,
      country,
      grade,
      school,
      timezone,
      whatsapp,
    } = body;

    if (
      !fullname ||
      !email ||
      !subject ||
      !message ||
      !age ||
      !country ||
      !grade ||
      !school ||
      !timezone ||
      !whatsapp
    ) {
      return res.json(
        {
          message: 'All fields are required',
          success: false,
        },
        { status: 401 },
      );
    }

    const isEmailExist = await formDataModel.findOne({ email: email });

    if (isEmailExist) {
      return res.json(
        {
          message: 'Email already exist',
          success: false,
        },
        { status: 400 },
      );
    }

    const userData = await formDataModel.create({
      fullname,
      email,
      subject,
      phone,
      message,
      age,
      country,
      grade,
      school,
      timezone,
      whatsapp,
    });

    return res.json(
      {
        message: 'Form fill Successed',
        success: true,
        user: userData,
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
