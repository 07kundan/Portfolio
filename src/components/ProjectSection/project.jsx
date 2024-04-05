import React from "react";

function Project({ name, details, URL }) {
  return (
    <>
      <div className="p-3 border border-black rounded-sm">
        <img src={`${URL}`} alt="" />
        <div>{name}</div>
        <div className="">{details}</div>
      </div>
    </>
  );
}

export default Project;
