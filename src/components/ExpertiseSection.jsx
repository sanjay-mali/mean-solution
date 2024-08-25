import React from "react";
import "../index.css";
import Button from "./ui/Button";

const ExpertiseSection = ({
  number,
  name,
  subName1 = "",
  subName2 = "",
  subName3 = "",
}) => {
  return (
    <>
      <div className="flex relative maiin justify-around cursor-pointer h-40 items-center w-full rounded-3xl bg-[#F2F2F2] text-black mx-auto">
        <div className="flex items-center  w-10 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 hover rounded-full">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold block">
            {number}
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-base sm:text-xl md:text-xl lg:text-2xl pt-4 font-bold">
            {name}
          </p>
          <div className="flex gap-3  uppercase font-normal md:flex-row text-xs sm:text-sm md:text-sm lg:text-lg pt-2 flex-wrap items-center">
            <div className="divider-elipse-small"></div>
            <h1>{subName1}</h1>
            <div className="divider-elipse-small"></div>
            <h1>{subName2}</h1>
            <div className="divider-elipse-small"></div>
            <h1>{subName3}</h1>
          </div>
          <div className="text-xs w-full lg:w-1/4 md:w-full text-center sm:w-full text-black mt-4 hidden sm:text-sm md:text-md lg:text-lg opacity-0 will-change-transform hover:!delay-1000  border-2 lets rounded-full outline px-10 pb-2">
            <Button text={"Let's Make stuff"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertiseSection;
