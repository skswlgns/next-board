import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const client = await connectDB;
  const db = client.db("next-master");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
