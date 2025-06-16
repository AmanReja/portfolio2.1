import React from "react";
import fit from "../assets/images/Project images/ui.png";

const Main = () => {
  return (
    <div id="project" className="flex justify-center">
      <div className="w-[992px] flex-col  items-center px-[50px] flex h-auto  relative top-[10px]">
        <div className="w-[200px] h-[50px]  flex flex-col items-center gap-[5px]">
          <h1 className="text-3xl text-center ">Projects</h1>
          <div className="w-[100px] h-[5px] bg-amber-300"></div>
        </div>
        <div className="rounded">
          <div className="flex w-[992px] h-[424px]  rounded-[30px]">
            <div className="w-[50%] h-full  ">
              <img
                className="w-full object-cover h-full rounded-l-2xl"
                src={fit}
                alt=""
              />
            </div>

            <div
              // style={{
              //   clipPath: "polygon(0% 0%, 100% 10%, 75% 100%, 0% 100%)",
              // }}
              className="w-[50%] h-full shadow-2xl rounded-2xl p-[60px] bg-violet-500 "
            >
              <div className="flex flex-col gap-[20px] rounded-l-2xl">
                <h1 className="text-4xl font-serif-[Playfair Display] text-white">
                  Project Name
                </h1>
                <p>
                  I created this personal project in order to show how to create
                  an interface in Figma using a portfolio as an example.
                </p>
                <button className="border hover:shadow-2xl hover:bg-amber-200 h-[40px] w-[200px] rounded-[5px] px-[30px] py-[10px]">
                  View Project
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-[992px] h-[424px] flex-row-reverse ">
            <div className="w-[50%] h-full  ">
              <img
                className="w-full object-cover object-center h-full rounded-r-2xl"
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2t8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
            <div
              // style={{
              //   clipPath: "polygon(15% 0%, 100% 10%, 75% 100%, 0% 100%)",
              // }}
              className="w-[50%] h-full bg-red-500 p-[60px] rounded-l-2xl shadow-2xl "
            >
              <div className="flex flex-col gap-[20px]">
                <h1 className="text-4xl font-serif-[Playfair Display]">
                  Project Name
                </h1>
                <p>
                  I created this personal project in order to show how to create
                  an interface in Figma using a portfolio as an example.
                </p>
                <button className=" border h-[40px] w-[200px] rounded-[5px] px-[30px] py-[10px]">
                  View Project
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-[992px] h-[424px] ">
            <div className="w-[50%] h-full  ">
              <img
                className="w-full object-cover object-center h-full rounded-l-2xl"
                src="https://images.unsplash.com/photo-1529653762956-b0a27278529c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmV8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
            <div
              // style={{
              //   clipPath: "polygon(15% 0%, 100% 10%, 75% 100%, 0% 100%)",
              // }}
              className="w-[50%] h-full  bg-lime-300  p-[60px] rounded-r-2xl shadow-2xl  "
            >
              <div className="flex flex-col gap-[20px] ">
                <h1 className="text-4xl font-serif-[Playfair Display]">
                  Project Name
                </h1>
                <p>
                  I created this personal project in order to show how to create
                  an interface in Figma using a portfolio as an example.
                </p>
                <button className=" border h-[40px] w-[200px] rounded-[5px] px-[30px] py-[10px]">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
