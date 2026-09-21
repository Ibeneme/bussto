"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeColors {
  bg: string;
  shadeBg: string;
  text: string;
  primary: string;
  primaryShade: string;
  navy: string;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: ThemeColors;
}

const darkColors: ThemeColors = {
  bg: "#000000",
  shadeBg: "#121212",
  text: "#ffffff",
  primary: "#84cc16",
  primaryShade: "#a3e635",
  navy: "#1e3a8a",
};

const lightColors: ThemeColors = {
  bg: "#ffffff",
  shadeBg: "#f4f4f4",
  text: "#111111",
  primary: "#65a30d",
  primaryShade: "#84cc16",
  navy: "#1d4ed8",
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "bussto-theme";
const DEFAULT_THEME: Theme = "dark";

function getLocalStorageTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "dark" || saved === "light") return saved as Theme;
  return null;
}

function setLocalStorageTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, theme);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    const savedTheme = getLocalStorageTheme();
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setLocalStorageTheme(DEFAULT_THEME);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    setLocalStorageTheme(nextTheme);
  };

  const colors = theme === "dark" ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      <div
        style={{
          backgroundColor: colors.bg,
          color: colors.text,
          minHeight: "100vh",
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
