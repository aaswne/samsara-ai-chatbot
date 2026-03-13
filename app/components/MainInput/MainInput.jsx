"use client";

import React, { useState } from "react";
import "./MainInput.css";
import { useTheme } from "../../Context/ThemeContext"

function MainInput({ messages, setMessages ,  dropDown }) {
  const {darkMode} = useTheme()
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

      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }

      const aiMessage = {
        role: "ai",
        text: data.reply || "No response from AI",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong.";

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: errorMessage,
        },
      ]);
    }
  }

  return (
    <main className="main" style={{backgroundColor:darkMode?"white":"black",color:darkMode?"black":"white"}}>
      <div className={dropDown==true?"dropDown":"dropDownNone"}>
        <button className="dropBtn">LogOut</button>
        <button className="dropBtn">Help</button>
        <button className="dropBtn">Private</button>
      </div>
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
