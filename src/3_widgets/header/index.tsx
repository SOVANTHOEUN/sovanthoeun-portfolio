"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FiBarChart2, FiLayers, FiBookOpen, FiBriefcase } from "react-icons/fi";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("Theme toggle mounted"); // Debugging log
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log(`Switching theme from ${theme} to ${newTheme}`); // Debugging log
    setTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex flex-col items-center pt-6 pb-4 bg-transparent">
      {/* Navigation Bar */}
      <nav className="w-full">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div style={{padding: "10px 30px"}} className="flex flex-col sm:flex-row items-center justify-between px-0 py-4 bg-white dark:bg-gray-50/5 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
            {/* Name on the left */}
            <span className="text-lg font-bold text-gray-900 dark:text-white select-none mb-2 sm:mb-0 sm:ml-2">Sovanthoeun</span>
            {/* Navigation items on the right or below on mobile */}
            <div className="flex gap-6 sm:gap-10 w-full sm:w-auto justify-center sm:justify-end">
            <a href="#projects" className="flex flex-col items-center text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-xs sm:text-sm">
                <FiLayers size={20} className="sm:w-6 sm:h-6 w-5 h-5" />
                <span className="mt-1 font-medium">Project</span>
              </a>
              <a href="#skills" className="flex flex-col items-center text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-xs sm:text-sm">
                <FiBarChart2 size={20} className="sm:w-6 sm:h-6 w-5 h-5" />
                <span className="mt-1 font-medium">Skill</span>
              </a>
              <a href="#experience" className="flex flex-col items-center text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-xs sm:text-sm">
                <FiBriefcase size={20} className="sm:w-6 sm:h-6 w-5 h-5" />
                <span className="mt-1 font-medium">Experience</span>
              </a>
              <a href="#blog" className="flex flex-col items-center text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-xs sm:text-sm">
                <FiBookOpen size={20} className="sm:w-6 sm:h-6 w-5 h-5" />
                <span className="mt-1 font-medium">Blog</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Fixed bottom-center theme toggle */}
      <div className="fixed left-1/2 bottom-6 -translate-x-1/2 z-50 flex items-center gap-3">
        <span className="text-gray-400">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
        <button
          aria-label="Toggle theme"
          className="relative inline-flex items-center h-7 w-14 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={handleThemeToggle}
        >
          <span
            className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform duration-300 ${theme === "dark" ? "translate-x-7" : "translate-x-1"}`}
          />
        </button>
        <span className="text-gray-400">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </div>
    </header>
  );
}