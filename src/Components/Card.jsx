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
import blog from "../assets/images/Project images/blog.png";

import travel from "../assets/images/Project images/travel.png";
import task from "../assets/images/Project images/task.png";
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
      name: "Gaming website",
      img: game,
      wlink: "https://gaming-website-one.vercel.app/",
      islive: "live",
      dir: "left",
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
    {
      name: "Blog post(Redux)",
      img: blog,
      wlink: "",
      islive: "not hosted",
      dir: "down",
    },
  ];

  return (
    <div id="projects">
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">My Projects</h1>
      </div>
      <section
        id="Projects"
        className="w-full gap-[50px] sm:px-[30px] px-[80px] flex-wrap flex flex-row justify-center"
      >
        {project.map((item) => (
          <Fade direction={item.dir}>
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl sm:w-[400px] w-[350px] px-8 pb-8 pt-40 mt-24 shadow-lg hover:scale-105 transition-all duration-300">
              <img
                src={item.img}
                alt={item.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

              <a
                className="z-10 text-2xl font-bold text-white hover:underline transition"
                href={item.wlink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>

              <div className="z-10 text-sm text-gray-300">{item.islive}</div>
            </article>
          </Fade>
        ))}
      </section>
    </div>
  );
};

export default Card;
