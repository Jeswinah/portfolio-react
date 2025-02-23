import React from "react";
import html from "../assets/logo/html.png";
import cssimg from "../assets/logo/css.png";
import jsimg from "../assets/logo/js.png";
import bootstrap from "../assets/logo/icons8-bootstrap.svg";
import react from "../assets/logo/React.js_logo.png";
import tailwind from "../assets/logo/Tailwind_CSS_Logo.png";
import javaimg from "../assets/logo/java.png";
import pyimg from "../assets/logo/python-logo.png";
import cimg from "../assets/logo/cimg.png";
import git from "../assets/logo/git-icon.png";
import vs from "../assets/logo/vs.png";
import nodeimg from "../assets/logo/node.png";

const SkillsDisplay = ({
  skills = [
    {
      category: "Web Development",
      items: [
        {
          name: "HTML5",
          image: html,
          alt: "HTML5 logo",
        },
        {
          name: "CSS3",
          image: cssimg,
          alt: "CSS3 logo",
        },
        {
          name: "JavaScript",
          image: jsimg,
          alt: "JavaScript logo",
        },

        {
          name: "Bootstrap",
          image: bootstrap,
          alt: "bootstrap logo",
        },
        {
          name: "Tailwind CSS",
          image: tailwind,
          alt: "tailwind logo",
        },
        {
          name: "React ",
          image: react,
          alt: "React logo",
        },
        {
          name: "Node js",
          image: nodeimg,
          alt: "Node js",
        },
      ],
    },
    {
      category: "Programming Languages & Tools",
      items: [
        {
          name: "Python",
          image: pyimg,
          alt: "python logo",
        },
        {
          name: "C",
          image: cimg,
          alt: "C logo",
        },
        {
          name: "Java",
          image: javaimg,
          alt: "Java logo",
        },
        {
          name: "Git",
          image: git,
          alt: "Git logo",
        },
        {
          name: "VS Code",
          image: vs,
          alt: "VS Code logo",
        },
      ],
    },
  ],
}) => {
  return (
    <>
      <h1 className="flex justify-center text-4xl mb-10 font-bold font-serif">
        Skills
      </h1>
      <div className="w-full max-w-4xl mx-auto p-6 space-y-8 h-screen ">
        {skills.map((skillGroup, index) => (
          <div key={index} className="space-y-4 ">
            <h3 className="text-xl text-gray-700 flex  justify-center lg:mb-2  text-primary font-semibold  ">
              {skillGroup.category}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-10   ">
              {skillGroup.items.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex flex-col items-center group hover:transform hover:scale-105 transition-transform duration-200 lg:mb-8 lg:mt-3 "
                >
                  <div className="w-14 h-14 rounded-lg bg-background p-2 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200 bg-gray-100 ">
                    <img
                      src={skill.image}
                      alt={skill.alt}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <span className="mt-2 text-sm font-medium text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillsDisplay;
