"use client";

import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((item, index) => {
        return (
          <div className="list-item" key={index}>
            <Link prefetch={false} href={`/detail/${item._id}`}>
              {item.title}
            </Link>
            <span
              onClick={(e) => {
                // fetch("api/post/delete", {
                //   method: "POST",
                //   body: item._id,
                // }).then(() => {
                //   e.target.parentElement.style.opacity = 0;
                //   setTimeout(() => {
                //     e.target.parentElement.style.display = "none";
                //   }, 1000);
                // });
                // query string
                // fetch(`api/post/delete?id=${item._id}`).then(() => {
                //   setTimeout(() => {
                //     e.target.parentElement.style.display = "none";
                //   }, 1000);
                // });
                // URL Parameter
                fetch(`api/dynamic/${item._id}?item=zzz&a=b`);
              }}
            >
              🗑
            </span>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
}
