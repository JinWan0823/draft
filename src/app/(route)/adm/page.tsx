import LoginClient from "@/_components/pages/LoginClient";
import { getMetaData } from "@/_lib/metadata";

export const metadata = getMetaData({ page: "adm" });

export default function LoginPage() {
  return <LoginClient />;
}
