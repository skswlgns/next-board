export default function Join() {
  return (
    <div>
      <form action="api/post/join" method="POST">
        아이디: <input placeholder="id" name="name" />
        비밀번호: <input placeholder="password" name="password" />
        <button>제출</button>
      </form>
    </div>
  );
}
