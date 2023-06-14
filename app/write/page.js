import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Write() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  return session ? (
    <div>
      <form action={`api/createBoard?email=${email}`} method="POST">
        제목: <input name="title" />
        {"  "}
        내용: <input name="content" />
        <button>제출</button>
      </form>
    </div>
  ) : (
    <div>글 작성을 위해 로그인을 해주세요</div>
  );
}
