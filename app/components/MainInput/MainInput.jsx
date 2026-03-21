"use client";

import React, { useState } from "react";
import "./MainInput.css";
import { useTheme } from "../../Context/ThemeContext";
import { useRouter } from "next/navigation";

function MainInput({ messages, setMessages, dropDown, signOut }) {
  const { darkMode } = useTheme();
  const [question, setQuestion] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const theme = darkMode
    ? {
        mainBg: "#f8fafc",
        mainText: "#0f172a",
        bottomBg: "#f8fafc",
        inputBg: "rgba(15, 23, 42, 0.06)",
        inputBorder: "rgba(15, 23, 42, 0.12)",
        bubbleUserBg: "rgba(59, 130, 246, 0.14)",
        bubbleUserBorder: "rgba(59, 130, 246, 0.28)",
        bubbleAiBg: "rgba(15, 23, 42, 0.06)",
        bubbleAiBorder: "rgba(15, 23, 42, 0.12)",
        buttonBg: "rgba(59, 130, 246, 0.18)",
        dropBg: "#ffffff",
        dropBorder: "rgba(15, 23, 42, 0.08)",
        dropHover: "rgba(15, 23, 42, 0.06)",
        shadow: "0 4px 18px rgba(15, 23, 42, 0.08)",
      }
    : {
        mainBg: "#020617",
        mainText: "#e5e7eb",
        bottomBg: "#020617",
        inputBg: "rgba(255, 255, 255, 0.08)",
        inputBorder: "rgba(255, 255, 255, 0.12)",
        bubbleUserBg: "rgba(59, 130, 246, 0.18)",
        bubbleUserBorder: "rgba(59, 130, 246, 0.32)",
        bubbleAiBg: "rgba(255, 255, 255, 0.07)",
        bubbleAiBorder: "rgba(255, 255, 255, 0.12)",
        buttonBg: "rgba(59, 130, 246, 0.24)",
        dropBg: "#111827",
        dropBorder: "rgba(255, 255, 255, 0.08)",
        dropHover: "rgba(255, 255, 255, 0.08)",
        shadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
      };

  async function handleSend() {
    if (!question.trim()) return;

    const currentQuestion = question;

    const userMessage = {
      role: "user",
      text: currentQuestion,
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setError("");

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

      setError(errorMessage);

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
        backgroundColor: theme.mainBg,
        color: theme.mainText,
      }}
    >
      <div
        className={dropDown ? "dropDown" : "dropDownNone"}
        style={
          dropDown
            ? {
                background: theme.dropBg,
                border: `1px solid ${theme.dropBorder}`,
                boxShadow: theme.shadow,
                color: theme.mainText,
              }
            : undefined
        }
      >
        <button
          className="dropBtn"
          onClick={signOut}
          style={{ color: theme.mainText }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = theme.dropHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          Log out
        </button>

        <button
          onClick={() => {
            router.push("/help");
          }}
          className="dropBtn"
          style={{ color: theme.mainText }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = theme.dropHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          How to use?
        </button>

        <button
          onClick={() => {
            router.push("/maintenance");
          }}
          className="dropBtn"
          style={{ color: theme.mainText }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = theme.dropHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          Private
        </button>
      </div>

      <div className="chatArea">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.role === "user" ? "chat" : "aiChat"}
            style={{
              color: theme.mainText,
              background:
                msg.role === "user" ? theme.bubbleUserBg : theme.bubbleAiBg,
              border: `1px solid ${
                msg.role === "user"
                  ? theme.bubbleUserBorder
                  : theme.bubbleAiBorder
              }`,
            }}
          >
            {msg.text}
          </div>
        ))}

        {error && (
          <div
            className="aiChat"
            style={{
              color: theme.mainText,
              background: theme.bubbleAiBg,
              border: `1px solid ${theme.bubbleAiBorder}`,
            }}
          >
            {error}
          </div>
        )}
      </div>

      <div
        className="bottom"
        style={{
          background: theme.bottomBg,
        }}
      >
        <div
          className="inputDiv"
          style={{
            background: theme.inputBg,
            border: `1px solid ${theme.inputBorder}`,
            boxShadow: theme.shadow,
          }}
        >
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
            style={{
              color: theme.mainText,
            }}
          />

          <button
            className="button"
            onClick={handleSend}
            style={{
              background: theme.buttonBg,
              color: theme.mainText,
            }}
          >
            ↑
          </button>
        </div>
      </div>
    </main>
  );
}

export default MainInput;