import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { LuLink2 } from "react-icons/lu";

function ProjectCard(props) {
  const [stateOFBG, setStateOfBg] = useState(false);
  const bgAnimate = useAnimation();
  const bgAnimateRotate = useAnimation();

  const handleProjectClick = () => {
    if (!stateOFBG) {
      bgAnimate.start("after");
      bgAnimateRotate.start("rotate");
    } else {
      bgAnimate.start("before");
      bgAnimateRotate.start("rotate");
    }
    setStateOfBg(!stateOFBG);
  };

  return (
    <div className="h-full flex items-center ">
      <div className="relative h-fit overflow-hidden rounded-2xl">
        <video
          autoPlay
          loop
          muted
          id="bg-video"
          className="w-fit h-fit object-cover"
        >
          <source src={props.url} type="video/mp4" />
        </video>
        <motion.div
          variants={{
            before: {
              height: "fit-content",
              borderTopLeftRadius: "100%",
              borderTopRightRadius: "100%",
            },
            after: {
              height: "100%",
              borderTopLeftRadius: "0px%",
              borderTopRightRadius: "0px%",
            },
          }}
          animate={bgAnimate}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className=" w-[120%] text-xl text-center py-6 pt-10 bg-red-600 backdrop-blur-sm bg-opacity-40 rounded-ss-[100%] rounded-se-[100%]  absolute bottom-0 left-1/2 -translate-x-1/2 lg:w-[105%]"
        >
          <IoIosArrowUp
            variants={{
              rotate: { Tran: 180 },
            }}
            animate={bgAnimateRotate}
            transition={{ duration: 0.8, ease: "easeIn" }}
            className="text-3xl absolute top-1 left-1/2 -translate-x-1/2 "
            onClick={handleProjectClick}
          />

          {/* rendering project description */}
          {stateOFBG && (
            <div className="h-full">
              <p className="">{props.details}</p>
            </div>
          )}
          <a
            href={`${props.LiveLink}`}
            target="_blank"
            rel="noopener noreferrer"
          ></a>

          {/* Projects Name and LiveLink */}
          <div className="absolute bottom-0 w-full flex justify-around  items-center  px-7 py-1 lg:gap-28">
            <LuLink2 className="text-3xl" />
            <span className="underline underline-offset-1">
              {props.ProjectName}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectCard;
