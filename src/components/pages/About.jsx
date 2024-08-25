import React from "react";
import SectionHeading from "../SectionHeading";
import InfiniteText from "../InfiniteText";

const About = () => {
  return (
    <>
      <div className="w-full  sticky top-0  rounded-t-[100px]  flex justify-center items-center flex-wrap h-screen">
        <InfiniteText text=" We Are  Best" />
        <div className="-mt-16 z-10 rounded-t-[3.75rem] h-full bg-white flex flex-col items-center justify-evenly py-12">
          <SectionHeading textColor="blue">About us</SectionHeading>
          <div className="w-3/4 md:-mt-48 sm:-mt-48 lg:mt-0  lg:text-[2vw] md:text-[2vw] sm:text-[2vw] text-left mx-auto flex flex-col justify-center items-center px-4 py-8">
            “We are a small team of experts from India, specializing in
            developing modern products that push the boundaries of design. We
            help small businesses, startups, and other brands to grow and win by
            turning ideas into functional solutions. We closely collaborate with
            our clients to understand the needs and goals of the product, as
            communication is the key to the success of any project.”
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
