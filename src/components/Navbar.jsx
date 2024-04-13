import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";

const NavList = [
  { index: 0, name: "About" },
  { index: 1, name: "Skills" },
  { index: 2, name: "Projects" },
  { index: 3, name: "Contact" },
];

function Navbar() {
  const [menubar, setMenubar] = useState(false);

  const handlePage = (index) => {
    const element = document.getElementById(index.name);
    if (element) {
      window.scrollTo({
        // top: element.offsetHeight * index.index,

        top: element.offsetTop + (window.innerWidth < 768 ? 0 : 20),
        behavior: "smooth",
      });
    }
    setMenubar(false);
  };

  return (
    <>
      <header
        className=" text-[#FCA311] z-10 lg:mt-3"
        style={{ position: "sticky", top: 5 }}
      >
        <div className="flex justify-between p-5 items-center lg:px-32 lg:py-4">
          {window.innerWidth < 768 && (
            <span className="text-5xl" onClick={() => setMenubar(true)}>
              <TiThMenu />
            </span>
          )}

          <div className="p-3 px-4 font-extrabold outline-double outline-3 outline-red-600 rounded-lg bg-slate-600 bg-opacity-50 backdrop-blur-sm">
            KUNDAN - PORTFOLIO
          </div>

          {/* Navbar for big screen */}
          {window.innerWidth > 768 && (
            <div className="hidden lg:flex gap-20 p-3 px-4 font-semibold outline-double outline-3 outline-red-600 rounded-lg bg-slate-600 bg-opacity-40 backdrop-blur-sm">
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
          )}
        </div>

        {/* Menu bar for mobile devices */}
        {menubar && (
          <div className="fixed top-0 p-3 backdrop-blur-md h-screen w-1/2 z-20 flex flex-col gap-2">
            <span className="text-5xl  " onClick={() => setMenubar(false)}>
              <IoMdCloseCircle className="float-right" />
            </span>

            {NavList.map((item) => (
              <>
                <button
                  className="p-3 hover:text-[#e99000] float-left w-fit"
                  key={item.name}
                  onClick={() => {
                    handlePage(item);
                  }}
                >
                  <span className="float-left text-3xl">{item.name}</span>
                </button>
                <hr />
              </>
            ))}
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
