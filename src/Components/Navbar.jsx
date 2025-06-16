import { React, useState, useContext } from "react";
// import Theme from "./Context/Theme";
// import { a, Nava } from "react-router-dom";

function Navbar({ themeHandel }) {
  // const value = useContext(Theme);
  const [open, setOpen] = useState(true);
  const handelopen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={"bg-white shadow-2xl z-30 fixed w-full  top-0 start-0 nav "}
      >
        <div className="flex w-[200px] flex-row items-center justify-center absolute top-[15px] sm:left-0 left-[25%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            id="angular"
            width={40}
            height={40}
          >
            <path
              fill="#F44336"
              d="M21.317,18.755L23,3.986L12,0L1,3.986l1.684,14.769L12,24L21.317,18.755L21.317,18.755z M7.692,18.311H5.114L12,2.651l6.892,15.66h-2.573l-1.387-3.504H9.079L7.692,18.311L7.692,18.311z"
            ></path>
            <polygon
              fill="#F44336"
              points="9.983 12.648 14.017 12.648 12 7.741 9.983 12.648"
            ></polygon>
            <polygon
              fill="#DEDEDE"
              points="12 2.651 5.114 18.311 7.692 18.311 9.079 14.807 12 14.807 12 12.648 9.983 12.648 12 7.741 12 2.651"
            ></polygon>
            <polygon
              fill="#D43A2F"
              points="12 0 1 3.986 2.684 18.755 12 24 12 14.807 9.079 14.807 7.692 18.311 5.114 18.311 12 2.651 12 0"
            ></polygon>
            <polygon
              fill="#D43A2F"
              points="12 7.741 9.983 12.648 12 12.648 12 7.741"
            ></polygon>
          </svg>
          <h1 style={{ fontFamily: "montserrat" }} className="text-2xl">
            Aman Reja
          </h1>{" "}
        </div>

        <button className="inline-flex  sm:p-2 font-bold bg-amber-400 duration-700 text-[20px] hover:bg-red-500 text-white sm:px-[30px] items-center cursor-pointer absolute top-[8px] gap-[5px] border-amber-600 rounded-[20px] sm:right-[100px] right-[20px]">
          <a className="" href="tel:9749404582">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              id="phone"
            >
              <defs>
                <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                  <stop offset="0%" stop-color="#86FC6F"></stop>
                  <stop offset="100%" stop-color="#0CD419"></stop>
                </linearGradient>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <circle cx="20" cy="20" r="20" fill="url(#a)"></circle>
                <path
                  fill="#FFF"
                  d="M23.1179863,24.9844003 C22.7849875,25.1958537 22.3681546,25.2262713 22.0079863,25.0654003 C21.2939863,24.6694003 19.9919863,23.7244003 18.1859863,21.9184003 C16.3799863,20.1124003 15.3509863,18.7234003 14.9519863,18.0184003 C14.7911153,17.658232 14.8215329,17.2413991 15.0329863,16.9084003 L16.0709863,15.0904003 C16.4429863,14.4454003 16.5269863,14.0374003 16.1219863,13.4104003 L13.4549863,9.32740033 C12.6959863,8.12740033 12.3089863,8.18140033 11.6549863,8.48140033 C8.25298626,10.0294003 6.92398626,12.2194003 11.7509863,19.8424003 C13.0529863,21.8974003 17.0309863,26.2474003 20.4239863,28.4494003 C27.6899863,33.1684003 30.0809863,31.7494003 31.4999863,28.4494003 C31.7999863,27.7834003 31.9319863,27.3964003 30.7889863,26.6494003 L26.6609863,24.0244003 C26.0339863,23.6224003 25.7279863,23.5174003 25.0799863,23.8924003 L23.1179863,24.9844003 Z"
                ></path>
              </g>
            </svg>{" "}
          </a>

          <a className="sm:flex hidden" href="tel:9749404582">
            {" "}
            Quick Talk
          </a>
        </button>
        <div
          className={
            "max-w-[334px] sm:max-w-screen-xl flex flex-wrap rounded-[10px] items-center w-[500px] bg-white  justify-center mx-auto p-4 transition-all duration-300"
          }
        >
          <div
            onClick={handelopen}
            className={`bg-lime-400 py-[3px] px-[2px] rounded flex sm:hidden flex-col  h-[30px] transition-all 
             gap[9px] left-[-134px] relative items-center justify-between`}
          >
            <div
              className={
                open
                  ? "bg-white w-[30px] h-[2px]  duration-300"
                  : "bg-white w-[30px] h-[2px] rotate-45 relative top-[15px]  duration-300"
              }
            ></div>
            <div
              className={open ? "bg-white w-[30px] h-[2px]" : "invisible"}
            ></div>
            <div
              className={
                open
                  ? "bg-white w-[30px] h-[2px]  duration-300"
                  : "bg-white w-[30px] h-[2px] -rotate-45 relative bottom-[15px] duration-300"
              }
            ></div>
          </div>
          <div
            className={`items-center justify-between ${
              open ? "hidden" : ""
            } w-full md:flex md:w-auto md:order-1 transition-all duration-300`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a
                  onClick={() => {
                    setOpen(true);
                  }}
                  href="#home"
                  className={`block py-2 px-3  hover:text-violet-600 duration-300 
                   
        `}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setOpen(true);
                  }}
                  href="#skills"
                  className={`block py-2 px-3 hover:text-lime-400 duration-300`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setOpen(true);
                  }}
                  href="#projects"
                  className={`block py-2 px-3  hover:text-red-500 duration-300 
              `}
                >
                  Projectes
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setOpen(true);
                  }}
                  href="#contact"
                  className={`block py-2 px-3  hover:text-sky-600 duration-300 `}
                >
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
