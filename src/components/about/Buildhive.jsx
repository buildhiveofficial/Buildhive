"use client";

import { motion } from "framer-motion";

export default function AboutBuildHive() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-24">
      {/* SVG Background */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="#f24e12" strokeWidth="1">
            {Array.from({ length: 8 }).map((_, i) => (
              <path key={i} d={`M0 ${100 * (i + 1)} L800 ${100 * (i + 1)}`} />
            ))}

            {Array.from({ length: 8 }).map((_, i) => (
              <path key={i} d={`M${100 * (i + 1)} 0 L${100 * (i + 1)} 800`} />
            ))}
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          What is <span className="text-theme">BuildHive?</span>
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-300 leading-relaxed"
        >
          BuildHive is a modern construction company focused on delivering
          high-quality residential, commercial, and industrial projects with
          precision, innovation, and long-term durability.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-400 leading-relaxed"
        >
          We combine engineering excellence, modern technology, and skilled
          craftsmanship to ensure every project is delivered on time, with
          safety and client satisfaction as our top priority.
        </motion.p>

        {/* Buttons / Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {[
            "Trusted Construction",
            "Modern Engineering",
            "Quality Delivery",
          ].map((item, i) => (
            <div
              key={i}
              className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-theme group px-8 py-2 rounded-lg"
            >
              <span className="relative z-10 text-gray-200 group-hover:text-white text-xl duration-500">
                {item}
              </span>
              <span className="absolute w-full h-full bg-theme -left-50 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
              <span className="absolute w-full h-full bg-theme -right-50 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
