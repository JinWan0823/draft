import { useState } from "react";
import { useAlert } from "@/_context/AlertContext";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function useAdm() {
  const [viewPwd, setViewPwd] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { showAlert } = useAlert();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      showAlert("아이디 또는 비밀번호를 확인하세요.");
    } else if (res?.ok) {
      router.push("/");
    }
  };

  return {
    viewPwd,
    setViewPwd,
    username,
    setUsername,
    password,
    setPassword,
    handleSubmit,
  };
}
