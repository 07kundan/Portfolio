import React from "react";

function HeroSection() {
  return (
    <>
      <div id="About" className="flex p-4 gap-4 h-screen w-full relative">
        <div className="absolute bottom-32 left-[16%]">
          <button
            type=""
            className="p-2 px-4 bg-slate-500 bg-opacity-25 rounded-xl"
          >
            Download CV
          </button>
        </div>

        <div className=" w-[60%] text-5xl h-full flex pl-20 pt-20">
          <div>
            <span>Hey...</span> <br />
            <span>I'm KUNDAN</span>
            <div className="text-4xl pl-5 text-[#FCA311]">
              A passoniate software developer
            </div>
          </div>
        </div>
        <div className="p-16 h-full w-[40%] ">
          <div className="flex items-center justify-center h-full">
            <img
              className="rounded-full"
              src="./src/assets/Pic.jpg"
              alt="picture"
              style={{ height: "500px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
