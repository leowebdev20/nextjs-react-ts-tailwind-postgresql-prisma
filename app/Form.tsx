"use client";
import React, { useState } from "react";

export default function FormPost() {
  const [title, setTitle] = useState("");

  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetch(`/api/createPosts`, {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const res = await data.json();
    if (!res.ok) console.log(res.message);
  }
  return (
    <form onSubmit={submitPost}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
