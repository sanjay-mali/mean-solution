import React from "react";
import SectionHeading from "../SectionHeading";
import ExpertiseSection from "../ExpertiseSection";

const Expertises = () => {
  const expertises = [
    {
      name: "Product Design",
      subName1: "UI Design",
      subName2: "UX Design",
      subName3: "Prototyping",
    },
    {
      name: "Branding",
      subName1: "Logo Design",
      subName2: "Identity Design",
      subName3: "Brand Strategy",
    },
    {
      name: "Graphics",
      subName1: "Illustration",
      subName2: "Infographics",
      subName3: "Vector Art",
    },
    {
      name: "Web Design",
      subName1: "Responsive Design",
      subName2: "Wireframing",
      subName3: "User Testing",
    },
    {
      name: "Web Development",
      subName1: "Frontend",
      subName2: "Backend",
      subName3: "Fullstack",
    },
    {
      name: "Mobile Apps",
      subName1: "iOS Development",
      subName2: "Android Development",
      subName3: "Cross-Platform",
    },
    {
      name: "SEO",
      subName1: "Keyword Research",
      subName2: "On-page SEO",
      subName3: "Link Building",
    },
  ];

  return (
    <div className="w-full  sticky top-0 min-h-screen  bg-[#B2AC88] py-12">
      <div className="rounded-t-[3.75rem] py-12">
        <SectionHeading textColor="blue">Expertises</SectionHeading>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {expertises.map((expertise, index) => (
          <div className="group w-full flex-shrink-0" key={expertise.name}>
            <ExpertiseSection
              number={(index + 1).toString().padStart(2, "0")}
              name={expertise.name}
              subName1={expertise.subName1}
              subName2={expertise.subName2}
              subName3={expertise.subName3}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertises;
