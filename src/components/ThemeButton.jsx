"use client";
import { useState } from "react";

const ThemeButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveChange = () => {
    setIsActive((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isActive);
    document.documentElement.classList.toggle("light", isActive);
  };

  return (
    <button
      onClick={handleActiveChange}
      className="flex items-center gap-3 relative p-1.5 bg-white border rounded-full transition-colors duration-200 dark:bg-white/10 dark:border-white/10"
    >
      {/* Active Circle Icon */}
      <span
        style={{ transform: `translateX(${isActive ? 0 : 32}px)` }}
        className="absolute z-0 left-0.5 size-7 bg-brand-light rounded-full transition-transform duration-200"
      />

      {/* Moon Icon */}
      <svg
        fill="none"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={`z-10 size-5 transition-colors duration-200 ${
          isActive ? "text-brand-default" : "text-brand-dark dark:text-white"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        />
      </svg>

      {/* Sun Icon */}
      <svg
        fill="none"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={`z-10 size-5 transition-colors duration-200 ${
          isActive ? "text-brand-dark dark:text-white" : "text-brand-default"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    </button>
  );
};

export default ThemeButton;
