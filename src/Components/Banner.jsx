import React, { useEffect, useState } from "react";
import Logo from "../assets/images/image.png";
import Cl from "../assets/images/cl.png";
import World from "../assets/images/w.png";
import "../App.css";
import Dev from "../assets/dev.svg";
import Fb from "../assets/images/fb.png";
import Wav from "../assets/wav.svg";
import Figma from "../assets/figma.svg";
import Nodemon from "../assets/nodemon.svg";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";

const Banner = () => {
  const [rotation, setRotation] = useState(0);

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
      <br />
      <br />
      <br />

      <div
        id="home"
        className="w-full h-[1050px] sm:h-[600px] flex sm:flex-row flex-col container "
      >
        <div className="absolute  top-[120px]  left-[30%] z-1">
          <Fade
            delay={200} // Wait before starting
            duration={1000} // Animation duration
          >
            <img
              className="floter sm:w-[120px] w-[50px] h-[50px] sm:h-[120px] relative left-[50px]"
              src={Figma}
              alt=""
            />
            <img
              className=" floter sm:w-[100px] sm:h-[100px] w-[60px] h-[60px]"
              src={Nodemon}
              alt=""
            />
          </Fade>
        </div>
        <div className="sm:pt-0 pt-[140px]  flex flex-col text-center sm:items-start items-center sm:text-left sm:w-[450px] w-full h-[550px] px-[30px] gap-[55px] sm:ml-[20px] m-0 mt-[20px]">
          <p className="z-1 text-yellow-300">
            UI/UX Designer/FRONTEND/MERNSTACK
          </p>
          <Fade duration={700} direction="left">
            <h1
              style={{ fontFamily: "inherit", fontWeight: 600 }}
              className="text-5xl w-[380px] font-serif z-20 text-white"
            >
              Hello, My Name is Aman Reja
            </h1>
          </Fade>

          <p className="w-[350px] z-1 text-white font-thin">
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
          <div className="sm:w-[400px] w-[380px] sm:justify-items-normal justify-between flex gap-[10px]">
            <Fade
              delay={200}
              duration={1000}
              fraction={0.5}
              className="sm:w-[200px] text-center w-[180px]  hover:translate-y-[5px] duration-300 transition-all text-white px-[20px] py-[10px] rounded-[5px] bg-[#8965e0] z-1 shadow-2xl"
              direction="down"
            >
              <button>
                <a
                  target="_blank"
                  className=""
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
              <button
                onClick={() => {
                  Swal.fire({
                    title: "Thank You!",
                    text: "Hope This Resume Will Touch Your Hart",
                    icon: "success",
                  });
                }}
              >
                <a
                  style={{ fontFamily: "montserrat" }}
                  className=""
                  href="#project "
                >
                  {" "}
                  Download CV
                </a>
              </button>
            </Fade>
          </div>
          <div className=" floter w-[380px] h-[90px]  sm:w-[400px] sm:h-[70px] z-1 bg-amber-300 p-2  text-white rounded-2xl flex flex-row gap-[10px] items-center justify-around">
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
          </div>
        </div>

        <div className="flex sm:bottom-0 bottom-[50px] flex-col opacity-[0.8] sm:w-[700px] bg-cover w-full h-[550px] px-[30px] gap-[35px] ml-[20px] mt-[20px] relative sm:left-[30%]">
          <img
            src={Fb}
            alt="world"
            // style={{
            //   transform: `rotate(${rotation}deg)`,
            //   transition: "transform 0.7s linear",
            // }}
            className="absolute rotate-[6deg] sm:w-[900px] w-[100%] h-[400px] sm:h-[600px] sm:translate-x-[-30%] sm:translate-y-[32px] z-2 object-cover sm:rotate-[3deg]"
          />
          <img
            className="z-1 sm:w-[500px] w-[100px] hidden sm:flex h-[100px] sm:h-[600px] object-cover"
            src={Cl}
            alt="cl"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
