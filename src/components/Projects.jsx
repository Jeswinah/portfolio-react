import React from "react";
import weatherimg from '../assets/projects/weather.png'
import netfliximg from '../assets/projects/netflix.png'
import todo from '../assets/projects/todo.png'
import portfolioimg from '../assets/projects/portfolio.png'
import calimg from '../assets/projects/calender.png'
import pinimg from '../assets/projects/pin-new.png'
import recipeimg from'../assets/projects/recipeimg.png'

const ProjectCard = () => {
  const projects = [
    {
      title: "Recipe Finder",
      description: "Find Delicious Recipes is an innovative tool tailored for food enthusiasts to discover and explore a wide array of exciting and flavorful dishes to try at home.",
      tags: ["React", "Tailwind CSS"],

      imageUrl: recipeimg,
      onViewProject: () => open("https://jeswin-recipe-finder.netlify.app/"),
    },
    {
      title: "Real-Time Weather Tracker",
      description: "The real-time weather tracker is an interactive web application developed using ReactJS and styled with TailwindCSS.It allows users to input a location, and the app dynamically fetches and displays real-time weather data.",
      tags: ["React", "Tailwind CSS"],

      imageUrl: weatherimg,
      onViewProject: () => open("https://weather-jeswinah.vercel.app/ "),
    },
    {
      title: "Netflix login clone",
      description: "A Netflix login clone for beginners is a simple web page that replicates the Netflix login interface using HTML, CSS, and basic JavaScript with a styled background and logo to mimic the original design",
      tags: ["HTML", "CSS","JavaScript"],

      imageUrl: netfliximg,
      onViewProject: () => open("https://jeswinah.github.io/netflix/"),
    },
    {
      title: "Portfolio",
      description: "The completed portfolio website effectively showcases my development skills and projects, providing a professional online presence. This project highlights my ability to design and develop a modern, responsive website.",
      tags: ["React.js", "TailwindCSS"],

      imageUrl: portfolioimg,
      onViewProject: () => open("https://jeswinah.vercel.app/"),
    },
    {
      title: "To-do list",
      description: "I designed a clean and minimalist to-do list application interface using java script. This design balances functionality with simplicity, focusing on creating an and user-friendly task management task",
      tags: ["HTML", "CSS","JavaScript"],

      imageUrl: todo,
      onViewProject: () => open("https://jeswinah.github.io/todo/"),
    },
   
    {
      title: "Mini Calender",
      description: "Effortlessly manage your schedule with our sleek, mini calendar – big convenience in a compact design.",
      tags: ["HTML", "CSS","JavaScript"],

      imageUrl: calimg,
      onViewProject: () => open("https://jeswinah.github.io/calender/"),
    },
    {
      title: "Pinterest Login page",
      description: "The Pinterest signup page project is a static web page designed to mimic the original signup interface of Pinterest.",
      tags: ["HTML", "CSS","JavaScript"],

      imageUrl: pinimg,
      onViewProject: () => open("https://jeswinah.github.io/pinterest/"),
    },
   
  ];

  return (
    <div className="container mx-auto px-8 mt-3 ">
      <h1 className="flex justify-center text-4xl mb-10 font-bold font-serif">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
          >
            <div className="relative ">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-contain"
              />
            </div>

            <div className="p-5  bg-slate-100  ">
              <div className="flex justify-between items-start mb-3 ">
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-700 mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-900 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={project.onViewProject}
                className="w-full mt-4 bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 "
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
