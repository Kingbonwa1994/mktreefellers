"use client"
import { Suspense, useState } from "react";
import Loading from "../components/loading";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Questionnaire from "@/components/Questionnaire";
import Posts from "@/components/Posts";;



export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header />
        

        <div className="h-screen bg-[#0A5868] flex flex-col justify-between">
          <div className="flex-1 mx-auto my-8">
            <div className="gap-6">
              <Posts />
             
            </div>
            <div className="items-center">
            {showModal && (
              <Questionnaire onClose={toggleModal} /> 
            )}
            </div>
          </div>

          <Footer />
        </div>
      </Suspense>
    </div>
  );
}
