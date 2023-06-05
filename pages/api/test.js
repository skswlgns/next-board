import { connectDB } from "@/utils/database";

export default async function Test(요청, 응답) {
  const client = await connectDB;
  const db = client.db("next-master");
  const result = await db.collection("post").find().toArray();
  if (요청.method == "GET") {
    응답.status(200).json(result);
  } else {
    응답.status(500).json("GET 요청만 해라");
  }
}
