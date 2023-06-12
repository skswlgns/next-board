import { connectDB } from "@/utils/database";

export default async function createBoard(request, response) {
  const client = await connectDB;
  const db = client.db("next-master");

  if (request == "GET") {
    response.status(400);
  } else {
    db.collection("post").insertOne({
      title: request.body.title,
      content: request.body.content,
    });
    response.redirect(302, "http://localhost:3000/list");
  }
}
