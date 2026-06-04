"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const Consultancy = () => {
  return (
    <div className="pt-16 md:pt-20">
      <section className="py-24 overflow-hidden relative">
        <img
          src="/images/consultancy.png"
          alt="Consultancy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />

        <div className="relative z-10 container mx-auto px-6 md:px-16">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <span className="text-sm tracking-widest text-theme uppercase">
              Consultancy
            </span>

            <h1 className="mt-3 text-5xl font-bold text-white md:text-7xl">
              Expert Guidance by GM Services
            </h1>

            <p className="mt-4 max-w-xl text-lg text-white/70">
              BuildHive collaborates with GM Services to deliver professional
              consultancy solutions for your construction and business needs.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Consultancy
