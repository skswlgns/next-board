import { connectDB } from "@/utils/database";

export default async function createBoard(req, res) {
  const client = await connectDB;
  const db = client.db("next-master");
  if (req == "GET") {
    res.status(400);
  } else {
    db.collection("post").insertOne({
      title: req.body.title,
      content: req.body.content,
      email: req.query.email,
    });
    res.redirect(302, "http://localhost:3000/list");
  }
}
