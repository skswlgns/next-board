import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import Link from "next/link";

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
      <Link href={`/modify/${result._id}`}>
        <button>수정</button>
      </Link>
    </div>
  );
}
