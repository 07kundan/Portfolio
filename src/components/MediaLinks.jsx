import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import { FaInstagram, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiCodingninjas } from "react-icons/si";

const media = [
  {
    index: 1,
    link: "https://www.instagram.com/kun_dan.kr",
    icon: <FaInstagram />,
  },
  {
    index: 2,
    link: "https://www.linkedin.com/in/kundan-kumar-ratu/",
    icon: <FaLinkedin />,
  },
  { index: 3, link: "https://twitter.com/kundan_X_07", icon: <FaXTwitter /> },
  {
    index: 4,
    link: "https://github.com/07kundan",
    icon: <FaGithub />,
  },
  {
    index: 5,
    link: "https://www.naukri.com/code360/profile/c9e26dbf-84d9-4313-aefe-0c70911ba0cd",
    icon: <SiCodingninjas />,
  },
];

function MediaLinks() {
  return (
    <motion.div
      variants={{
        hidden: { x: -50 },
        visible: { x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
      className=" w-screen absolute -bottom-[4%] flex justify-center lg:h-screen lg:justify-start lg:fixed lg:top-0 lg:left-3 lg:items-center lg:pb-14"
    >
      <div className="bg-slate-900 w-fit px-8 py-2 gap-4 lg:py-4 lg:px-0 lg:gap-2 flex justify-center items-center bg-opacity-30 rounded-3xl  lg:rounded-2xl lg:w-[3vw] lg:flex-col ">
        {media.map((item) => (
          <a
            key={item.link}
            href={`${item.link}`}
            target="_blank"
            className="py-1"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 * item.index, delay: 0.5 }}
              className="text-xl text-red-700 hover:bg-red-800 hover:text-2xl"
            >
              {item.icon}
            </motion.span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default MediaLinks;
