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
        style={{ fontFamily: "montserrat" }}
        className="text-center text-4xl font-bold mb-12 uppercase"
      >
        Skills
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-8 justify-items-center">
        {skills.map((skill, index) => {
          const radius = 45;
          const stroke = 8;
          const circumference = 2 * Math.PI * radius;
          const progress = isHovered ? skill.percent : 0;
          const offset = circumference - (progress / 100) * circumference;

          return (
            <div key={index} className="flex flex-col  gap-[80px] items-center">
              <div className="relative w-[120px] h-[120px]">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="#e5e7eb"
                    strokeWidth={stroke}
                    fill="transparent"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke={skill.color}
                    strokeWidth={stroke}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-in-out"
                  />
                </svg>
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-10 h-10 overflow-visible rounded-full absolute sm:top-[35px] top-[-38px] left-[40px] sm:left-[-40px] z-10"
                />
                <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                  {progress}%
                </div>
              </div>
              <p className="mt-2 relative  top-[-80px] font-semibold">
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
