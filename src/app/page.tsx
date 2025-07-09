"use client";

import Logo from "@/_components/common/Logo";
import MenuList from "@/_components/common/MenuList";
import SearchBar from "@/_components/common/SearchBar";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <section className="max-w-[1240px] mx-auto py-[120px] w-[95%] lg:w-[95%]">
      <Logo />
      <SearchBar />
      <ul className="grid grid-cols-1 gap-8 w-full mt-[20px] md:grid-cols-2 lg:grid-cols-3">
        <MenuList category={"선수 목록"} />
        <MenuList category={"전술보드"} />
        <MenuList category={"드래프트"} />
        <MenuList category={"선수 티어메이커"} />
        {session?.user && <MenuList category="선수 등록" />}
      </ul>
    </section>
  );
}
