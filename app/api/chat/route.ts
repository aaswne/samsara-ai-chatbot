import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("GEMINI_API_KEY is missing");
      return NextResponse.json(
        { error: "GEMINI_API_KEY is missing in .env.local" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const userMessage = body.message;

    if (!userMessage || !userMessage.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
You are a helpful AI assistant inside a chatbot web app.

Follow these rules for every reply:
- Reply like ChatGPT: clean, natural, and easy to read
- Give the direct answer first
- Keep answers short unless the user asks for full detail
- Use short paragraphs
- Use bullet points only when helpful
- Avoid long introductions like "Sure" or "Here's a breakdown"
- Avoid repeating the same point
- For product or price questions, answer briefly and clearly
- If the answer depends on location, model, or condition, mention that in one short line
- Make the answer look good inside a chat bubble UI
- Prefer simple English

User question:
${userMessage}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const replyText = response.text?.trim() || "No response from AI";

    return NextResponse.json({
      reply: replyText,
    });
  } catch (error: any) {
    console.error("Gemini Error:", error);

    const status = error?.error?.code || error?.status || 500;
    const message =
      error?.error?.message ||
      error?.message ||
      "Failed to get AI response";

    if (status === 429) {
      return NextResponse.json(
        { error: "AI limit reached. Please wait a few seconds and try again." },
        { status: 429 }
      );
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}