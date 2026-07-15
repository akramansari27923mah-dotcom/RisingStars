const GROQ_API_KEY = process.env.GROQ_API_KEY;
if (!GROQ_API_KEY) {
  throw new Error("GROQ_API_KEY not found");
}

export const config = {
  GROQ_API_KEY,
};
