import React from "react";

const SectionHeading = ({ children, textColor = "red" }) => {
  return (
    <div className={`text-[10vw] font-bold text-center ${textColor}`}>
      {children}
    </div>
  );
};

export default SectionHeading;
