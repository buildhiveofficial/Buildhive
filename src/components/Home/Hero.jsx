"use client";

import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button";

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
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">

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

  <div className="container relative z-10 mx-auto px-5 sm:px-6 md:px-10 lg:px-16">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-4xl"
    >

      {/* Badge */}
      <span className="inline-flex items-center rounded-full border border-theme/40 bg-theme/10 px-3 py-2 text-[10px] sm:text-xs tracking-[3px] text-theme">
        BUILDHIVE SOLUTIONS
      </span>

      {/* Heading */}
      <h1 className="mt-6 whitespace-pre-line font-bold leading-[0.95] text-white
      text-[42px]
      sm:text-[55px]
      md:text-[72px]
      lg:text-[90px]
      xl:text-[110px]">
        {data.title}
      </h1>

      {/* Description */}
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75
      sm:text-base
      md:text-lg">
        {data.desc}
      </p>

      {/* Tabs */}
      <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">

        {["design", "build", "grow"].map((item) => (
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -3 }}
            key={item}
            onClick={() => setActivePillar(item)}
            className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-8 sm:py-4 sm:text-base ${
              activePillar === item
                ? "bg-theme text-white shadow-[0_0_30px_rgba(249,115,22,0.35)]"
                : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
            }`}
          >
            {item.toUpperCase()}
          </motion.button>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 sm:mt-10">
        <Button
          text={"Explore Services"}
          link={"/services"}
        />
      </div>

    </motion.div>
  </div>

  {/* Bottom Fade */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
</section>
  );
}