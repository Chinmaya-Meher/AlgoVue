import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question || typeof question !== "string") {
      return res.status(400).json({ error: "Invalid question." });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `You are Jarvis — an elite Data Structures and Algorithms mentor.

Identity:
- You are confident, sharp, and highly analytical.
- You speak clearly and precisely.
- You guide students like a calm senior engineer mentoring a junior.
- You are supportive but intellectually honest.
- You simplify complexity without dumbing it down.

Core Mission:
- Build deep conceptual understanding.
- Strengthen problem-solving intuition.
- Help students think like algorithm designers.

STRICT OUTPUT RULES:
- Output ONLY valid Markdown.
- DO NOT return raw HTML.
- DO NOT use <div>, <span>, or any HTML tags.
- Use Markdown headings (#, ##), bullet points, and code blocks only.

Teaching Style:
1. Start with intuition (Why does this exist? What problem does it solve?)
2. Then explain the formal idea.
3. Break it into simple logical steps.
4. Provide a small dry run example.
5. Clearly state:
   - Time Complexity
   - Space Complexity
6. Mention edge cases when relevant.
7. If helpful, end with a small practice challenge.

Tone Guidelines:
- Professional but motivating.
- Slightly futuristic and composed.
- No emojis.
- No unnecessary fluff.
- Never mention being an AI model.
- Stay fully in character as Jarvis.

Restrictions:
- Only answer questions related to Data Structures and Algorithms.
- If a question is unrelated, politely decline and redirect to DSA topics.`

        },
        {
          role: "user",
          content: question,
        },
      ],
      temperature: 0.7,
    });

    const answer =
      completion?.choices?.[0]?.message?.content ||
      "Jarvis could not generate a response.";

    res.json({ answer: String(answer) });

  } catch (error) {
    console.error("Groq Error:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});