import React from "react";
import Project from "./project";

const Projects = [
  {
    ProjectName: "xyz",
    ProjectDetails:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, a! Quidem architecto quae qui exercitationem recusandae expedita earum aspernatur ab optio neque aliquam labore, illum fugiat quo doloremque impedit officia",
    image: "dfghj",
  },
  {
    ProjectName: "xyz2",
    ProjectDetails:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, a! Quidem architecto quae qui exercitationem recusandae expedita earum aspernatur ab optio neque aliquam labore, illum fugiat quo doloremque impedit officia",
    image: "dfghj",
  },
  {
    ProjectName: "xyz3",
    ProjectDetails:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, a! Quidem architecto quae qui exercitationem recusandae expedita earum aspernatur ab optio neque aliquam labore, illum fugiat quo doloremque impedit officia",
    image: "dfghj",
  },
  {
    ProjectName: "xyz4",
    ProjectDetails:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, a! Quidem architecto quae qui exercitationem recusandae expedita earum aspernatur ab optio neque aliquam labore, illum fugiat quo doloremque impedit officia",
    image: "dfghj",
  },
];

function ProjectList() {
  return (
    <>
      {/* <marquee behavior="" direction="left" className="w-full"> */}
      <div
        id="Projects"
        className="h-screen font-['RubikScribble'] bg-red-500 p-10"
      >
        <center className="text-4xl ">
          <h1>PROJECTS</h1>
        </center>
        <div className="flex justify-center gap-8 p-10">
          {Projects.map((items) => (
            <Project
              key={items.ProjectName}
              name={items.ProjectName}
              details={items.ProjectDetails}
              URL={items.image}
            />
          ))}
        </div>
      </div>
      {/* </marquee> */}
    </>
  );
}

export default ProjectList;
