const GROQ_API_KEY = process.env.GROQ_API_KEY;
const MONGO_URI = process.env.MONGO_URI;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

if (!GROQ_API_KEY) {
  throw new Error('GROQ_API_KEY not found');
}
if (!MONGO_URI) {
  throw new Error('MONGO_URI not found');
}
if (!SMTP_PASS) {
  throw new Error('SMTP_PASS not found');
}
if (!SMTP_USER) {
  throw new Error('SMTP_USER not found');
}

export const config = {
  GROQ_API_KEY,
  MONGO_URI,
  SMTP_USER,
  SMTP_PASS,
};
