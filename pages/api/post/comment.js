import { connectDB } from "@/utils/database";

export default async function Handler(req, res) {
  const client = await connectDB;
  const db = client.db("next-master");

  const body = JSON.parse(req.body);
  await db.collection("comment").insertOne(body);

  return res.status(200).json("삽입 완료");
}
