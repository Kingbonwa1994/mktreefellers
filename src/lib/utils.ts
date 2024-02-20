import  gpl  from 'graphql-tag';

export const GET_POSTS_QUERY = gpl`
    query GetPosts {
        posts(first: 6) {
            nodes {
                title
                content
                uri
            }
        }
    }
`