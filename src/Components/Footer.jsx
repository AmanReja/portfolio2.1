import { React, useState, useEffect } from "react";
import "../App.css";
import Swal from "sweetalert2";

const Footer = () => {
  const [offset, setOffset] = useState(176); // 176 is full circle (2 * π * r)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollTop / docHeight;
      const circleOffset = 176 - 176 * scrolled; // 176 = 2πr for r=28
      setOffset(circleOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative bg-violet-600 overflow-hidden">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Let's Stay Connected
          </h2>
          <p className="mb-6 text-base text-indigo-200 md:text-lg">
            Subscribe to get updates on my latest projects, tech articles,
            open-source contributions, and more directly to your inbox.
          </p>
          <form className="flex text-black flex-col items-center w-full mb-4 md:flex-row md:px-16">
            <input
              placeholder="Email"
              required
              type="text"
              className="flex-grow text-black placeholder:text-black w-full h-12 px-4 mb-3 bg-white  transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
            />
            <a
              onClick={() => {
                Swal.fire({
                  title: "Hey There",
                  text: "Plese contact at 9749404582",
                  icon: "success",
                });
              }}
              className="cursor-pointer inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
            >
              Subscribe
            </a>
          </form>
          <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
            Built with ❤️ by Aman Reja — Passionate about building elegant
            digital experiences.
          </p>
          <a
            href="/"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              viewBox="0 0 12 12"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
            </svg>
          </a>
        </div>
        <div className="fixed  bottom-6 right-6 z-50">
          <svg fill="#fff" className="w-16 h-16 transform rotate-[-90deg]">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="#fff"
              strokeWidth="4"
              fill={length}
            />

            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="red"
              strokeWidth="8"
              fill="none"
              strokeDasharray="176"
              strokeDashoffset={offset}
              id="scroll-circle"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
