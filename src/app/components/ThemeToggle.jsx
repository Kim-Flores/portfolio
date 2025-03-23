"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    setDarkMode(theme === "dark");
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative flex items-center w-16 h-8 dark:bg-slate-900 dark:text-white bg-pink300"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FontAwesomeIcon icon={faMoon} className="text-white" size="lg" />
      <div className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"></div>
      <FontAwesomeIcon icon={faSun} className="text-white" size="lg" />
    </div>
  );
};

export default ThemeToggle;
