import DraftClient from "@/_components/pages/DraftClient";
import { getMetaData } from "@/_lib/metadata";

export const metadata = getMetaData({ page: "draft" });

export default function DraftPage() {
  return <DraftClient />;
}
