"use client";

import { useSession } from "next-auth/react";

export default function AdminBadge() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div className="fixed top-[20px] right-[20px] rounded-full px-4 py-1 bg-[#f37812] text-white font-bold border-2 border-white shadow-xl">
        <span>관리자 접속</span>
      </div>
    );
  }

  return null;
}
