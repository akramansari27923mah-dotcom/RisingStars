import Groq from "groq-sdk";
import { config } from "./config";
import { systemPrompt } from "./systemPrompt";

const groq = new Groq({
  apiKey: config.GROQ_API_KEY,
});

export const chatWithCustomerBot = async (prompt) => {
  try {
    const messages = [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: prompt,
      },
    ];

    const callAi = async (model) => {
      return await Promise.race([
        groq.chat.completions.create({
          model,
          messages,
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 20000),
        ),
      ]);
    };

    try {
      const res = await callAi("llama-3.3-70b-versatile");
      return res.choices[0]?.message?.content || "";
    } catch (err) {
      try {
        console.log("Primary model failed, switching...");
        const res = await callAi("llama-3.1-8b-instant");
        return res.choices[0]?.message?.content || "";
      } catch (err) {
        console.log("Fallback also failed", err.message);
        return "Server is busy, please try again";
      }
    }
  } catch (err) {
    console.error(err.message);
    return "Server is busy, please try again";
  }
};
