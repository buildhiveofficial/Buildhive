"use client";

import { motion } from "framer-motion";

const services = {
  design: {
    heading: "Architecture & Design Excellence",
    text: "Creative spaces engineered for functionality, sustainability and timeless beauty.",
    items: [
      "Residential Architecture",
      "Commercial Architecture",
      "Industrial Architecture",
      "Landscape Architecture",
      "Interior Architecture",
      "Urban Design",
      "Green Design",
      "Master Planning",
    ],
  },

  build: {
    heading: "Construction & Project Delivery",
    text: "From blueprint to reality with precision, quality control and expert project management.",
    items: [
      "Luxury Villas",
      "Residential Construction",
      "Commercial Buildings",
      "Industrial Facilities",
      "Renovation & Remodeling",
      "Civil Works",
      "Electrical Works",
      "HVAC & Plumbing",
    ],
  },

  grow: {
    heading: "Marketing, Branding & AI Growth",
    text: "Transform your business into a digital powerhouse with AI-powered marketing systems.",
    items: [
      "Brand Identity",
      "Logo Design",
      "Website Development",
      "SEO",
      "Google Ads",
      "Meta Ads",
      "AI Avatars",
      "Faceless Content",
    ],
  },
};

export default function Services({ activePillar }) {
  const data = services[activePillar];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-theme tracking-[2px] md:tracking-[4px] text-xs md:text-sm">
            {activePillar.toUpperCase()}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            {data.heading}
          </h2>

          <p className="mt-4 md:mt-6 text-sm sm:text-base text-black/60">
            {data.text}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 lg:mt-20">
          {data.items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-5 md:p-6 lg:p-8 rounded-2xl border border-black/10 hover:border-theme hover:-translate-y-2 transition-all duration-300 bg-white"
            >
              <div className="text-theme text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="font-semibold text-lg md:text-xl leading-snug">
                {item}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}