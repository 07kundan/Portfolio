import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import WeatherMobile from "../assets/WeatherMobile.mp4";
import WeatherDesktop from "../assets/WeatherDesktop.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProjectCard from "./ProjectCard";

const Projects = [
  {
    index: 0,
    ProjectName: "Whether Webpage",
    ProjectDetails: "ertyue",
    url: window.innerWidth < 768 ? WeatherMobile : WeatherDesktop,
    LiveLink: "",
  },
  {
    index: 1,
    ProjectName: "Heave",
    ProjectDetails: "ertyuioiughj",
    url: window.innerWidth < 768 ? WeatherMobile : WeatherDesktop,

    LiveLink: "",
  },
  {
    index: 2,
    ProjectName: "xyz3",
    ProjectDetails: "ertyuioiuyfdfghj",
    url: window.innerWidth < 768 ? WeatherMobile : WeatherDesktop,
    LiveLink: "",
  },
];

function ProjectList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-380px", once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // fire the animation
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      {/* projects */}
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
        id="Projects"
        className="text-[#FCA311] h-screen px-5 py-24 pt-32 flex flex-col gap-3 lg:py-10 lg:pt-24"
      >
        <center className="text-4xl underline font-semibold">Projects</center>
        <Swiper
          className="h-full w-full bg-slate-800 bg-opacity-40 rounded-2xl lg:w-[70%]"
          effect={"coverflow"}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={1.5}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
        >
          {Projects.map((item) => (
            <SwiperSlide key={item.ProjectName} className="">
              <ProjectCard
                ProjectName={item.ProjectName}
                url={item.url}
                LiveLink={item.LiveLink}
                details={item.ProjectDetails}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
}

export default ProjectList;
