import React from "react";
import game from "../assets/images/Project images/game.png";
// import imbs from "../assets/images/Project images/imbs.png";
import book from "../assets/images/Project images/book.png";
import myntra from "../assets/images/Project images/myntra.png";
import recipe from "../assets/images/Project images/recipe.png";
import tictac from "../assets/images/Project images/tictac.png";
import todo from "../assets/images/Project images/todo.png";
import cal from "../assets/images/Project images/cal.png";
import text from "../assets/images/Project images/text.png";
import wal from "../assets/images/Project images/wal.png";
import jel from "../assets/images/Project images/jewl.png";

import blog from "../assets/images/Project images/post.png";

import travel from "../assets/images/Project images/travel.png";
import task from "../assets/images/Project images/task.png";
import gym from "../assets/images/Project images/gym.png";
import jew from "../assets/images/Project images/jew.png";
import spa from "../assets/images/Project images/spa.png";
import japp from "../assets/images/Project images/japp.png";
import { Fade } from "react-awesome-reveal";

const Card = () => {
  const project = [
    {
      name: "Book Shop",
      img: book,
      wlink: "https://front-book-mu.vercel.app/",
      islive: "live",
      dir: "left",
    },
    {
      name: "Blog post(Redux+Next.js)",
      img: blog,
      wlink: "https://mini-blog-frontend-96lc.vercel.app/",
      islive: "live",
      dir: "down",
    },
    {
      name: "Wallpaper Downloader",
      img: wal,
      wlink: "https://wallpaperapp-w8f3.vercel.app/",
      islive: "live",
      dir: "up",
    },
    {
      name: "Travelia(working)",
      img: travel,
      wlink: "https://travel-frontend-delta-steel.vercel.app/",
      islive: "live",
      dir: "right",
    },

    {
      name: "Get recipes",
      img: recipe,
      wlink: "https://recipe-api-lyart.vercel.app/",
      islive: "live",
      dir: "down",
    },
    {
      name: "Tictacto",
      img: tictac,
      wlink: "https://tic-tac-to-xi.vercel.app/",
      islive: "live",
      dir: "right",
    },
    {
      name: "Todo List",
      img: todo,
      wlink: "https://todu-list-ten.vercel.app/",
      islive: "live",
      dir: "left",
    },
    {
      name: "Calculator",
      img: cal,
      wlink: "https://calculator2-0-vert.vercel.app/",
      islive: "live",
      dir: "right",
    },

    {
      name: "Task Master",
      img: task,
      wlink: "https://task-frontend-three-liard.vercel.app/",
      islive: "live",
      dir: "left",
    },

    {
      name: "Gym website(CMS)",
      img: gym,
      wlink: "#",
      islive: "not hosted",
      dir: "left",
    },

    {
      name: "jewelary website(CMS)",
      img: jew,
      wlink: "#",
      islive: "not hosted",
      dir: "left",
    },
    {
      name: "Spa(CMS)",
      img: spa,
      wlink: "#",
      islive: "not hosted",
      dir: "up",
    },
    {
      name: "jewelary App",
      img: japp,
      wlink: "#",
      islive: "not hosted",
      dir: "right",
    },
    // {
    //   name: "jewelary App",
    //   img: jel,
    //   wlink: "#",
    // },
    // {
    //   name: "Location tracker",
    //   img: Loca,
    //   wlink: "https://tracker-frontend-zeta.vercel.app/",
    // },
    // {
    //   name: "Attendance Marker(react native)",
    //   img: Mark,
    //   wlink: "",
    // },
  ];

  return (
    <div id="projects" className="py-20 bg-white">
      <div className="text-center mb-12">
        <h1 className="font-extrabold text-4xl md:text-5xl text-gray-900">
          🚀 My Projects
        </h1>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          A collection of some of my recent work in full-stack development.
        </p>
      </div>

      <section
        id="Projects"
        className="w-full gap-10 sm:px-6 px-10 flex flex-wrap justify-center"
      >
        {project.map((item, index) => (
          <Fade direction={item.dir} key={index}>
            <article
              className="group relative isolate flex flex-col justify-end overflow-hidden 
                     rounded-2xl sm:w-[380px] w-[320px] px-8 pb-10 pt-48 mt-10 
                     shadow-xl hover:scale-[1.03] transition-all duration-500
                     bg-white/10 backdrop-blur-md border border-white/20"
            >
              <img
                src={item.img}
                alt={item.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

              <div className="z-10">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-300">{item.islive}</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="flex gap-4">
                  <a
                    href={item.wlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold 
                           hover:bg-purple-700 transition shadow-md"
                  >
                    View Live
                  </a>
                  {item.glink && (
                    <a
                      href={item.glink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-gray-800 text-white text-sm font-semibold 
                             hover:bg-gray-900 transition shadow-md"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Fade>
        ))}
      </section>
    </div>
  );
};

export default Card;
