"use client";

import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";
import { AnimatePresence } from "framer-motion";

export default function MenuBtn() {
  const [theme, setTheme] = useState("light");
  const [tabMenu, setTabMenu] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const handleMenuTab = () => {
    document.documentElement.classList.toggle("modal-open");
    setTabMenu((prev) => !prev);
  };

  return (
    <>
      <div
        className={`w-[40px] h-[40px] fixed top-[20px] left-[20px] inset-shadow-sm inset-shadow-indigo-500/50 rounded-full cursor-pointer flex items-center justify-center overflow-hidden
            ${theme === "dark" ? "bg-[#333]" : "bg-[#dfdfdf]"}
          `}
        onClick={() => handleMenuTab()}
      >
        <GiHamburgerMenu className="text-xl text-[#f37812]" />
      </div>
      <AnimatePresence>
        {tabMenu && <Menu handleMenuTab={handleMenuTab} />}
      </AnimatePresence>
    </>
  );
}
