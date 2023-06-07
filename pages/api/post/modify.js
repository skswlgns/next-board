import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function handler(req, rep) {
  const client = await connectDB;
  const db = client.db("next-master");
  await db
    .collection("post")
    .updateOne(
      { _id: new ObjectId(req.body.id) },
      { $set: { title: req.body.title, content: req.body.content } }
    );
  rep.redirect(302, "http://localhost:3000/list");
}
