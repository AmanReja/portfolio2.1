import React, { useState } from "react";
import js from "../assets/images/logo/js.png";
import react from "../assets/images/logo/react.png";
import express from "../assets/images/logo/express.png";
import html from "../assets/images/logo/html.png";
import css from "../assets/images/logo/css.png";
import node from "../assets/images/logo/nodejs.png";
import tailwind from "../assets/images/logo/tailwind.png";
import Mongodb from "../assets/images/logo/Mongo.png";
import mongoosejs from "../assets/images/logo/Mongoose.png";
import figma from "../assets/images/logo/figma.png";
import next from "../assets/images/logo/next.png";
import mysql from "../assets/images/logo/mysql.png";

function Skills() {
  const [isHovered, setIsHovered] = useState(false);

  const skills = [
    { name: "Nodejs", color: "#bfff00", img: node, percent: 70 },
    { name: "Reactjs", color: "#29cce5", img: react, percent: 80 },
    { name: "Expressjs", color: "#7f00ff", img: express, percent: 82 },
    { name: "Html", color: "#fc0349", img: html, percent: 98 },
    { name: "Css", color: "#164ff7", img: css, percent: 95 },
    { name: "Javascript", color: "#f7e816", img: js, percent: 86 },
    { name: "Tailwindcss", color: "#16f7f7", img: tailwind, percent: 97 },
    { name: "Mongodb", color: "#00f74e", img: Mongodb, percent: 60 },
    { name: "Mongoosejs", color: "#5c1807", img: mongoosejs, percent: 72 },
    { name: "Mysql", color: "#fcaa05", img: mysql, percent: 82 },
    { name: "Figma", color: "#9532a8", img: figma, percent: 62 },
    { name: "Nextjs", color: "#000", img: next, percent: 78 },
  ];

  return (
    <div
      id="skills"
      className="w-full px-6 py-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        className="text-center text-4xl md:text-5xl font-extrabold mb-12 uppercase 
   bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 
   text-transparent bg-clip-text drop-shadow-md tracking-wide"
      >
        🚀 Skills ⚡
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-8 justify-items-center">
        {skills.map((skill, index) => {
          const radius = 45;
          const stroke = 8;
          const circumference = 2 * Math.PI * radius;
          const progress = isHovered ? skill.percent : 0;
          const offset = circumference - (progress / 100) * circumference;

          return (
            <div
              key={index}
              className="flex flex-col items-center gap-6   w-[140px] h-[250px] bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-[140px]  h-[140px]">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="70"
                    cy="70"
                    r={radius}
                    stroke="#e5e7eb"
                    strokeWidth={stroke}
                    fill="transparent"
                  />

                  <circle
                    cx="70"
                    cy="70"
                    r={radius}
                    stroke={`url(#gradient-${index})`}
                    strokeWidth={stroke}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-in-out drop-shadow-md"
                  />

                  <defs>
                    <linearGradient
                      id={`gradient-${index}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor={skill.color} />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-12 h-12  rounded-full shadow-md"
                  />
                </div>

                <div className="absolute inset-0 flex items-end justify-center  text-sm font-semibold  text-gray-800 pt-[10px] ">
                  {progress}%
                </div>
              </div>

              <p className="mt-2 text-lg font-semibold tracking-wide text-gray-900 ">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
