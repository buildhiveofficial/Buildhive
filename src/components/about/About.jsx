"use client";
import React from "react";
import { motion } from "framer-motion";
      import { Target, Eye, Award } from "lucide-react";

      
      const About = () => {
const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "At BuildHive, we deliver high-quality construction solutions focused on safety, precision, and timely completion of every project we handle.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "At BuildHive, we aim to become a trusted construction leader known for innovation, strong infrastructure, and long-lasting community development.",
  },
  {
    icon: Award,
    title: "Our Values",
    desc: "At BuildHive, we follow integrity, quality, and teamwork to ensure safe, reliable, and excellent construction in every project we deliver.",
  },
];
  return (
    <div className="md:pt-20 pt-16 ">
      <section className="py-24 overflow-hidden relative">
        <img
          src="/images/about-hero.png"
          alt="Construction"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />

        <div className="relative z-10 container mx-auto px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-widest text-theme uppercase">
              About Us
            </span>

            <h1 className="mt-3 text-5xl font-bold text-white md:text-7xl">
              Our Story
            </h1>

            <p className="mt-4 max-w-xl text-lg text-white/70">
              Two decades of building excellence, one project at a time.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-24">
  <div className="container mx-auto px-6 md:px-16 ">

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
      className="grid gap-8 md:grid-cols-3 "
    >

      {values.map((v, i) => (
        <motion.div
          key={v.title}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-xl border border-border bg-black p-8"
          >
            {/* Icon animation */}
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              className="mb-4 inline-flex rounded-lg bg-theme/40 p-3 text-theme"
            >
              <v.icon size={24} />
            </motion.div>

            <h3 className="mb-3 text-xl font-semibold text-white">
              {v.title}
            </h3>

            <p className="text-sm leading-relaxed text-white">
              {v.desc}
            </p>

          </motion.div>
        </motion.div>
      ))}

    </motion.div>
  </div>
</section>

    </div>
  );
};

export default About;
