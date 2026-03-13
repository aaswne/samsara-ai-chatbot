"use client";

import React, { useState } from "react";
import "./MainInput.css";

function MainInput({ messages, setMessages }) {
  const [question, setQuestion] = useState("");

  async function handleSend() {
    if (!question.trim()) return;

    const currentQuestion = question;

    const userMessage = {
      role: "user",
      text: currentQuestion,
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: currentQuestion }),
      });

      const data = await res.json();

      const aiMessage = {
        role: "ai",
        text: data.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Something went wrong.",
        },
      ]);
    }
  }

  return (
    <main className="main">
      <div className="chatArea">
        {messages.map((msg, index) => (
          <div key={index} className={msg.role === "user" ? "chat" : "aiChat"}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="bottom">
        <div className="inputDiv">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            className="input"
            type="text"
            placeholder="Ask anything..."
          />
          <button className="button" onClick={handleSend}>
            ↑
          </button>
        </div>

        <p className="p">
          Samsara AI isn’t perfect — double-check important information.
        </p>
      </div>
    </main>
  );
}

export default MainInput;