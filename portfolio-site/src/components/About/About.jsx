import { RiArrowGoForwardFill, RiArrowGoForwardLine } from "@remixicon/react";
import React from "react";
import avatar from "../../assets/avatar-prof.jpg";


const About = () => {
  return (
    <div className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        <div className="md:flex md:mt-8 flex-wrap justify-between flex-col md:flex-row items-center gap-16 ">
            <img src={avatar} alt="About img" className="w-2/5  md:w-64 rounded-full mx-auto mt-4" />
            <ul>
                <div className="flex gap-3 py-4 ">
                    <RiArrowGoForwardLine size={30} className="mt-1" />
                    <span className="w-96">
                        <h1 className="text-lg  md:text-2xl font-semibold leading-normal ">Frontend Developer</h1>
                        <p className="text-sm  leading-tight ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quidem illo vero repudiandae laudantium perferendis, ducimus id expedita facere aperiam nulla porro voluptatem distinctio earum tempora ullam non cumque blanditiis?</p>
                    </span>
                </div>
                <div className="flex gap-3 py-4 ">
                    <RiArrowGoForwardLine size={30} className="mt-1" />
                    <span className="w-96">
                        <h1 className="text-xl  md:text-lg font-semibold leading-normal ">Frontend Developer</h1>
                        <p className="text-sm md:text-lg leading-tight ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quidem illo vero repudiandae laudantium perferendis, ducimus id expedita facere aperiam nulla porro voluptatem distinctio earum tempora ullam non cumque blanditiis?</p>
                    </span>
                </div>
                <div className="flex gap-3 py-4 ">
                    <RiArrowGoForwardLine size={30} className="mt-1" />
                    <span className="w-96">
                        <h1 className="text-xl  md:text-lg font-semibold leading-normal ">Frontend Developer</h1>
                        <p className="text-sm md:text-lg leading-tight ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quidem illo vero repudiandae laudantium perferendis, ducimus id expedita facere aperiam nulla porro voluptatem distinctio earum tempora ullam non cumque blanditiis?</p>
                    </span>
                </div>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
