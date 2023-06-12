import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function handler(req, rep) {
  const client = await connectDB;
  //   const id = new ObjectId(req.body);
  const id = new ObjectId(req.query.id);
  const db = client.db("next-master");
  db.collection("post").deleteOne({ _id: id });
  return rep.status(200).json("삭제 완료");
}
