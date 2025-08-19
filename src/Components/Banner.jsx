import React, { useEffect, useState } from "react";

import "../App.css";
import Dev from "../assets/dev.svg";
import Fb from "../assets/images/fb.png";
import Wav from "../assets/wav.svg";
import Figma from "../assets/figma.svg";
import Nodemon from "../assets/nodemon.svg";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";
import Resume from "../assets/pdf/Resume.pdf";
import Noti from "../assets/music/noti.wav";
import check from "../assets/images/banner/check.svg";
import dev from "../assets/images/banner/dev.png";
import ball from "../assets/images/banner/ball.svg";
import bax from "../assets/images/banner/bax1.svg";
import rob from "../assets/images/banner/rob.png";
import min from "../assets/video/min.mp4";
import flag from "../assets/video/flag.mp4";
const Banner = () => {
  const [rotation, setRotation] = useState(0);

  const sound = () => {
    new Audio(Noti).play();
  };

  useEffect(() => {
    const handelscroll = () => {
      const scrollvalue = window.scrollY;
      setRotation(scrollvalue % 360);
    };
    window.addEventListener("scroll", handelscroll);

    return () => {
      window.removeEventListener("scroll", handelscroll);
    };
  }, []);

  return (
    <>
      <div
        id="home"
        className="w-full  h-auto sm:h-[600px] flex sm:flex-row flex-col container px-[20px] md:flex lg:flex lg:flex-row md:h-auto md:w-full justify-center md:flex-col md:items-center relative sm:top-[80px] top-0 "
      >
        <div className="absolute  top-[120px]  left-[30%] z-1">
          <Fade
            delay={200} // Wait before starting
            duration={1000} // Animation duration
          >
            <img
              className="floter sm:w-[120px] w-[80px] md:left-[300px] h-[80px] sm:h-[120px] relative left-[50px]"
              src={Figma}
              alt=""
            />
            <img
              className=" floter sm:w-[100px] sm:h-[100px] relative md:left-[150px] w-[50px] h-[50px]"
              src={Nodemon}
              alt=""
            />
          </Fade>
        </div>
        <div className="flex sm:mt-0  flex-col text-center sm:items-start items-center sm:text-left sm:w-[450px] md:w-full md:justify-center w-full h-[550px] px-[10px] gap-[55px] sm:ml-[20px] m-0 mt-[180px] ">
          <div className=" sm:flex hidden  items-center text-left gap-[5px] relative sm:bottom-[-10px] bottom-[30px] md:hidden ">
            <img src={check} alt="" />
            <p className="z-1 text-lime-600 relative ">
              UI/UX Designer/FRONTEND/MERNSTACK
            </p>
          </div>

          <Fade
            style={{ fontFamily: "inherit", fontWeight: 600 }}
            className="text-5xl w-[380px] font-serif z-10 text-white"
            duration={700}
            direction="up"
          >
            <h1 className="text-black">Hello, My Name is Aman Reja</h1>
          </Fade>

          <p className="w-[350px] z-10 text-black font-thin">
            Dynamic and detail-oriented MERN developer. Implementing
            user-friendly web applications. Proficient in HTML, CSS, JavaScript,
            and modern frameworks like React.
          </p>
          <div className="sm:w-[400px] w-[350px] sm:px-0 px-[5px] sm:h-[80px] h-[60px] sm:justify-items-normal items-center justify-around flex gap-[5px]">
            <Fade
              delay={200}
              duration={1000}
              fraction={0.5}
              className="sm:w-[200px] text-center w-[180px]  hover:translate-y-[5px] duration-300 transition-all text-black px-[20px] py-[10px] rounded-[5px] bg-[#8965e0] z-1 shadow-2xl"
              direction="down"
            >
              <button>
                <a
                  target="_blank"
                  className="text-white"
                  href="https://www.linkedin.com/in/aman-reja-85527b1a1/ "
                >
                  {" "}
                  Linkedin
                </a>
              </button>
            </Fade>
            <Fade
              delay={200}
              duration={1000}
              className="sm:w-[200px] text-center w-[180px]  hover:translate-y-[5px] duration-300 transition-all text-white px-[20px] py-[10px] rounded-[5px] bg-lime-400 z-1 shadow-2xl"
              direction="right"
            >
              <a
                href={Resume}
                download="Resume"
                onClick={() => {
                  Swal.fire({
                    title: "Thank You!",
                    text: "For downloading my CV",
                    icon: "success",
                  }),
                    sound();
                }}
                style={{ fontFamily: "montserrat" }}
                className=" py-2 z-20  text-white rounded"
              >
                Download CV
              </a>
            </Fade>
          </div>
          <div className=" floter w-[300px] h-[90px] sm:px-0 px-[10px] sm:w-[400px] sm:h-[70px] z-1 bg-amber-300 p-2  text-white rounded-2xl flex flex-row gap-[10px] items-center justify-around">
            <a href="#">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="#fff"
              >
                <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23c12.683,0,23-10.317,23-23S37.683,2,25,2z M32,16h-3.29 C26.772,16,26,16.455,26,17.806V21h6l-1,5h-5v13h-6V26h-3v-5h3v-2.774C20,14.001,21.686,11,26.581,11C29.203,11,32,12,32,12V16z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="#fff"
              >
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
              </svg>
            </a>

            <a
              className="hover:cursor-pointer"
              href="https://github.com/AmanReja"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="#fff"
              >
                <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className=" w-full justify-end flex md:flex  items-center  ">
          <div className="flex flex-col items-center  h-[400px] justify-center">
            <img
              className="sm:w-[300px] lg:w-[280px] sm:h-[300px] object-cover relative top-[180px]"
              src={dev}
              alt=""
            />
            <img
              className="sm:w-[600px] lg:w-[630px] w-[680px] z-20 overflow-visible h-[400px] object-cover"
              src={bax}
              alt=""
            />
          </div>
        </div>
      </div>
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7  md:w-full md:text-center md:flex md:justify-center md:flex-col md:items-center lg:text-left lg:justify-items-start lg:items-start">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
              Awesome features designed to elevate your experience.
            </h1>
            <p className="max-w-2xl   mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Enjoy real-time collaboration, AI-powered tools, and personalized
              settings that adapt to your workflow.
            </p>
            <div className="flex">
              {" "}
              <a
                href="#"
                className=" border hover:bg-red-500 hover:text-white duration-300 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border rounded-lg bg-lime-300"
              >
                Hire Me
              </a>
            </div>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <img
              className="sm:w-[200px] lg:w-full lg:h-full object-cover md:h-full md:w-full sm:h-[200px]"
              src={rob}
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7  md:w-full md:text-center md:flex md:justify-center md:flex-col md:items-center lg:text-left lg:justify-items-start lg:items-start">
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl text-black">
              <span className="text-amber-600">Animated World</span> Breakdown –
              3D Fan Art
            </h1>
            <p className="max-w-2xl   mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              A stylized destruction animation inspired by Minecraft, created
              entirely in Blender. This fan art project showcases dynamic
              physics simulation, camera animation, and lighting techniques to
              bring a voxel-style house collapse to life.
            </p>
          </div>
          <div className=" lg:mt-0 lg:col-span-5  lg:flex">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-[550px] md:w-full rounded-2xl"
            >
              <source src={min} type="video/mp4" />
            </video>
          </div>
        </div>
        {/* <div className="flex justify-center items-center w-full px-2">
          <div className=" w-[700px] lg:mt-2 lg:col-span-5  lg:flex">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-[550px] md:w-full rounded-2xl"
            >
              <source src={flag} type="video/mp4" />
            </video>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Banner;
