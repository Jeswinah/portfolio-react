import React from "react";
import profile from "../assets/photo1.jpg";
const About = () => {
  return (
    <>
      <h1
        className="text-4xl font-bold text-center mb-5 mt-2  font-serif"
        id="about"
      >
        About Me
      </h1>
      <div className=" md:py-1 md:text-left tracking-wide mx-5  text-lg flex justify-center flex-col lg:flex-row text-justify ">
        <div className="contentimg w-4/6 h-4/6 lg:w-5/12 lg:h-4/6   flex justify-center  mx-auto lg:mx-1 md:mb-0 ">
          <img
            src={profile}
            alt="developer"
            className="w-full lg:w-8/12  h-full border-2  rounded-2xl shadow-2xl shadow-gray-800  mb-10 lg:mt-4 flex items-start"
          />
        </div>
        <div className="content mx-2  flex-col w-11/12">
          <p className="mb-5 ">
            I am Jeswin A.H <br />
            I'm Studying BE Computer Science Engineering in St.Xavier's catholic
            college of engineering, Nagercoil.
          </p>
          <p className="mb-5">
            I am a web developer with a keen interest in creating dynamic and
            user-friendly websites. As a fresher in the field, I bring a fresh
            perspective and a passion for learning and innovation to every
            project. With a portfolio that showcases my growing skill set and
            creative approach, I try to make a significant impact in the world
            of web development.
          </p>
          <h3 className="text-2xl font-semibold mb-5">Personal Statement</h3>
          <p>
            "I am passionate about web development and committed to continuously
            improving my skills. As a fresher, I am eager to learn from
            experienced professionals and take on new challenges that will help
            me grow in this exciting field. My goal is to create seamless,
            user-friendly web experiences that make a difference."
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
