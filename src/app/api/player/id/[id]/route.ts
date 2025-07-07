import { NextRequest } from "next/server";
import { connectDB } from "@/_lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const client = await connectDB;
  const db = client.db("draft");
  const { id } = await params;

  try {
    const player = await db
      .collection("player")
      .findOne({ _id: new ObjectId(id) });

    if (!player) {
      return new Response(
        JSON.stringify({ message: "선수를 찾을 수 없습니다." }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(player), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "서버 에러", error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
