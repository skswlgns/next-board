import { connectDB } from "@/utils/database";
import bcrypt from "bcrypt";

export default async function handler(req, rep) {
  const client = await connectDB;
  const db = client.db("next-master");

  if (req.method == "POST") {
    if (await db.collection("user").findOne({ name: req.body.name })) {
      return rep.status(500).json("이미 있는 아이디입니다.");
    } else if (
      req.body.name === "" ||
      req.body.password === "" ||
      req.body.email === ""
    ) {
      return rep.status(500).json("ID, Email and Password must be required.");
    } else if (await db.collection("user").findOne({ email: req.body.email })) {
      return rep.status(500).json("이미 존재하는 이메일입니다.");
    }
  }

  req.body.password = await bcrypt.hash(req.body.password, 10);
  req.body.admin = "false";
  db.collection("user").insertOne(req.body);
  return rep.status(200).json("가입완료");
}
