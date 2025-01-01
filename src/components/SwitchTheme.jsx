"use client";
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function SwitchTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("dark-mode") === "true";
    setIsDarkMode(storedDarkMode);
    document.documentElement.classList.toggle("dark", storedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("dark-mode", newMode);
      return newMode;
    });
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <p className="text-sm whitespace-nowrap">Switch Theme</p>
      <div
        id="toggle-dark-mode"
        className={`bg-mainColor rounded-full p-2 w-16 flex items-center justify-between cursor-pointer relative transition-all duration-300 ${
          isDarkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
        onClick={toggleDarkMode}
      >
        <Sun
          id="sun-icon"
          className={`w-4 h-4 text-black transition-opacity duration-300 ${
            isDarkMode ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        />
        <Moon
          id="moon-icon"
          className={`w-4 h-4 text-black transition-opacity duration-300 ${
            isDarkMode ? "opacity-100" : "opacity-100 pointer-events-none"
          }`}
        />
      </div>
    </div>
  );
}
