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

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
    });

    return NextResponse.json({
      reply: response.text ?? "No response from AI",
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