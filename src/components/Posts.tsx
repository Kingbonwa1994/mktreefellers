import React from 'react'

async function getPosts() {
    const query = `
      {
        posts(first: 6) {
          nodes {
            title
            content
            uri
          }
        }
      }
    `;
  
    const res = await fetch(
      `http://localhost/backend/wordpress/graphql?query=${encodeURIComponent(query)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );
  
    const { data } = await res.json();
  
    return data.posts.nodes;
  }

function Posts() {
  return (
    <div>Posts</div>
  )
}

export default Posts