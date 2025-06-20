import React from "react";
import Srk from "../assets/images/Project images/srk.jpg";
import apj from "../assets/images/Project images/apj.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Swip = () => {
  const cards = [
    {
      name: "Shahrukh Khan",
      profile: "Actor",
      image: Srk,
      description:
        "The business website exceeded my expectations! Sleek, modern, and incredibly user-friendly. It truly reflects my brand with attention to detail and technical precision.",
      color: "#f59c16",
    },
    {
      name: "Bill Gates",
      profile: "Engineer",
      image: "https://wallpapercave.com/wp/wp12612747.jpg",
      description:
        "React Native app built perfectly! Smooth user experience on both iOS and Android. Excellent technical execution and performance. Highly recommend this developer.",
      color: "#f5163f",
    },
    {
      name: "Elon Musk",
      profile: "Software Developer",
      image:
        "https://wallpapers.com/images/high/elon-musk-background-bqss7x66859br5gr.webp",
      description:
        "Built a real-time tracking system using MERN & Socket.IO. The system is robust, scalable, and delivers exactly what we needed.Highly recommend this developer.",
      color: "#f56b16",
    },
    {
      name: "APJ Abdul Kalam",
      profile: "Scientist",
      image: apj,
      description:
        "One of the most respectful developers I’ve worked with. The level of dedication and execution was outstanding. Would recommend without hesitation.",
      color: "#ab16f5",
    },
  ];

  return (
    <div className="flex justify-center items-center py-16 bg-white ">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-7xl px-6"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ backgroundColor: `${card.color}` }}
              className={`cursor-pointer shadow-2xl rounded-2xl p-6 h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex min-h-[150px] flex-col items-center mb-4 gap-4">
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <h5 className="text-lg font-bold text-white">{card.name}</h5>
                  <p className="text-xs text-white uppercase font-bold">
                    {card.profile}
                  </p>
                </div>
              </div>
              <p className="text-sm  leading-relaxed text-white">
                {card.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swip;
