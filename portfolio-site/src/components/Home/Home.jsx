import React from "react";
import avatar from "../../assets/avatar-prof.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full  justify-between gap-7  p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-4xl md:h-2/5 h-15 font-bold flex leading-normal ">
          <TextChange  />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed iusto
          dolor saepe
        </p>
        <button className="mt-5 md:m-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 rounded-3xl bg-primary  ">
          Contact Me
        </button>
      </div>
      <div className="flex justify-center items-center md:w-2/5">
        <img src={avatar} className=" w-2/5  md:w-72 rounded-full" alt="profile" />
      </div>
    </div>
  );
};

export default Home;
