"use client";

import React, { useState } from "react";
import "./MainInput.css";
import { useTheme } from "../../Context/ThemeContext";
import { useRouter } from "next/navigation";
function MainInput({ messages, setMessages, dropDown, signOut }) {
  const { darkMode } = useTheme();
  const [question, setQuestion] = useState("");
  const route = useRouter()

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
    <main
      className="main"
      style={{
        backgroundColor: darkMode ? "white" : "black",
        color: darkMode ? "black" : "white",
      }}
    >
      <div className={dropDown == true ? "dropDown" : "dropDownNone"}>
        <button className="dropBtn" onClick={signOut}>
          Log out
        </button>
        <button onClick={()=>{
route.push("./help")
        }} className="dropBtn">How to use ?</button>
        <button className="dropBtn">Private</button>
      </div>
      <div className="chatArea">
        {messages.map((msg, index) => (
          <div key={index} className={msg.role === "user" ? "chat" : "aiChat"}>
            {msg.text}
          </div>
        ))}
      </div>

      <div
        className="bottom"
        style={{ background: darkMode ? "white" : "black" }}
      >
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
      </div>
    </main>
  );
}

export default MainInput;
