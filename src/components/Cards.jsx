"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, Star } from "lucide-react";
// import { Rating } from "primereact/rating";
import AnimatedText from "./AnimatedText";
import Avatar from "./Avatar";

const cards = [
  {
    name: "Muhammad Ahmad",
    content:
      "Build Hive transformed our dream home into reality with exceptional craftsmanship and attention to detail. Their team handled everything professionally, from planning to execution, and delivered beyond our expectations.",
  },
  {
    name: "Azeem Shah",
    content:
      "Working with Build Hive was a seamless experience. Their architectural designs were modern and practical, and the construction quality was outstanding. Highly recommended for anyone looking for reliable builders.",
  },
  {
    name: "Syed Ahmad",
    content:
      "Build Hive provided us with innovative design solutions and flawless construction services. Their expertise, transparency, and commitment to deadlines made the entire project stress-free.",
  },
  {
    name: "Muhammad Nouman",
    content:
      "The team at Build Hive delivered our commercial project with precision and professionalism. Their attention to quality and timely completion truly sets them apart in the construction industry.",
  },
  {
    name: "Safdar Ali",
    content:
      "Build Hive exceeded our expectations with their dedication and work ethic. From initial consultation to final handover, everything was handled smoothly. Highly professional and trustworthy team!",
  },
];
const text1 = [
  { word: "Client", className: " text-theme" },
  { word: "testimonials", className: "text-black" },
];

export default function Cards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <>
      {/* text-------------- */}
      <div className="w-[90%] lg:w-[70%] mx-auto flex flex-col gap-10 md:my-10 my-8 ">
        <AnimatedText text={text1} classname={"text-white"} />
        <p className="text-[#979f90] text-sm lg:text-xl text-center">
          Real results. Real clients. Here’s what people say after working with
          me — because actions speak louder than promises.
        </p>
      </div>
      <div className="relative pl-2 sm:pl-0 overflow-hidden ">
        {/* upworkleft----------------- */}
        <div className="absolute top-0 left-40 hidden lg:block">
          {["B", "U", "I", "L", "D"].map((letter, index) => (
            <div
              key={index}
              className="text-7xl font-extrabold text-transparent my-2 relative"
              style={{
                textShadow:
                  "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
              }}
            >
              {letter}
              <div
                className="absolute inset-0 text-transparent"
                style={{
                  textShadow: "none",
                  WebkitTextStroke: "2px #f14e11",
                }}
              >
                {letter}
              </div>
            </div>
          ))}
        </div>
        {/* cards--------------- */}
        <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[45%] sm:mx-auto h-[300px] md:h-[500px]">
          {cards.map((card, index) => {
            const offset = (index - currentIndex + cards.length) % cards.length;
            return (
              <div
                key={index}
                className={`absolute w-full h-full transition-all duration-300 ease-in-out rounded-3xl overflow-hidden shadow-lg  bg-black p-5 md:p-9 lg:p-11`}
                style={{
                  transform: `translateX(${offset * 10}%) scale(${
                    1 - Math.abs(offset) * 0.1
                  })`,
                  zIndex: cards.length - Math.abs(offset),
                  opacity: 1 - Math.abs(offset) * 0.3,
                }}
              >
                <div className="flex mt-1 gap-5 items-center justify-center">
                  <div className=" border-2 overflow-hidden rounded-full border-theme w-14 h-14">
                    <Avatar name={card.name} />
                  </div>
                  <p className="text-theme font-bold text-lg md:text-3xl lg:text-3xl xl:text-4xl">
                    {card.name}
                  </p>
                </div>
                <p className="text-white mt-3 text-center text-xs md:text-left md:text-xl  xl:text-3xl md:mt-6 flex flex-col items-center">
                  {card.content}
                </p>

                   <div className="flex absolute top-5 right-3 gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={15}
          className={
            i < 5
              ? "fill-theme text-theme"
              : "text-gray-400"
          }
        />
      ))}
    </div>
              </div>
            );
          })}
        </div>
        <div className="absolute top-0 right-40 hidden lg:block">
          {["H","I","V","E"].map((letter, index) => (
            <div
              key={index}
              className="text-7xl font-extrabold text-transparent my-2 relative"
              style={{
                textShadow:
                  "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
              }}
            >
              {letter}
              <div
                className="absolute inset-0 text-transparent"
                style={{
                  textShadow: "none",
                  WebkitTextStroke: "2px #f14e11",
                }}
              >
                {letter}
              </div>
            </div>
          ))}
        </div>
        {/* button------------------ */}
        <div className=" justify-center gap-11 flex my-10 text-white">
          <button
            variant="outline"
            size="icon"
            className="bg-theme bg-opacity-50 hover:bg-opacity-75 transition-opacity rounded-lg"
            onClick={prevCard}
          >
            <ChevronLeftIcon className="size-6 md:size-9" />
          </button>
          <button
            variant="outline"
            size="icon"
            className="bg-theme bg-opacity-50 hover:bg-opacity-75 transition-opacity rounded-lg"
            onClick={nextCard}
          >
            <ChevronRightIcon className="size-6 md:size-9" />
          </button>
        </div>
      </div>
    </>
  );
}
