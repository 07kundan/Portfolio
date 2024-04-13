import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiCodingninjas } from "react-icons/si";

const media = [
  { link: "https://www.instagram.com/kun_dan.kr", icon: <FaInstagram /> },
  {
    link: "https://www.linkedin.com/in/kundan-kumar-ratu/",
    icon: <FaLinkedin />,
  },
  { link: "https://twitter.com/kundan_X_07", icon: <FaXTwitter /> },
  { link: "https://github.com/07kundan", icon: <FaGithub /> },
  {
    link: "https://www.naukri.com/code360/profile/c9e26dbf-84d9-4313-aefe-0c70911ba0cd",
    icon: <SiCodingninjas />,
  },
];

function MediaLinks() {
  return (
    <div className="hidden h-screen fixed top-0 left-3 lg:flex items-center pb-14">
      <div className=" w-[3vw] flex flex-col justify-center items-center py-4 bg-slate-900  bg-opacity-30 rounded-2xl">
        {media.map((item) => (
          <a href={`${item.link}`} target="_blank" className="py-2 ">
            <span className="text-xl text-red-700 hover:bg-red-800 hover:text-2xl">
              {item.icon}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default MediaLinks;
