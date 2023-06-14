import { connectDB } from "@/utils/database";

export default async function Handler(req, res) {
  const client = await connectDB;
  const db = client.db("next-master");

  const payloads = await db
    .collection("comment")
    .find({ articleId: req.query.id })
    .toArray();

  return res.status(200).json(payloads);
}
