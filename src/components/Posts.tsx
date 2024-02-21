import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
import Post from "./Post";

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
  `

  const apiUrl = `http://localhost/backend/wordpress/graphql?query=${encodeURIComponent(query)}`;

  const res = await fetch(
    `${apiUrl}`,
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
  console.log(posts)
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 ">
        {posts.map((post: any) => (
          <Post key={post.uri} title={post.title} content={post.content} uri={post.uri}/>
        ))}
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import Post from './Post';

// interface PostData {
//   title: string;
//   content: string;
//   uri: string;
//   author: string;
//   media: string;
//   slug: string;
// }

// async function getPosts(): Promise<PostData[]> {
//   const query = `
//     {
//       posts(first: 6) {
//         nodes {
//           title
//           content
//           uri
//           author
//           media
//           date
//           slug
//         }
//       }
//     }
//   `;

//   const apiUrl = `http://localhost/backend/wordpress/graphql?query=${encodeURIComponent(query)}`;

//   try {
//     const response = await fetch(apiUrl, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         // Add any other headers you need, such as authentication tokens
//       },
//       cache: 'no-store',
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();

//     // Extracting relevant information from the response
//     const posts: PostData[] = data.data.posts.nodes.map((post: any) => ({
//       title: post.nodes.title,
//       date: post.date,
//       content: post.content,
//       uri: post.uri,
//       author: post.author,
//       media: post.media,
//       slug: post.slug,
//     }));

//     console.log(posts);
//     return posts;
//   } catch (error:any) {
//     console.error('Error fetching WordPress posts:', error.message);
//     return [];
//   }
// }

// const PostList: React.FC = () => {
//   const [posts, setPosts] = useState<PostData[]>([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const fetchedPosts = await getPosts();
//       setPosts(fetchedPosts);
//     };

//     fetchPosts();
//   }, []);

  

//   return (
//     <div className="container mx-auto p-4">
//       {posts.map((post) => (
//         <Post
//           key={post.slug}
//           title={post.title}
//           content={post.content}
//           uri={post.uri}
//           author={post.author}
//           media={post.media}
//           slug={post.slug}
//         />
//       ))}
//     </div>
//   );
// };

// export default PostList;