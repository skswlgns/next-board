import { connectDB } from "@/utils/database";

export default async function handler(req, rep) {
  const client = await connectDB;
  const db = client.db("next-master");

  if (await db.collection("test").findOne({ name: req.body.name })) {
    return rep.status(500).json("이미 있는 아이디입니다.").redirect("/join");
  } else if (req.body.name === "" || req.body.password === "") {
    return rep.status(500).json("ID and Password must be required.");
  }
  db.collection("test").insertOne(req.body);
  return rep.status(200).json("가입완료");
}
