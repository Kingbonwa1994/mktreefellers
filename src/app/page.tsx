
import { Suspense } from "react";
import Loading from "../components/loading";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Questionnaire from "@/components/Questionnaire";
import Posts from "@/components/Posts";;



export default async function HomePage() {
  

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header />
        

        <div className="min-h-screen bg-[#0A5868] flex flex-col justify-between shadow-2xl">
          <div className="container mx-auto my-8">
            <div className="grid grid-cols-1 gap-6">
              <Posts />
             
            </div>
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
