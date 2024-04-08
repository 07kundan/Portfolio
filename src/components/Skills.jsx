import React from "react";

const developmentSkills = [
  { percentage: 80, name: "HTML" },
  { percentage: 80, name: "CSS" },
  { percentage: 48, name: "JAVASCRIPT" },
  { percentage: 75, name: "TAILWINDCSS" },
  { percentage: 60, name: "REACT.JS" },
];
const LanguageSkills = [
  { name: "C++", percentage: 30 },
  { name: "DSA", percentage: 35 },
];
function Skills() {
  return (
    <>
      <div
        id="Skills"
        className="h-screen w-[80%] p-20 m-auto flex flex-col gap-4 justify-center text-3xl leading-4 font-semibold text-[#FCA311]"
      >
        <center className="text-4xl font-bold underline underline-offset-4">
          <h1>SKILLS</h1>
        </center>
        {LanguageSkills.map((item) => (
          <div
            key={item.name}
            className="flex justify-between items-center p-4 px-8 "
          >
            <div className="">{item.name}</div>
            <div className="h-3 w-[20rem] bg-transparent backdrop-blur-2xl border rounded-3xl relative">
              <div
                className={`absolute bg-gradient-to-r from-red-600 h-full rounded-2xl`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}

        {developmentSkills.map((item) => (
          <div
            key={item.name}
            className="flex justify-between items-center p-4 px-8 "
          >
            <div className="">{item.name}</div>
            <div className="h-3 w-[20rem] bg-transparent backdrop-blur-2xl border rounded-3xl relative">
              <div
                className={`absolute bg-gradient-to-r from-red-600 h-full ] rounded-2xl`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
