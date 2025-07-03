"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminBadge() {
  const { data: session } = useSession();

  const router = useRouter();

  const handleLogout = async () => {
    const logout = confirm("로그아웃 하시겠습니까?");

    // if (logout) {
    //   signOut({ callbackUrl: "/" });
    // }
    if (!logout) return;

    await signOut({ redirect: false });
    router.push("/");
  };

  if (session?.user) {
    return (
      <button
        onClick={handleLogout}
        className="fixed top-[20px] right-[20px] rounded-full px-4 py-1 bg-[#f37812] text-white font-bold border-2 border-white shadow-xl"
      >
        관리자 로그아웃
      </button>
    );
  }

  return null;
}
