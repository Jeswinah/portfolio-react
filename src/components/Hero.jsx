import React from "react";
import proimg from "../assets/programerimg.png";
import Resume from "../assets/resume.pdf";
import TypingAnimation from "./TypingAnimation";

const Hero = () => {
  return (
    <div className="hero flex flex-col lg:flex-row items-center px-5 my-14 lg:py-20 lg:mt-5 min-h-full">
      <div className="flex-1 md:ml-[5%] flex justify-center items-center lg:order-2">
        <img
          src={proimg}
          alt="developer"
          className="w-full max-w-[250px]  lg:max-w-[300px] xl:max-w-[400px]  h-auto rounded-full mt-5 lg:mt-5 lg:mr-28"
        />
      </div>
      <div className="flex-1 text-left  lg:pt-20 flex flex-col justify-center items-center lg:block lg:order-1 lg:ml-10 xl:ml-24">
        <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold  md:mb-2">
          Hello,It's Me
        </h1>
        <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold  lg:mb-5 md:mb-4 font-mono ">
          Jeswin <span className="text-red-500"> A.H</span>
        </h1>
        <TypingAnimation />
        <p className="text-black mb-5 text-sm md:text-md lg:text-lg text-center lg:mt-5 md:text-left ">
          This is my Portfolio website to showcase all my Web development
          project
        </p>
        <div className="btn flex">
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-2  rounded flex mx-2 ">
          <a
            href="Resume"
            download={Resume}
            name="Resume"
            className="flex  items-center"
          >
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            Download CV{" "}
          </a>
        </button>
        <button class="bg-blue-800 hover:bg-gray-400 text-gray-50 font-bold py-3 px-5 rounded flex md:mx-2 ">
          <a
            href="#contact"
            className="flex  items-center"
          >
            {" "}
            Contact us
          </a>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
