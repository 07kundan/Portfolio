import React from "react";

const developmentSkills = ["HTML", "CSS", "TAILWINDCSS", "REACT.JS"];
const LanguageSkills = ["C++", "DSA"];
function Skills() {
  return (
    <>
      <div className="h-screen w-[80%] bg-emerald-300 p-20 m-auto flex flex-col gap-8 justify-center">
        {LanguageSkills.map((item) => (
          <div className="flex justify-between items-center">
            <div className="" key={item}>
              {item}
            </div>
            <div className="h-2 w-72 bg-red-800 rounded-3xl relative">
              <div className="absolute -left-1 bg-blue-300 h-full w-1/2 rounded-2xl"></div>
            </div>
          </div>
        ))}

        {developmentSkills.map((item) => (
          <div className="flex justify-between items-center">
            <div className="" key={item}>
              {item}
            </div>
            <div className="h-2 w-72 bg-red-800 rounded-3xl relative">
              <div className="absolute -left-1 bg-blue-300 h-full w-1/2 rounded-2xl"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
