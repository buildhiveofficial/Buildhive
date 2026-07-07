"use client";
import React from "react";
import { Star } from "lucide-react";
import AnimatedText from "./AnimatedText";
import Avatar from "./Avatar";

const testimonials = {
  design: [
    {
      name: "Ahmed Khan",
      content:
        "BuildHive transformed our vision into a stunning architectural masterpiece. Their design team delivered creativity and functionality beyond expectations.",
    },
    {
      name: "Ali Raza",
      content:
        "The interior architecture and planning process was seamless. Every detail reflected professionalism and innovation.",
    },
    {
      name: "Usman Tariq",
      content:
        "Exceptional residential design services. The final concept perfectly balanced aesthetics and practicality.",
    },
    {
      name: "Hassan Ali",
      content:
        "Their landscape and urban planning solutions added tremendous value to our development project.",
    },
    {
      name: "Bilal Ahmed",
      content:
        "BuildHive's architecture team delivered exactly what we imagined with outstanding attention to detail.",
    },
  ],

  build: [
    {
      name: "Muhammad Ahmad",
      content:
        "Build Hive transformed our dream home into reality with exceptional craftsmanship and attention to detail.",
    },
    {
      name: "Azeem Shah",
      content:
        "Working with Build Hive was a seamless experience. Their construction quality was outstanding.",
    },
    {
      name: "Syed Ahmad",
      content:
        "Build Hive provided us with innovative construction solutions and flawless execution.",
    },
    {
      name: "Muhammad Nouman",
      content:
        "The team delivered our commercial project with precision and professionalism.",
    },
    {
      name: "Safdar Ali",
      content:
        "From consultation to final handover, everything was handled smoothly and professionally.",
    },
  ],

  grow: [
    {
      name: "Hassan Digital",
      content:
        "Our online presence doubled within months thanks to BuildHive's branding and marketing team.",
    },
    {
      name: "Bilal Agency",
      content:
        "The AI content strategy helped us generate more leads than ever before.",
    },
    {
      name: "Saqib Malik",
      content:
        "BuildHive completely transformed our brand identity and website experience.",
    },
    {
      name: "Muneeb Khan",
      content:
        "SEO and advertising campaigns delivered measurable growth and consistent results.",
    },
    {
      name: "Adeel Ahmed",
      content:
        "Their AI-powered content creation gave our business a significant competitive advantage.",
    },
  ],
};

const headings = {
  design: [
    { word: "Design", className: "text-theme" },
    { word: "Testimonials", className: "text-black" },
  ],
  build: [
    { word: "Build", className: "text-theme" },
    { word: "Testimonials", className: "text-black" },
  ],
  grow: [
    { word: "Grow", className: "text-theme" },
    { word: "Testimonials", className: "text-black" },
  ],
};

export default function Cards({ activePillar }) {
  const cards = testimonials[activePillar] || testimonials.design;
  const currentHeading = headings[activePillar] || headings.design;

  return (
    <>
      <div className="w-[90%] lg:w-[70%] mx-auto flex flex-col gap-10 my-10">
        <AnimatedText
          text={currentHeading}
          classname={"text-white"}
        />

        <p className="text-[#979f90] text-sm lg:text-xl text-center">
          Real results. Real clients. Here’s what people say after working with
          us — because actions speak louder than promises.
        </p>
      </div>

      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-black rounded-3xl p-8 border border-zinc-800 hover:border-theme transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-6 right-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-theme text-theme"
                  />
                ))}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-theme">
                  <Avatar name={card.name} />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-theme">
                  {card.name}
                </h3>
              </div>

              <p className="text-gray-300 leading-7 text-base md:text-lg">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}