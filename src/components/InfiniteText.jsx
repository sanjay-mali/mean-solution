import React from "react";

const InfiniteText = ({ text }) => {
  const text_wrapper =
    "uppercase items-center text-[8.375rem] sm:text-[2rem] font-bold leading-[0.9] flex pt-10 pb-34;";
  const part1 = "flex-none flex items-center text-[7vw]";
  const divider =
    "bg-black flex-none lg:w-4 lg:h-4 mt-[1rem] md:w-4 md:h-4 sm:w-3 sm:h-3  mx-[1.875rem] rounded-[50%]";
  return (
    <>
      <section className="bg-[#c9fd74] tracking-normal mt-[-6rem] relative overflow-hidden pb-24 rounded-t-[3.75rem]">
        <div className={text_wrapper}>
          <div className="flex-none flex items-center animate-marquee ">
            <div className={part1}>
              <div>{text}</div>
              <div className={divider}></div>
              <div>{text}</div>
              <div className={divider}></div>
              <div>{text}</div>
              <div className={divider}></div>
              <div>{text}</div>
              <div className={divider}></div>
            </div>
          </div>
          <div className="flex-none flex items-center animate-marquee ">
            <div className={part1}>
              <div>{text}</div>
              <div className={divider}></div>
              <div>{text}</div>
              <div className={divider}></div>
              <div>{text}</div>
              <div className={divider}></div>
              <div>{text}</div>
              <div className={divider}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfiniteText;
