import React from "react";
import { ReactTyped } from "react-typed";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
        id="About"
        className="h-screen w-full font-[RubikScribble] p-4 pt-14 text-[#FCA311] flex flex-col relative top-0 lg:flex-row-reverse lg:gap-2 lg:px-20"
      >
        {/* right-section / Image */}
        <div className="flex justify-center items-center h-[40%] lg:h-full lg:w-[50%] ">
          <img
            className="rounded-full"
            src="./src/assets/Pic.jpg"
            alt="picture"
            style={{ height: "300px" }}
          />
        </div>

        {/* left-section */}
        <div className=" text-4xl h-[45%]  p-4 lg:h-full flex lg:w-[60%] lg:items-center lg:pl-14">
          <div>
            <span>Hey...</span> <br />
            <span className="pl-6">I'm KUNDAN</span>
            <div className="text-xl pl-8 text-[#FCA311]">
              <ReactTyped
                strings={[
                  "A passoniate web-developer",
                  "A passoniate software developer",
                  "Interested in Machine Learning",
                  "Interested in Block-chain Development",
                ]}
                typeSpeed={25}
                backDelay={1000}
                backSpeed={10}
                loop
              />
            </div>
            <div className="text-base text-left mt-4">
              <p className="text-3xl text-red-700">{"<"}</p>
              <div className="pl-6">
                <ReactTyped
                  strings={[
                    "As a student of computer application. Eager to apply my knowledge in  a professional setting. I am a quick learner, adaptable, and enthusiastic about contributing to innovative projects.",
                  ]}
                  typeSpeed={10}
                />
              </div>
              <p className="text-3xl text-red-700">{"/>"}</p>
            </div>
          </div>
        </div>

        {/* CV-Button */}
        <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2 lg:bottom-20 ">
          <a
            className="p-2 px-4 bg-slate-500 bg-opacity-25 rounded-xl flex items-center gap-2"
            href="https://drive.usercontent.google.com/u/0/uc?id=1dkNue96PFcOZL1s8hzhEP3XM8Nka7fAz&export=download "
            download={"KUNDAN-CV"}
          >
            <FiDownload />
            <button type="button" className="text-red-700 font-medium">
              Download CV
            </button>
          </a>
        </div>
      </motion.div>
      <hr />
    </>
  );
}

export default HeroSection;
