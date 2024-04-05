import React from "react";

const NavList = ["Home", "About", "Skills", "Contact"];

function Navbar() {
  return (
    <>
      <div className="flex justify-end gap-20 p-4 pr-52 sticky top-0 mt-5 text-[#FCA311] leading-none text-xl bg-transparent backdrop-blur-sm ">
        {NavList.map((item) => (
          <span className="" key={item}>
            {item}
          </span>
        ))}
      </div>
    </>
  );
}

export default Navbar;
