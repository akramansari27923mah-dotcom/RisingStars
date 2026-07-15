import { chatWithCustomerBot } from "@/lib/groq";
import { NextResponse as res } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { prompt } = body;

    if (!prompt) {
      return res.json(
        {
          message: "Prompt is required",
          success: false,
        },
        { status: 401 },
      );
    }

    const aiReply = await chatWithCustomerBot(prompt);

    return res.json(
      {
        message: "Replied Successful",
        success: true,
        aiReply,
      },
      { status: 200 },
    );
  } catch (err) {
    return res.json(
      {
        message: "Internal server error",
        success: false,
      },
      { status: 500 },
    );
  }
};
