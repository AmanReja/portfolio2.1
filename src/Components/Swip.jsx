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
    <div className="flex justify-center items-center py-16 bg-white">
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
              style={{
                background: `linear-gradient(135deg, ${card.color}, #1e1e2f)`,
              }}
              className="cursor-pointer rounded-2xl p-6 h-full flex flex-col justify-between
                     shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2
                     backdrop-blur-md bg-opacity-80"
            >
              {/* Top Section */}
              <div className="flex min-h-[150px] flex-col items-center mb-6 gap-4">
                <div className="relative">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="h-16 w-16 rounded-full object-cover ring-4 ring-white shadow-lg"
                  />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 ring-2 ring-white"></span>
                </div>
                <div className="text-center">
                  <h5 className="text-xl font-bold text-white tracking-wide">
                    {card.name}
                  </h5>
                  <p className="text-xs text-gray-200 uppercase font-semibold">
                    {card.profile}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-100 leading-relaxed italic">
                "{card.description}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swip;
