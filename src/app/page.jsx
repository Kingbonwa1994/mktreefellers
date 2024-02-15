import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

async function getPosts() {
  const query = `
  {
    posts(first: 5) {
      nodes {
        title
        content
        uri
      }
    }
  }
  `;

  const res = await fetch(
    `http://localhost/backend/wordpress/graphql?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // ... any other headers you need to include (like authentication tokens)
      },
      cache: "no-store",
    }
  );

  const { data } = await res.json();

  return data.posts.nodes;
}

export default async function PostList() {
  const posts = await getPosts();

  return (
    <Suspense fallback={<Loading />}>
      <div className=" min-h-screen bg-[#0A5868] flex flex-col justify-between">
        {posts.map((post) => (
          <div key={post.uri} className="card">
            <Link href={`/post/${post.uri}`}>
              <h3>{post.title}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content.slice(0, 200) + "...",
                }}
              />
            </Link>
          </div>
        ))}
      </div>
    </Suspense>
  );
}