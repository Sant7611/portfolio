import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "News Magazine",
      main: "This is a news magazine website",
      source: "https://github.com/Sant7611/news",
    },
    {
      title: "News Magazine",
      main: "This is a news magazine website",
      source: "https://github.com/Sant7611/Project",
    },
    {
      title: "News Magazine",
      main: "This is a news magazine website",
      source: "https://github.com/Sant7611/portfolio/tree/main/portfolio-site",
    },
  ];
  return (
  <section id="projects" className="scroll-mt-20 md:mx-20 p-10 md:p-12 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold ">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 ">
        {projects.map((project, index)=>{
          return <ProjectCard key={index} title={project.title} main={project.main} source={project.source} />
        })}
       
      </div>
    </section>
  );
};

export default Projects;
