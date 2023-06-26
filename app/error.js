"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h4>에러 남 ㅋ</h4>
      <div>
        <button
          onClick={() => {
            reset();
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}
