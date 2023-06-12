export default function Write() {
  return (
    <div>
      <form action="api/createBoard" method="POST">
        제목: <input name="title" />
        {"  "}
        내용: <input name="content" />
        <button>제출</button>
      </form>
    </div>
  );
}
