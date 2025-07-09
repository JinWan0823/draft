import UpdateClient from "@/_components/pages/UpdateClient";
import { getMetaData } from "@/_lib/metadata";

export const metadata = getMetaData({ page: "update" });

export default function UpdatePage() {
  return <UpdateClient />;
}
