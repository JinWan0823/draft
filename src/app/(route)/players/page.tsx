import PlayersClient from "@/_components/pages/PlayersClient";
import { getMetaData } from "@/_lib/metadata";

export const metadata = getMetaData({ page: "players" });

export default function PlayersPage() {
  return <PlayersClient />;
}
