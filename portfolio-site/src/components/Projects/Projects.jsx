import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "News Magazine",
      main: "This is a news magazine website",
      demo: "",
      source: "https://github.com/Sant7611/news",
    },
    {
      title: "News Magazine",
      main: "This is a news magazine website",
      demo: "",
      source: "https://github.com/Sant7611/Project",
    },
  ];
  return (
    <div className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold ">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 ">
        <ProjectCard
          title="Blogging Webs  ite"
          main="This is a news magazine website"
        />
        <ProjectCard
          title="Blogging Webs  ite"
          main="This is the blogging website"
        />
      </div>
    </div>
  );
};

export default Projects;
