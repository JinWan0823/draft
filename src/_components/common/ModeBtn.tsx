"use client";

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
        className="w-[90px] h-[40px] fixed bottom-[20px] left-[20px] bg-[#333] rounded-full cursor-pointer"
        onClick={handleTheme}
      >
        <div
          className={`w-[38px] h-[38px] rounded-full absolute top-[1px] left-[1px] bg-white transition-transform duration-300 ${
            theme === "dark" ? "translate-x-[50px]" : "translate-x-0"
          }`}
        />
      </div>
      <p>{theme}</p>
    </>
  );
}
