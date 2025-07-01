import { connectDB } from "@/_lib/mongodb";

export async function GET() {
  const client = await connectDB;
  const db = client.db("draft");
  try {
    const players = await db.collection("player").find().toArray();
    if (!players) {
      return Response.json(
        { message: "등록된 선수가 없습니다." },
        { status: 404 }
      );
    }
    return Response.json(players);
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
