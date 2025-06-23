import React from "react";
import Dev from "../assets/dev.svg";
import Card from "./Card";
import "../App.css";

import profile from "../assets/images/Project images/profile.jpg";

const Features = () => {
  return (
    <>
      <div className=" w-full h-auto">
        <div className="w-full h-auto  flex justify-center items-center">
          <div className="w-full h-auto flex justify-center items-center sm:px-0 px-[2px] relative sm:bottom-0 bottom-[100px] sm:mb-[80px]">
            <img
              className="rounded-full z-20 absolute bottom-[300px] bg-white w-[180px] h-[180px] shadow-2xl object-cover"
              src={profile}
              alt=""
            />

            <div
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 0, 100% 35%, 99% 56%, 75% 78%, 50% 100%, 29% 81%, 0 55%, 0% 35%, 0 0)",
              }}
              className="shadow-2xl bg-gradient-to-bl from-gray-900 to-violet-400 h-[400px] rounded-[20px] sm:w-[400px] w-[300px] flex flex-col items-center z-10 px-[10px] pt-[100px]"
            >
              <div className="w-full flex h-[80px] justify-around mt-[20px]">
                <div className="w-[100px] flex items-center flex-col">
                  <h1 className="text-[25px] font-bold text-white">30</h1>
                  <p className="text-white">Git Repo</p>
                </div>
                <div className="w-[100px] flex items-center flex-col">
                  <h1 className="text-[25px] font-bold text-white">12</h1>
                  <p className="text-white">Review</p>
                </div>
                <div className="w-[100px] flex items-center flex-col">
                  <h1 className="text-[25px] text-white font-bold">4.0</h1>
                  <p className="text-white">Rating</p>
                </div>
              </div>
              <div className="flex flex-col relative bottom-6 items-center justify-center">
                <h1 className="text-[25px] font-bold text-white">College</h1>
                <h1 className="font-thin text-white">
                  Barasat Government College
                </h1>
                <a href="#contact">
                  <button class="cssbuttons-io">
                    <span>
                      <svg
                        class="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                      </svg>
                      Contact Me
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className=" sm:overflow-visible overflow-hidden sm:h-[640px] h-auto flex sm:flex-row flex-col  w-full">
        <div className=" h-full   sm:w-[30%] w-full flex-col items-center sm:place-items-start text-center sm:text-left flex gap-[30px] sm:p-10  sm:pr-[30px]">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="#6434eb"
              class="icon icon-tabler icons-tabler-filled icon-tabler-heart"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
            </svg>
          </div>
          <div className="">
            <h1
              style={{ fontFamily: "montserrat", fontWeight: 500 }}
              className="text-[28px] "
            >
              Awsome features
            </h1>
            <p style={{ fontFamily: "" }} className="font-thin text-[19px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              voluptas exercitationem dolor autem ut minus assumenda debitis
              laboriosam fuga minima expedita culpa?
            </p>
          </div>
          <div className="sm:w-[400px] w-full justify-center sm:items-start items-center  flex  flex-col gap-[15px]">
            <div className="flex  items-center gap-3">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                fill="red"
              >
                <path d="M47.16,21.221l-5.91-0.966c-0.346-1.186-0.819-2.326-1.411-3.405l3.45-4.917c0.279-0.397,0.231-0.938-0.112-1.282 l-3.889-3.887c-0.347-0.346-0.893-0.391-1.291-0.104l-4.843,3.481c-1.089-0.602-2.239-1.08-3.432-1.427l-1.031-5.886 C28.607,2.35,28.192,2,27.706,2h-5.5c-0.49,0-0.908,0.355-0.987,0.839l-0.956,5.854c-1.2,0.345-2.352,0.818-3.437,1.412l-4.83-3.45 c-0.399-0.285-0.942-0.239-1.289,0.106L6.82,10.648c-0.343,0.343-0.391,0.883-0.112,1.28l3.399,4.863 c-0.605,1.095-1.087,2.254-1.438,3.46l-5.831,0.971c-0.482,0.08-0.836,0.498-0.836,0.986v5.5c0,0.485,0.348,0.9,0.825,0.985 l5.831,1.034c0.349,1.203,0.831,2.362,1.438,3.46l-3.441,4.813c-0.284,0.397-0.239,0.942,0.106,1.289l3.888,3.891 c0.343,0.343,0.884,0.391,1.281,0.112l4.87-3.411c1.093,0.601,2.248,1.078,3.445,1.424l0.976,5.861C21.3,47.647,21.717,48,22.206,48 h5.5c0.485,0,0.9-0.348,0.984-0.825l1.045-5.89c1.199-0.353,2.348-0.833,3.43-1.435l4.905,3.441 c0.398,0.281,0.938,0.232,1.282-0.111l3.888-3.891c0.346-0.347,0.391-0.894,0.104-1.292l-3.498-4.857 c0.593-1.08,1.064-2.222,1.407-3.408l5.918-1.039c0.479-0.084,0.827-0.5,0.827-0.985v-5.5C47.999,21.718,47.644,21.3,47.16,21.221z M25,32c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7C32,28.866,28.866,32,25,32z"></path>
              </svg>
              <p className="text-[15px] font-thin">
                Carefully crafted components
              </p>
            </div>
            <div className="flex  items-center gap-3">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="html"
                width={20}
                height={20}
              >
                <path
                  fill="#E44D26"
                  d="M3.345 21.601 1.419 0h21.162l-1.928 21.597L11.987 24l-8.642-2.399z"
                ></path>
                <path
                  fill="#F16529"
                  d="m12 22.164 7.003-1.941L20.65 1.766H12v20.398z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M12 9.778H8.494l-.242-2.713H12V4.416H5.357l.063.71.651 7.301H12V9.778zm0 6.88-.012.003-2.95-.797-.189-2.113H6.19l.371 4.16 5.427 1.506.012-.003v-2.756z"
                ></path>
                <path
                  fill="#FFF"
                  d="M11.991 9.778v2.649h3.262l-.308 3.436-2.955.797v2.756l5.431-1.505.04-.448.623-6.975.065-.711h-.714l-5.444.001zm0-5.362v2.649h6.399l.053-.596.121-1.343.063-.711-6.636.001z"
                ></path>
              </svg>
              <p className="text-[15px] font-thin">Amezing page rendering</p>
            </div>
            <div className="flex  items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                id="phone"
                width="20"
                height="20"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 512 512"
                fill="#5af72f"
              >
                <path
                  id="Icon_6_"
                  d="M358.856 32H153.143C130.512 32 112 50.326 112 72.728v366.545C112 461.674 130.512 480 153.143 480h205.713C381.488 480 400 461.674 400 439.272V72.728C400 50.326 381.488 32 358.856 32zM364 400H148V112h216v288z"
                ></path>
              </svg>
              <p className="text-[15px] font-thin">Responsive Layouts</p>
            </div>
          </div>
        </div>
        <div className="  h-full flex justify-center sm:w-[70%] w-full ">
          <div className="h-[100%]  sm:w-[100%] w-full flex flex-wrap p-3  justify-center gap-[30px]">
            <div className="w-[280px] sky-dv p-6 flex flex-col gap-[20px] rounded-[5px] shadow-xl h-[300px] bg-fuchsia-600">
              <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">
                <svg
                  fill="fuchsia"
                  height="40px"
                  width="40px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512.001 512.001"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <g>
                        <path
                          d="M509.618,404.733l-85.514-148.121c-2.302-3.987-8.06-3.847-10.229,0.213c-24.796,46.415-68.181,78.769-118.101,90.055
				c-3.825,0.865-5.7,5.207-3.74,8.603l75.727,131.163c7.476,12.949,26.64,11.149,31.661-2.842l23.488-65.441l68.417,12.37
				C505.976,433.379,517.065,417.632,509.618,404.733z"
                        />
                        <path
                          d="M216.227,346.881c-49.937-11.291-93.316-43.662-118.101-90.055c-2.169-4.061-7.927-4.2-10.229-0.214L2.382,404.733
				c-7.441,12.888,3.632,28.647,18.289,26l68.417-12.37l23.488,65.441c5.021,13.986,24.184,15.794,31.661,2.842l75.727-131.163
				C221.926,352.086,220.052,347.745,216.227,346.881z"
                        />
                        <path
                          d="M400.821,229.56v-0.001c18.976-47.929,12.966-102.055-16.077-144.789C322.965-6.137,189.025-6.112,127.267,84.761
				c-29.048,42.743-35.063,96.872-16.088,144.799C163.147,360.791,349.099,360.177,400.821,229.56z M341.591,168.333l-30.086,29.325
				l7.102,41.409c2.47,14.403-12.702,25.159-25.42,18.469L256,237.986l-37.188,19.551c-12.825,6.743-27.871-4.177-25.42-18.469
				l7.102-41.409l-30.086-29.325c-10.376-10.116-4.639-27.798,9.709-29.882l41.577-6.042l18.593-37.675
				c6.413-12.996,25.004-13.003,31.421,0l18.593,37.675l41.577,6.042C346.221,140.534,351.973,158.212,341.591,168.333z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <h1
                style={{ fontFamily: "montserrat" }}
                className="font-bold text-2xl text-white"
              >
                Best Quality
              </h1>
              <p className="font-thin text-white">
                I craft high-quality, scalable code with attention to detail and
                performance. Every project reflects my commitment to excellence
                and clean architecture.
              </p>
            </div>
            <div className="w-[280px] p-6 flex flex-col gap-[20px] floter duration-75 h-[300px] rounded-[5px] sm:translate-y-[-50px] sm:translate-x-[-50px] bg-red-500">
              <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">
                <svg
                  fill="#eb4034"
                  height="40px"
                  width="40px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256c28.276,0,51.2-22.922,51.2-51.2V358.4
			c0-28.278,22.924-51.2,51.2-51.2h102.4c28.276,0,51.2-22.922,51.2-51.2C512,114.615,397.385,0,256,0z M82.906,209.619
			c5.489-20.485,26.545-32.641,47.03-27.153s32.643,26.545,27.153,47.03c-5.489,20.485-26.545,32.641-47.03,27.153
			C89.574,251.16,77.417,230.104,82.906,209.619z M183.593,382.714c-14.998,14.995-39.311,14.994-54.307,0
			c-14.996-14.998-14.996-39.31,0-54.308c14.995-14.995,39.309-14.995,54.307,0C198.587,343.402,198.587,367.716,183.593,382.714z
			 M229.496,157.089c-20.483,5.489-41.54-6.668-47.03-27.153c-5.487-20.485,6.668-41.542,27.151-47.032
			c20.486-5.489,41.542,6.67,47.034,27.154C262.138,130.543,249.983,151.599,229.496,157.089z M382.715,183.594
			c-14.996,14.995-39.31,14.996-54.308-0.001c-14.995-14.995-14.995-39.31,0-54.305c14.998-14.996,39.311-14.998,54.307-0.003
			C397.71,144.283,397.71,168.596,382.715,183.594z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <h1
                style={{ fontFamily: "montserrat" }}
                className="font-bold text-2xl text-white"
              >
                Awesome Design
              </h1>
              <p className="font-thin text-white">
                I create visually stunning, user-friendly interfaces that
                elevate user experience. Every design blends creativity with
                functionality for lasting impact.
              </p>
            </div>
            <div className="w-[280px] p-6 flex flex-col gap-[20px] h-[300px] rounded-[5px] sm:translate-x-[-100px] bg-gray-800">
              <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">
                <svg
                  width="38px"
                  height="38px"
                  viewBox="0 0 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="xMidYMid"
                >
                  <g>
                    <path
                      d="M227.314286,0 L28.6857143,0 C12.9714286,0 0,12.9714286 0,28.6857143 L0,227.314286 C0,243.028571 12.9714286,256 28.6857143,256 L227.314286,256 C243.028571,256 256,243.028571 256,227.314286 L256,28.6857143 C256,12.9714286 243.028571,0 227.314286,0 Z M201.371429,162.457143 C201.371429,164.857143 199.314286,165.885714 196.914286,166.914286 C187.371429,171.028571 177.142857,174.742857 166.171429,174.742857 C150.8,174.742857 143.657143,165.2 125.2,165.2 C111.885714,165.2 97.8857143,170 86.6285714,175.085714 C85.9428571,175.428571 85.2571429,175.428571 84.5714286,175.771429 L84.5714286,201.714286 C84.5714286,202.742857 84.5714286,203.771429 84.2285714,204.457143 L84.2285714,205.142857 C82.8571429,209.942857 78.4,213.314286 73.3142857,213.314286 C66.8571429,213.314286 61.7142857,208.171429 61.7142857,201.714286 L61.7142857,76.8 C57.2571429,73.3714286 54.2285714,67.9428571 54.2285714,61.7714286 C54.2285714,51.2 62.7428571,42.6285714 73.3714286,42.6285714 C83.9428571,42.6285714 92.5142857,51.1428571 92.5142857,61.7714286 C92.5142857,67.9428571 89.7714286,73.3714286 85.0285714,76.8 L85.0285714,87.3714286 C86.0571429,87.0285714 87.0857143,86.6857143 88.1142857,86 C98.6857143,81.5428571 111.314286,77.8285714 123.257143,77.8285714 C136.228571,77.8285714 146.457143,81.2571429 158.057143,85.6571429 C160.457143,86.6857143 162.857143,87.0285714 165.542857,87.0285714 C178.514286,87.0285714 192.857143,77.8285714 196.285714,77.8285714 C199.028571,77.8285714 201.428571,79.8857143 201.428571,82.2857143 L201.428571,162.457143 L201.371429,162.457143 Z"
                      fill="#000"
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </svg>
              </div>
              <h1
                style={{ fontFamily: "montserrat" }}
                className="font-bold text-2xl text-white"
              >
                Grate performance
              </h1>
              <p className="font-thin text-white">
                My applications are optimized for speed, responsiveness, and
                seamless functionality.
              </p>
            </div>

            <div className="w-[280px] p-6 flex flex-col gap-[20px] h-[300px] rounded-[5px] bg-violet-800">
              <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">
                <svg
                  height="40px"
                  width="40px"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  fill="#6b2af7"
                >
                  <style type="text/css"></style>
                  <g>
                    <path
                      class="st0"
                      d="M255.996,0.004C114.624,0.004,0,114.627,0,256c0,141.373,114.624,255.996,255.996,255.996
		C397.377,511.996,512,397.373,512,256C512,114.627,397.377,0.004,255.996,0.004z M401.892,258.586l-128.849,76.921
		c-0.922,0.546-2.094,0.578-3.047,0.015c-0.929-0.515-1.508-1.515-1.508-2.625v-58.265l-101.974,60.874
		c-0.922,0.546-2.094,0.578-3.047,0.015c-0.914-0.515-1.508-1.515-1.508-2.625v-76.889v-76.921c0-1.078,0.594-2.094,1.508-2.625
		c0.954-0.546,2.125-0.515,3.047,0.031l101.974,60.874v-58.281c0-1.078,0.578-2.094,1.508-2.625
		c0.954-0.546,2.126-0.515,3.047,0.031l128.849,76.921c0.922,0.515,1.469,1.531,1.469,2.594
		C403.361,257.07,402.814,258.054,401.892,258.586z"
                    />
                  </g>
                </svg>
              </div>
              <h1
                style={{ fontFamily: "montserrat" }}
                className="font-bold text-2xl text-white"
              >
                Fast Development
              </h1>
              <p className="font-thin text-white">
                I deliver projects with rapid turnaround without compromising
                quality. Leveraging modern tools and frameworks.
              </p>
            </div>
            <div className="w-[280px] p-6 flex flex-col gap-[20px]  h-[300px] sm:translate-y-[-50px] sm:translate-x-[-50px] rounded-[5px] bg-orange-500">
              <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">
                <svg
                  fill="#f7722a"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="40px"
                  height="40px"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <g id="5151e0c8492e5103c096af88a51eea86">
                    <path
                      display="inline"
                      d="M489.893,354.61c-1.497-2.021-3.843-4.861-6.504-7.59c-27.663-28.39-48.33-61.907-59.479-99.042
		c-0.503-1.732-1.019-3.452-1.472-5.182c-0.479-1.745-0.898-3.524-1.335-5.288c-8.899-37.706-7.814-77.089,2.004-115.486
		c0,0,1.493-6.344,1.88-8.964c8.242-48.507-21.633-96.222-70.113-109.215C305.47-9.393,254.819,18.316,238.671,66.11
		c-0.669,1.784-2.021,6.288-2.046,6.36c-10.625,37.641-29.076,71.826-55.15,99.8c-29.6,31.094-67.264,53.192-109.473,64.497
		C20.573,250.551-9.979,303.506,3.81,354.951c13.794,51.433,66.666,81.978,118.123,68.179c38.404-9.801,77.79-10.907,115.499-1.996
		c1.759,0.438,3.522,0.869,5.277,1.344c1.755,0.457,3.493,0.978,5.24,1.472c37.115,11.137,70.674,31.792,99.023,59.484
		c3.484,3.484,6.495,5.938,9.307,7.917c38.108,29.044,92.336,26.814,127.089-7.917C518.632,448.177,520.67,392.478,489.893,354.61z
		 M371.823,305.299c-13.498,50.347-65.247,80.234-115.606,66.731c-50.344-13.478-80.227-65.247-66.736-115.599
		c13.494-50.35,65.247-80.227,115.591-66.738C355.435,203.189,385.318,254.936,371.823,305.299z"
                    ></path>
                  </g>
                </svg>
              </div>
              <h1
                style={{ fontFamily: "montserrat" }}
                className="font-bold text-2xl text-white"
              >
                Super Fresh
              </h1>
              <p className="font-thin text-white">
                Designs that feel modern, clean, and visually refreshing. I
                craft interfaces that breathe life into every pixel.
              </p>
            </div>
            <div className="w-[280px]  p-6 flex flex-col gap-[20px] h-[300px] rounded-[5px] sm:translate-x-[-100px] floter duration-500 bg-green-500">
              <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">
                <svg
                  fill="#2df72a"
                  width="40px"
                  height="40px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 17.421v-1.339c0-0.837 0.339-1.676 1.172-2.009l10.391-6.537c0.667-0.333 1.005-1.172 1.005-2.009v-5.527l-12.568 8.041-12.568-8.041v16.921c0 4.527 2.016 8.376 5.36 10.552l7.041 4.527 7.041-4.527c3.349-2.009 5.36-5.859 5.36-10.552v-7.541z" />
                </svg>
              </div>
              <h1
                style={{ fontFamily: "montserrat" }}
                className="font-bold text-2xl text-white"
              >
                Organized Content
              </h1>
              <p className="font-thin text-white">
                Every element is structured for clarity and purpose. I design
                with focus, making content easy to navigate and understand.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
