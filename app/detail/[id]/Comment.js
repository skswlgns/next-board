"use client";
import { useEffect, useState } from "react";

export default function Comment({ id, email }) {
  const [payload, setPayload] = useState("");
  const [payloads, setPayloads] = useState("");
  useEffect(() => {
    let result = fetch(`/api/post/list?id=${id}`, { method: "GET" })
      .then((r) => r.json())
      .then((r) => setPayloads(r));
  }, [payloads]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
    >
      <div style={{ margin: "10px 0px" }}>댓글 목록</div>
      <hr style={{ color: "black" }} />
      {payloads.length > 0
        ? payloads.map((item, idx) => <div key={idx}>{item.payload}</div>)
        : "댓글 없음"}
      <input
        onChange={(e) => {
          setPayload(e.target.value);
        }}
        id="createComment"
      />
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          fetch("/api/post/comment", {
            method: "POST",
            body: JSON.stringify({
              payload,
              articleId: id,
              email,
            }),
          }).then((r) => {
            let input = document.getElementById("createComment");
            input.value = "";
          });
        }}
      >
        댓글 등록
      </button>
    </div>
  );
}
