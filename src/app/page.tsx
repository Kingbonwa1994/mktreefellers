
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Questionnaire from "@/components/Questionnaire";

// Function to fetch posts from the API


export default async function PostList() {
  // Fetch posts
    return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header />
        <div className="min-h-screen bg-[#0A5868] flex flex-col justify-between shadow-2xl">
          <div className="container mx-auto my-8">
            <div className="items-center">
              <Questionnaire />
            </div>
          </div>
          <Footer />
        </div>
      </Suspense>
    </div>
  );
}
