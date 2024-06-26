import React, { useEffect, useRef } from "react";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa6";
import { TbBrandJavascript, TbBrandCpp } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { motion, useInView, useAnimation } from "framer-motion";

const developmentSkills = [
  { percentage: 80, name: "HTML", icon: <FaHtml5 />, color: "text-orange-700" },
  { percentage: 80, name: "CSS", icon: <FaCss3 />, color: "text-blue-700" },
  {
    percentage: 48,
    name: "JAVASCRIPT",
    icon: <TbBrandJavascript />,
    color: "text-yellow-600",
  },
  {
    percentage: 75,
    name: "TAILWINDCSS",
    icon: <BiLogoTailwindCss />,
    color: "text-orange-700",
  },
  {
    percentage: 60,
    name: "REACT.JS",
    icon: <FaReact />,
    color: "text-blue-500",
  },
];
const LanguageSkills = [
  { name: "C++", percentage: 30, icon: <TbBrandCpp /> },
  { name: "DSA", percentage: 35 },
];

function Skills() {
  const ref = useRef(null);
  const refBar = useRef(null);
  const isInView = useInView(ref, { margin: "-380px", once: true });
  const isInviewBar = useInView(refBar, { margin: "-10%" });
  const controls = useAnimation();
  const barControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // fire the animation
      controls.start("visible");
    }
    if (isInviewBar) {
      barControls.start("barEnd");
    }
  }, [isInView, isInviewBar]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="h-screen w-screen flex justify-center items-center lg:pt-12"
        id="Skills"
      >
        <div className="lg:w-[85%] lg:m-auto lg:p-5 lg:pl-8 text-xl font-semibold text-[#FCA311]">
          <center className="text-3xl  font-bold underline underline-offset-4">
            <h1>SKILLS</h1>
          </center>

          {/* Development Skills */}
          <div className="lg:flex lg:justify-center lg:gap-4">
            <div className="py-4 lg:w-[60%] lg:flex lg:flex-col">
              <center className="underline underline-offset-4">
                Development Skills
              </center>

              {developmentSkills.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between gap-3 items-center p-4 px-6"
                >
                  <span className="flex items-center gap-2">
                    <span className={`${item.color} text-3xl`}>
                      {item.icon}
                    </span>
                    <span className="text-base">{item.name}</span>
                  </span>

                  {/* percentage bar */}
                  <div ref={refBar} className="flex  items-center gap-2">
                    <div className="w-[10rem] h-3 lg:w-[17rem] bg-transparent backdrop-blur-2xl border rounded-3xl">
                      <motion.div
                        variants={{
                          barStart: { width: 0 },
                          barEnd: { width: `${item.percentage}%` },
                        }}
                        initial="barStart"
                        animate={barControls}
                        transition={{
                          duration: 0.5,
                          ease: "easeIn",
                          delay: 0.25,
                        }}
                        className={`bg-gradient-to-r from-red-600 h-full rounded-2xl`}
                        // style={{ width: `${item.percentage}%` }}
                      ></motion.div>
                    </div>
                    {/* percentage value  */}
                    <span className="text-lg">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Language Skills */}
            <div className=" lg:w-1/2 py-4 lg:flex lg:flex-col">
              <center className=" underline underline-offset-4">
                Language Skills + Problem Solving
              </center>
              {LanguageSkills.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between gap-3 items-center p-4 px-6 pl-16"
                >
                  <span className="text-base">{item.name}</span>

                  {/* percentage bar */}
                  <div ref={refBar} className="flex  items-center gap-2">
                    <div className="h-3 w-[10rem] bg-transparent backdrop-blur-2xl border rounded-3xl lg:w-[17rem]">
                      <motion.div
                        variants={{
                          barStart: { width: 0 },
                          barEnd: { width: `${item.percentage}%` },
                        }}
                        initial="barStart"
                        animate={barControls}
                        transition={{
                          duration: 0.5,
                          ease: "easeIn",
                          delay: 0.25,
                        }}
                        className={`bg-gradient-to-r from-red-600 h-full rounded-2xl`}
                        // style={{ width: `${item.percentage}%` }}
                      ></motion.div>
                    </div>

                    {/* percentage value */}
                    <span className="text-lg">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <hr />
    </>
  );
}

export default Skills;
