"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Process = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/consult.png"
        alt="Process"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 container mx-auto px-6 md:px-16">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Our Process
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            A refined and structured approach that ensures every consultancy
            project is executed with clarity, precision, and excellence.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Consultation",
              desc: "We begin by understanding your requirements, challenges, and goals to create a strong foundation for your project.",
            },
            {
              title: "Strategy",
              desc: "Our experts develop a tailored strategy focused on efficiency, cost optimization, and long-term success.",
            },
            {
              title: "Execution",
              desc: "We ensure smooth implementation with precision, guiding every step to deliver high-quality results.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-2xl p-8 hover:bg-white/20 transition"
            >
              <h3 className="text-2xl font-semibold text-theme mb-4">
                0{i + 1}. {item.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
