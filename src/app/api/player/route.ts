import { connectDB } from "@/_lib/mongodb";

export async function GET() {
  const client = await connectDB;
  const db = client.db("draft");
  const players = await db.collection("player").find().toArray();
  return Response.json(players);
}
