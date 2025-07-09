import CreateClient from "@/_components/pages/CreateClient";
import { getMetaData } from "@/_lib/metadata";

export const metadata = getMetaData({ page: "create" });

export default function CreatePage() {
  return <CreateClient />;
}
