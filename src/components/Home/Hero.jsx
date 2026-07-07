"use client";

import { motion, AnimatePresence } from "framer-motion";

const content = {
  design: {
    tag: "DESIGN",
    title: "Shape Ideas Into\nIconic Spaces",
    desc: "Residential, Commercial, Industrial, Interior and Landscape Architecture crafted for modern living.",
    image: "/home/design.jpeg",
  },

  build: {
    tag: "BUILD",
    title: "Construct With\nPrecision",
    desc: "From luxury residences to commercial developments, we execute projects with excellence.",
    image: "/home/build.jpeg",
  },

  grow: {
    tag: "GROW",
    title: "Scale Your Brand\nWith AI",
    desc: "Branding, Marketing, AI Content Creation, Websites, SEO and Growth Systems that generate results.",
    image: "/home/grow.jpeg",
  },
};

export default function Hero({ activePillar, setActivePillar }) {
  const data = content[activePillar];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePillar}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={data.image}
            alt={data.tag}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <motion.div
          key={activePillar}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          {/* Heading */}
          <h1
            className="
              whitespace-pre-line
              font-bold
              leading-[0.95]
              text-white
              text-[42px]
              sm:text-[58px]
              md:text-[74px]
              lg:text-[92px]
              xl:text-[110px]
            "
          >
            {data.title}
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-3xl
              text-center
              text-white/75
              text-sm
              leading-relaxed
              sm:text-base
              md:text-lg
            "
          >
            {data.desc}
          </p>

          {/* Switch Buttons */}
<div className="mt-10 flex flex-wrap justify-center gap-5">
  {["design", "build", "grow"].map((item) => {
    const active = activePillar === item;

    return (
      <motion.button
        key={item}
        onClick={() => setActivePillar(item)}
        whileHover={{
          scale: 1.05,
          y: -4,
        }}
        whileTap={{ scale: 0.95 }}
        animate={
          active
            ? {
                y: [0, -6, 0],
                scale: [1, 1.04, 1],
                boxShadow: [
                  "0 0 0 rgba(249,115,22,0)",
                  "0 0 35px rgba(249,115,22,.7)",
                  "0 0 0 rgba(249,115,22,0)",
                ],
              }
            : {
                opacity: [0.75, 1, 0.75],
                y: [0, -2, 0],
              }
        }
        transition={{
          duration: active ? 2 : 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`relative overflow-hidden rounded-xl px-8 py-4 font-semibold uppercase tracking-[2px] ${
          active
            ? "bg-theme text-white"
            : "border border-white/20 bg-white/5 text-white backdrop-blur-md"
        }`}
      >
        {/* Active Animated Border */}
        {active && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-xl bg-[conic-gradient(from_0deg,transparent,white,transparent)] opacity-70"
          />
        )}

        {/* Inner Background */}
        <div
          className={`absolute inset-[2px] rounded-[10px] ${
            active ? "bg-theme" : "bg-black/40"
          }`}
        />

        <span className="relative z-10">
          {item.toUpperCase()}
        </span>
      </motion.button>
    );
  })}
</div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}