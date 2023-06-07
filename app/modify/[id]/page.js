import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function Modify(props) {
  const client = await connectDB;
  const db = client.db("next-master");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <form action="http://localhost:3000/api/post/modify" method="POST">
        <input defaultValue={result.title} placeholder="" name="title" />
        <input defaultValue={result.content} placeholder="" name="content" />
        <input
          defaultValue={result._id}
          name="id"
          style={{ display: "none" }}
        />
        <button>수정</button>
      </form>
    </div>
  );
}
