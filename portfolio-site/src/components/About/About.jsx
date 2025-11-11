import React from "react";
import { RiArrowGoForwardLine } from "@remixicon/react";
import avatar from "../../assets/about_prof.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 text-white bg-black bg-opacity-30 shadow-xl rounded-lg mx-0 md:mx-20 p-8 md:p-12"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center md:text-left">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-16 w-full">
        {/* IMAGE */}
        <img
          src={avatar}
          alt="About"
          className="w-40 h-40 md:w-64 md:h-64 rounded-full object-contain mx-auto md:mx-0"
        />

        {/* DETAILS */}
        <ul className="flex-1">
          {/* ITEM 1 */}
          <li className="flex gap-3 py-4">
            <RiArrowGoForwardLine size={30} className="mt-1 flex-shrink-0" />
            <div className="max-w-xl">
              <h1 className="text-lg md:text-2xl font-semibold leading-normal">
                Frontend Developer
              </h1>
              <p className="text-sm md:text-base leading-tight text-gray-300">
                I specialize in building modern, responsive user interfaces with
                React and Tailwind CSS. Passionate about creating clean and
                efficient code.
              </p>
            </div>
          </li>

          {/* ITEM 2 */}
          <li className="flex gap-3 py-4">
            <RiArrowGoForwardLine size={30} className="mt-1 " />
            <div className="max-w-xl">
              <h1 className="text-lg md:text-2xl font-semibold leading-normal">
                Problem Solver
              </h1>
              <p className="text-sm md:text-base leading-tight text-gray-300">
                I love turning complex challenges into simple, elegant solutions
                using logical thinking and efficient design.
              </p>
            </div>
          </li>

          {/* ITEM 3 */}
          <li className="flex gap-3 py-4">
            <RiArrowGoForwardLine size={30} className="mt-1 flex-shrink-0" />
            <div className="max-w-xl">
              <h1 className="text-lg md:text-2xl font-semibold leading-normal">
                Tech Enthusiast
              </h1>
              <p className="text-sm md:text-base leading-tight text-gray-300">
                Always exploring new technologies and frameworks to enhance my
                development workflow and improve project quality.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
