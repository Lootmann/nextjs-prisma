import React from "react";
import prisma from "../lib/prisma";

async function Page() {
  const users = await prisma.user.findMany();
  const posts = await prisma.post.findMany();

  return (
    <div>
      <h2 className="mb-6 font-bold border-b-2 border-gray-800">Feed</h2>

      <div className="p-2 bg-slate-300 flex flex-col gap-3">
        <div className="text-md m-2 p-2 border-2 border-slate-700 rounded-md">
          {users.map((user) => (
            <p key={user.id}>
              {user.id}, {user.name}
            </p>
          ))}
        </div>

        <div className="text-md m-2 p-2 border-2 border-slate-700 rounded-md">
          {posts.map((post) => (
            <p key={post.id}>
              {post.id} {post.title}, {post.authorId}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
