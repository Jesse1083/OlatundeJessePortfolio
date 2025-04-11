import React, { useState, useEffect } from "react";
import Portfolio from "./Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="transition-colors duration-500">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-sm px-4 py-2 rounded shadow"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <Portfolio />
    </div>
  );
}

export default App;
