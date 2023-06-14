import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Comment from "./Comment";

export default async function Detail(props) {
  const client = await connectDB;
  const db = client.db("next-master");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  const propId = result._id.toString();
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      {result.email === session?.user?.email ||
      session?.user?.admin == "true" ? (
        <Link href={`/modify/${result._id}`}>
          <button>수정</button>
        </Link>
      ) : null}

      <Comment id={propId} email={session?.user?.email} />
    </div>
  );
}
