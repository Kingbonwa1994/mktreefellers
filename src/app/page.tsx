
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Questionnaire from "@/components/Questionnaire";

// Function to fetch posts from the API
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
    
  );

  const { data } = await res.json();

  return data.posts.nodes;
}

export default async function PostList() {
  // Fetch posts
  const posts = await getPosts();

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header />

        <div className="min-h-screen bg-[#0A5868] flex flex-col justify-between shadow-2xl">
          <div className="container mx-auto my-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {posts.map((post:any) => (
                <div key={post.uri} className="bg-[#081b1f] hover:bg-[#2c6b77] rounded-lg overflow-hidden shadow-lg">
                  <Link href={`/post/${post.uri}`} className="block cursor-pointer">
                        <div className="p-6">
                        <h3 className="text-l font-bold mb-2 text-white">{post.title}</h3>
                        {/* You can add more details like date, excerpt, etc. if needed */}
                        <p className="text-white"></p>
                      </div>
                    
                  </Link>
                </div>
              ))}
              <Questionnaire />
            </div>
          </div>

          <Footer />
        </div>
      </Suspense>
    </div>
  );
}
