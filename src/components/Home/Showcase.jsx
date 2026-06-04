"use client";

import { motion } from "framer-motion";

const data = {
  design: {
    title: "Design Future Cities",
    image: "/home/design-showcase.jpeg",
    desc: "Architectural innovation that blends aesthetics, sustainability and functionality.",
  },

  build: {
    title: "Build With Confidence",
    image: "/home/build-showcase.jpeg",
    desc: "Construction projects delivered on time, on budget and beyond expectations.",
  },

  grow: {
    title: "Grow Your Business",
    image: "/home/grow-showcase.jpeg",
    desc: "AI-driven content, branding and marketing strategies designed for growth.",
  },
};

export default function Showcase({ activePillar }) {
  const item = data[activePillar];

  return (
    <section className="py-16 md:py-24 bg-[#fafafa] overflow-hidden">
      <div className="container mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-2xl md:rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            key={`${activePillar}-content`}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2"
          >
            <p className="text-theme tracking-[3px] md:tracking-[5px] text-xs md:text-sm font-medium uppercase">
              BuildHive
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 md:mt-4 leading-tight">
              {item.title}
            </h2>

            <p className="text-black/60 mt-4 md:mt-6 text-sm md:text-base lg:text-lg leading-relaxed">
              {item.desc}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 md:gap-5 mt-8 md:mt-10">
              <div className="p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl md:text-4xl font-bold text-theme">
                  250+
                </h3>
                <p className="text-sm md:text-base text-black/70 mt-1">
                  Projects Delivered
                </p>
              </div>

              <div className="p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl md:text-4xl font-bold text-theme">
                  98%
                </h3>
                <p className="text-sm md:text-base text-black/70 mt-1">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}