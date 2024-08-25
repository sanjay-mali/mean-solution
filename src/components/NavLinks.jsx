import React from "react";

const NavLinks = () => {
  return (
    <ul className="md:w-1/2 fixed rounded-lg z-50 sm:w-1/2 lg:w-1/4 m-[4.5rem] bg-white animate__animated animate__backInDown animate__faster font-bold text-center text-l py-3 mx-auto">
      <li className="cursor-pointer py-2 hover:bg-[#D9D9D9]  delay-75 transition-all ">
        Home
      </li>
      <li className="cursor-pointer py-2 hover:bg-[#D9D9D9]  delay-75 transition-all ">
        Work
      </li>
      <li className="cursor-pointer py-2 hover:bg-[#D9D9D9]  delay-75 transition-all">
        Expertise
      </li>
      <li className="cursor-pointer py-2 hover:bg-[#D9D9D9]  delay-75 transition-all">
        Our Process
      </li>
      <li className="cursor-pointer  py-2 hover:bg-[#D9D9D9]  delay-75 transition-all">
        About Us
      </li>
      <li className="cursor-pointer py-2 hover:bg-[#D9D9D9]  delay-75 transition-all">
        Contact Us
      </li>
    </ul>
  );
};

export default NavLinks;
