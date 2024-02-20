interface Post {
    title: string;
    content: string;
    uri: string;
  }
  
  interface GetPostsResponse {
    posts: {
      nodes: Post[];
    };
  }
  