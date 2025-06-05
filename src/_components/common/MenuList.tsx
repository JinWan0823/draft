"use client";

import Link from "next/link";
import { JSX } from "react";
import { BsClipboard, BsFillPeopleFill, BsHighlighter } from "react-icons/bs";
import { FaChalkboardUser } from "react-icons/fa6";
interface ListProps {
  category: string;
}

const categoryToPath: { [key: string]: string } = {
  "선수 목록": "players",
  전술보드: "tactics",
  드래프트: "draft",
  "선수 티어메이커": "tiermaker",
};

const categoryToIcon: { [key: string]: JSX.Element } = {
  "선수 목록": (
    <BsFillPeopleFill className="text-6xl transition-transform duration-300 ease-in-out group-hover:scale-110" />
  ),
  전술보드: (
    <FaChalkboardUser className="text-6xl transition-transform duration-300 ease-in-out group-hover:scale-110" />
  ),
  드래프트: (
    <BsClipboard className="text-6xl transition-transform duration-300 ease-in-out group-hover:scale-110" />
  ),
  "선수 티어메이커": (
    <BsHighlighter className="text-6xl transition-transform duration-300 ease-in-out group-hover:scale-110" />
  ),
};

export default function MenuList({ category }: ListProps) {
  const path = categoryToPath[category] || "";
  const IconComponent = categoryToIcon[category];
  return (
    <li
      className="h-50 bg-gray-200 text-[#f37812] transition-transform hover:-translate-y-4 ease-in rounded-md shadow-xl overflow-hidden relative
      after:content-[''] after:w-[0px] after:h-[4px] after:bg-[#f37812] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
      after:transition-all after:ease-in hover:after:w-full dark:bg-[#333]"
    >
      <Link
        href={`/${path}`}
        className="flex flex-col items-center justify-center w-full h-full group"
      >
        {IconComponent}
        <p className="text-xl font-bold mt-[10px]">{category}</p>
      </Link>
    </li>
  );
}
