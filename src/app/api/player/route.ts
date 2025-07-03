import { connectDB } from "@/_lib/mongodb";
import { NextRequest } from "next/server";

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

export async function POST(req: NextRequest) {
  const client = await connectDB;
  const db = client.db("draft");

  try {
    const body = await req.json();
    const { name, position, subPosition, playerInfo, career } = body;

    if (!name || !position) {
      return Response.json({ message: "필수 항목 누락" }, { status: 400 });
    }

    const res = await db.collection("player").insertOne({
      name: name,
      position: position,
      subPosition: subPosition,
      note: playerInfo,
      achievements: career,
    });

    return Response.json(res, { status: 201 });
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
