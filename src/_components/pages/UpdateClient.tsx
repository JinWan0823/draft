"use client";

import Logo from "@/_components/common/Logo";
import PlayerForm from "@/_components/create/PlayerForm";
import { useAlert } from "@/_context/AlertContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function UpdateClient() {
  const { status } = useSession();
  const { showAlert } = useAlert();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      showAlert("로그인이 필요합니다.");
      router.replace("/adm");
    }
  }, [status]);

  if (status === "loading") return null;

  if (status === "unauthenticated") return null;

  return (
    <section className="w-[1240px] mx-auto py-[120px]">
      <Logo />
      <PlayerForm mode={"edit"} />
    </section>
  );
}
