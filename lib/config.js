const GROQ_API_KEY = process.env.GROQ_API_KEY;
const MONGO_URI = process.env.MONGO_URI;
if (!GROQ_API_KEY) {
  throw new Error("GROQ_API_KEY not found");
}
if (!MONGO_URI) {
  throw new Error("MONGO_URI not found");
}

export const config = {
  GROQ_API_KEY,
  MONGO_URI
};
