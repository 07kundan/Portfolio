import React from "react";
const media = ["instagram", "linkedin", "twitter", "github", "codestudio"];
function MediaLinks() {
  return (
    <div className="h-screen fixed top-0 left-3 flex items-center ">
      <div className=" bg-green-600 w-[3vw] flex flex-col justify-center gap-7 items-center py-5">
        {media.map((item) => (
          <span>*</span>
        ))}
      </div>
    </div>
  );
}

export default MediaLinks;
