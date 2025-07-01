import { connectDB } from "@/_lib/mongodb";

export async function GET(
  req: Request,
  { params }: { params: { name: string } }
) {
  const client = await connectDB;
  const db = client.db("draft");

  try {
    const player = await db.collection("player").findOne({ name: params.name });
    if (!player) {
      return Response.json(
        { message: "선수를 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    return Response.json(player);
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
