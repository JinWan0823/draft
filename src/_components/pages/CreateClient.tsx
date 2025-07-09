"use client";

import Logo from "@/_components/common/Logo";
import PlayerForm from "@/_components/create/PlayerForm";
import { useAlert } from "@/_context/AlertContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CreateClient() {
  const { status } = useSession();
  const { showAlert } = useAlert();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      showAlert("로그인이 필요합니다.");
      router.replace("/adm"); // history 스택에 남기지 않기위해 push 대신 사용
    }
  }, [status]);

  if (status === "loading") return null;

  if (status === "unauthenticated") return null;

  return (
    <section className="w-[1240px] mx-auto py-[120px]">
      <Logo />
      <PlayerForm mode="create" />
    </section>
  );
}
