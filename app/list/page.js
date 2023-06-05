import { connectDB } from "@/utils/database";
import Link from "next/link";

export default async function List() {
  const client = await connectDB;
  const db = client.db("next-master");
  const result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((item, index) => {
        return (
          <div className="list-item" key={index}>
            <Link prefetch={false} href={`/detail/${item._id}`}>
              {item.title}
            </Link>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
}
