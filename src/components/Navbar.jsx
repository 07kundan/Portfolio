import React from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const NavList = [
  { index: 0, name: "About" },
  { index: 1, name: "Skills" },
  { index: 2, name: "Projects" },
  { index: 3, name: "Contact" },
];

function Navbar() {
  const handlePage = (index) => {
    const element = document.getElementById(index.name);
    if (element) {
      window.scrollTo({
        top: element.offsetHeight * index.index,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-10">
        <div className=" flex items-center justify-between pt-3 px-14 pl-36 text-[#FCA311] leading-none text-xl backdrop-blur-sm bg-opacity-0">
          <div className="font-extrabold p-2 px-4 outline-double outline-3 outline-red-600  rounded-lg bg-slate-600 bg-opacity-50">
            KUNDAN - PORTFOLIO
          </div>
          <div className="flex gap-20 p-3 px-4 font-semibold outline-double outline-3 outline-red-600 rounded-lg bg-slate-600 bg-opacity-40">
            {NavList.map((item) => (
              <button
                className="hover:text-[#e99000]"
                key={item.name}
                onClick={() => {
                  handlePage(item);
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
