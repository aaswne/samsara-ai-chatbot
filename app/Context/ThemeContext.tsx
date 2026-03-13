"use client";

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}