"use client";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      title: "What services does BuildHive offer?",
      content: `BuildHive provides complete construction solutions including residential, commercial, and industrial projects. From initial planning and design to final execution, we ensure quality, safety, and precision at every stage.`,
    },
    {
      title: "How does BuildHive ensure project quality?",
      content: `We follow strict quality control processes, use premium materials, and work with experienced engineers and skilled labor. Every project is carefully monitored to meet industry standards and client expectations.`,
    },
    {
      title: "Can BuildHive handle custom construction projects?",
      content: `Yes, we specialize in customized construction solutions. Whether it’s a unique home design or a complex commercial structure, we adapt our approach to match your vision and requirements.`,
    },
    {
      title: "What is the typical project timeline?",
      content: `Project timelines depend on size, complexity, and requirements. However, BuildHive focuses on efficient planning and execution to ensure timely delivery without compromising on quality and safety.`,
    },
    {
      title: "Why choose BuildHive for your construction needs?",
      content: `BuildHive combines innovation, reliability, and craftsmanship to deliver long-lasting structures. Our commitment to transparency, client satisfaction, and modern construction practices sets us apart.`,
    },
  ];

  const text1 = [
    { word: "You've", className: "" },
    { word: "scrolled", className: "" },
    { word: "to", className: "" },
    { word: "the", className: "" },
    { word: "bottom,", className: "" },
    { word: "which", className: "" },
    { word: "indicates", className: "" },
    { word: "you're", className: "text-theme" },
    { word: "genuinely", className: "text-theme" },
    { word: "interested", className: "text-theme" },
    { word: "or", className: "" },
    { word: "perhaps", className: "" },
    { word: "you", className: "" },
    { word: "still", className: "" },
    { word: "have", className: "" },
    { word: "questions", className: "" },
  ];

  return (
    <>
      {/* Top Text */}
      <div className="w-[92%] sm:w-[85%] lg:w-[70%] mx-auto flex flex-col gap-4 lg:mt-16 mt-10 text-center">
        <AnimatedText
          text={text1}
          classname="text-black !text-lg sm:!text-2xl md:!text-3xl lg:!text-4xl"
        />
        <p className="text-black/50 text-sm sm:text-base md:text-lg lg:text-xl">
          Regardless of your answer, here are the most frequently asked questions
        </p>
      </div>

      {/* Accordions */}
      <div className="space-y-4 w-[92%] md:w-[70%] mx-auto my-10">
  {items.map((item, index) => {
    const isActive = activeIndex === index;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-black rounded-xl border border-[#1f2937]"
      >
        {/* Header */}
        <button
          onClick={() => toggleAccordion(index)}
          className="w-full flex items-center justify-between gap-4 p-4 text-left"
        >
          <p className="text-sm sm:text-base md:text-lg font-semibold text-white">
            {item.title}
          </p>

          <div className="min-w-[40px] min-h-[40px] flex items-center justify-center bg-theme rounded-lg">
            <Plus
              className={`w-5 h-5 transition-transform duration-300 ${
                isActive ? "rotate-45" : ""
              }`}
            />
          </div>
        </button>

        {/* Content */}
        <motion.div
          initial={false}
          animate={{
            height: isActive ? "auto" : 0,
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-4 pb-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            {item.content}
          </div>
        </motion.div>
      </motion.div>
    );
  })}
</div>  
    </>
  );
};

export default Accordion;