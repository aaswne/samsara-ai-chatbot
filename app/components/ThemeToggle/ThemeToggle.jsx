"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import "./ThemeToggle.css";
import { useTheme } from "@/app/Context/ThemeContext";

export default function ThemeToggle() {

    const {darkMode,setDarkMode}=useTheme()

  return (
    <button onClick={()=>{
        setDarkMode(darkMode==true?false:true)
    }}
      className="darkModeButton"
    >
      {darkMode ? <MdLightMode color="white" /> : <MdDarkMode  /> }
    </button>
  );
}
