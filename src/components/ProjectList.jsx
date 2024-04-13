import React, { useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";

import WeatherMobile from "../assets/WeatherMobile.mp4";
import WeatherDesktop from "../assets/WeatherDesktop.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectCoverflow,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Projects = [
  {
    index: 0,
    ProjectName: "Whether Webpage",
    ProjectDetails: "",
    url: window.innerWidth < 768 ? WeatherMobile : WeatherDesktop,
    LiveLink: "",
  },
  {
    index: 1,
    ProjectName: "Heave",
    ProjectDetails: "",
    url: window.innerWidth < 768 ? WeatherMobile : WeatherDesktop,

    LiveLink: "",
  },
  {
    index: 2,
    ProjectName: "xyz3",
    ProjectDetails: "",
    url: window.innerWidth < 768 ? WeatherMobile : WeatherDesktop,
    LiveLink: "",
  },
];

function ProjectList() {
  return (
    <>
      {/* projects */}
      <div
        id="Projects"
        className="h-screen px-5 py-24 pt-32 flex flex-col gap-3 lg:py-10 lg:pt-24"
      >
        <center className="text-4xl underline font-semibold">Projects</center>
        <Swiper
          className="h-full w-full bg-slate-600 bg-opacity-40 rounded-2xl lg:w-[70%]"
          effect={"coverflow"}
          grabCursor={true}
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
            <>
              <SwiperSlide className="">
                <div className="h-full flex items-center ">
                  <div className="relative h-fit overflow-hidden rounded-2xl">
                    <video
                      autoPlay
                      loop
                      muted
                      id="bg-video"
                      className="w-fit h-fit object-cover"
                    >
                      <source src={item.url} type="video/mp4" />
                    </video>
                    <div className="h-fit w-[120%] text-xl text-center py-6 pt-10 bg-slate-700 rounded-ss-[100%] rounded-se-[100%] bg-opacity-60 absolute bottom-0 left-1/2 -translate-x-1/2 lg:w-[105%]">
                      <IoIosArrowUp className="text-3xl absolute top-1 p-1 left-1/2 -translate-x-1/2 " />
                      {item.ProjectName}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ProjectList;
