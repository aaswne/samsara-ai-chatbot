import React from "react";
import "./Button.css";

function Button({ text, onClick, type = "button" }) {
  return (
    <button className="loginButton" type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;