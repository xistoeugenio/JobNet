"use client";

import Navbar from "@/components/homepage/Navbar";
import Container3D from "@/components/homepage/Container3D";
import InfoContainer from "@/components/homepage/InfoContainer";
import BottomContainer from "@/components/homepage/BottomContainer";

const HomePage = () => {
  return (
    <section className="bg-[#101018] w-full h-full flex flex-col  items-center">
      <Navbar />
      <div className="max-w-[1200px] flex flex-col items-center justify-around md:justify-normal flex-1 mx-[40px] sm:mx-[60px]">
        <div className="flex md:flex-1 flex-col md:flex-row">
          <InfoContainer />
          <Container3D />
        </div>
        <BottomContainer />
      </div>
    </section>
  );
};

export default HomePage;
