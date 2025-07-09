import TacticsClient from "@/_components/pages/TacticsClient";
import { getMetaData } from "@/_lib/metadata";

export const metadata = getMetaData({ page: "tactics" });

export default function TacticsPage() {
  return <TacticsClient />;
}
