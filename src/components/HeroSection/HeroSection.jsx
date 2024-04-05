import React from "react";

function HeroSection() {
  return (
    <>
      <div className="flex p-4 gap-4 h-screen bg-red-400">
        <div className=" w-[60%] bg-purple-400 h-full flex items-center px-20">
          <div>
            <span>Hey...</span> <br />
            <span>I'm KUNDAN</span>
          </div>
        </div>
        <div className="p-16 h-full w-[40%] bg-blue-500">
          <h2>About Me</h2>
          <div className="flex items-center justify-center bg-green-500 h-full">
            <img
              src="./src/assets/MyPic.png"
              alt=""
              style={{ height: "200px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
