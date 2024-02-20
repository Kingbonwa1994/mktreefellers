   
async function getPosts() {
    const query = `
    {
      posts(first: 6) {
        nodes {
          title
          content
          uri
          author
          media
          date
          
        }
      }
    }
  `;

    const apiUrl = `http://localhost/backend/wordpress/graphql?query=${encodeURIComponent(query)}`;
  
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // ... any other headers you need to include (like authentication tokens)
        },
        cache: "no-store",
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Extracting relevant information from t3he response
      const posts = data.map(post => ({
        title: post.title.rendered,
        content: post.content.rendered,
        uri: post.link,
        author: post.author,
        media: post.media.rendered,
        slug: post.slug
        // Add more attributes as needed (e.g., author, media, etc.)
      }));
  
      console.log(posts);
      return posts;
    } catch (error) {
      console.error('Error fetching WordPress posts:', error.message);
      return [];
    }
  }
  
  export default async function PostList() {
    const posts = await getPosts();  
    return (
    
   
  )
}