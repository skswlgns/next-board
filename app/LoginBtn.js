"use client";

import { signIn, signOut } from "next-auth/react";

export default function LoginBtn({ user }) {
  return (
    <div>
      {user ? (
        <button
          onClick={() => {
            signOut();
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={() => {
            signIn();
          }}
        >
          login
        </button>
      )}
    </div>
  );
}
