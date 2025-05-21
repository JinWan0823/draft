"use client";

import { FaRegSun, FaRegMoon } from "react-icons/fa";

import { useEffect, useState } from "react";

export default function ModeBtn() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <div
        className={`w-[80px] h-[40px] fixed bottom-[20px] left-[20px] inset-shadow-sm inset-shadow-indigo-500/50 rounded-full cursor-pointer overflow-hidden
            ${theme === "dark" ? "bg-[#333]" : "bg-[#dfdfdf]"}
          `}
        onClick={handleTheme}
      >
        <div
          className={`w-[38px] h-[38px] rounded-full absolute top-[1px] left-[1px] bg-white transition-transform duration-300 shadow-xl ${
            theme === "dark" ? "translate-x-[40px]" : "translate-x-0"
          }`}
        />
        <div className="flex justify-between p-[1px] items-center">
          <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
            <FaRegMoon className="text-xl text-[#7aadb3]" />
          </div>
          <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center">
            <FaRegSun className="text-xl text-[#f37812]" />
          </div>
        </div>
      </div>
      <p>{theme}</p>
    </>
  );
}
