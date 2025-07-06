import { connectDB } from "@/_lib/mongodb";
import { NextRequest } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

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

// export async function POST(req: NextRequest) {
//   const client = await connectDB;
//   const db = client.db("draft");

// try {
//   const body = await req.json();
//   const { name, position, subPosition, playerInfo, career } = body;

//   if (!name || !position) {
//     return Response.json({ message: "필수 항목 누락" }, { status: 400 });
//   }

//   const res = await db.collection("player").insertOne({
//     name: name,
//     position: position,
//     subPosition: subPosition,
//     note: playerInfo,
//     achievements: career,
//   });

//   return Response.json(res, { status: 201 });
// } catch (err) {
//   return Response.json({ message: err }, { status: 500 });
// }
// }

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("image") as File;
  const name = formData.get("name")?.toString();
  const position = formData.get("position")?.toString();
  const subPosition = formData.get("subPosition")?.toString();
  const playerInfo = formData.get("note")?.toString();
  const career = formData.getAll("achievements");

  if (!file || !file.type.startsWith("image/")) {
    return Response.json(
      { message: "이미지 파일만 업로드 가능합니다." },
      { status: 400 }
    );
  }
  //s3 업로드
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const s3 = new S3Client({
    region: "ap-northeast-2",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });
  const fileName = `${uuidv4()}-${file.name}`;
  const bucketName = "draft-player-image";

  const uploadCommand = new PutObjectCommand({
    Bucket: bucketName,
    Key: fileName,
    Body: buffer,
    ContentType: file.type,
  });

  await s3.send(uploadCommand);

  const imageUrl = `https://${bucketName}.s3.amazonaws.com/${fileName}`;

  const client = await connectDB;
  const db = client.db("draft");

  try {
    if (!name || !position) {
      return Response.json({ message: "필수 항목 누락" }, { status: 400 });
    }

    const res = await db.collection("player").insertOne({
      name: name,
      position: position,
      subPosition: subPosition,
      note: playerInfo,
      achievements: career,
      image: imageUrl,
    });

    return Response.json(res, { status: 201 });
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
