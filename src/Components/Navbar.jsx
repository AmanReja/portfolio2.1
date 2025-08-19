import { React, useState, useContext } from "react";
// import Theme from "./Context/Theme";
// import { a, Nava } from "react-router-dom";

function Navbar({ themeHandel }) {
  // const value = useContext(Theme);
  const [open, setOpen] = useState(false);
  const handelopen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={40}
              height={40}
            >
              <path
                fill="#F44336"
                d="M21.317,18.755L23,3.986L12,0L1,3.986l1.684,14.769L12,24L21.317,18.755L21.317,18.755z M7.692,18.311H5.114L12,2.651l6.892,15.66h-2.573l-1.387-3.504H9.079L7.692,18.311L7.692,18.311z"
              ></path>
            </svg>
            <h1
              style={{ fontFamily: "montserrat" }}
              className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
            >
              Aman Reja
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            {["Home", "Skills", "Projects", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative group text-gray-700 hover:text-violet-600 transition"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-violet-600 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Call Button */}
          <a
            href="tel:9749404582"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            📞 Quick Talk
          </a>

          {/* Mobile Toggle */}
          <div
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={handelopen}
          >
            <span
              className={`h-1 w-6 bg-black rounded transition ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-6 bg-black rounded transition ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-6 bg-black rounded transition ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg border-t border-gray-200">
            <ul className="flex flex-col items-center gap-4 py-4">
              {["Home", "Skills", "Projects", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-medium text-gray-700 hover:text-violet-600 transition"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <a
                href="tel:9749404582"
                className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold shadow-md hover:scale-105 transition"
              >
                📞 Quick Talk
              </a>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
