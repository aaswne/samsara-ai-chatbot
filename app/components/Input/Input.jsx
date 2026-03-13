import React from "react";
import "./Input.css";

export default function Input({ type = "text", placeholder, value, onChange, name }) {
  return (
    <div className="loginInputDiv">
      <input
        className="loginInput"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}