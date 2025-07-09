import TierMakerClient from "@/_components/pages/TierMakerClient";
import { getMetaData } from "@/_lib/metadata";

export const metadata = getMetaData({ page: "tiermaker" });
export default function TierMaker() {
  return <TierMakerClient />;
}
