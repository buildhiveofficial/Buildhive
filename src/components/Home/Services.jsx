"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = {
  design: {
    heading: "Architecture & Design Excellence",
    text: "Creative spaces engineered for functionality, sustainability and timeless beauty.",

    items: [
      {
        name: "ARCHITECTURAL DESIGN",
        image: "/design/ARCHITECTURAL DESIGN/1.jpg",
      },
      {
        name: "GREEN & SUSTIANABLE DESIGN",
        image: "/design/GREEN & SUSTIANABLE DESIGN/1.jpg",
      },
      {
        name: "INTERIOR DESIGN",
        image: "/design/INTERIOR DESIGN/1.jfif",
      },
      {
        name: "PRODUCT & INDUSTRIAL DESIGN",
        image: "/design/PRODUCT & INDUSTRIAL DESIGN/1.jfif",
      },
      {
        name: "URBAN DESIGN",
        image: "/design/URBAN DESIGN/1.jpg",
      },
    ],
  },

  build: {
    heading: "Construction & Project Delivery",
    text: "From blueprint to reality with precision and quality.",

    items: [
      {
        name: "COMMERCIAL CONSTRUCTION",
        image: "/build/COMMERCIAL CONSTRUCTION/1.jpg",
      },
      {
        name: "CONTRACTOR & SPECIALIST SERVICES",
        image: "/build/CONTRACTOR & SPECIALIST SERVICES/1.jfif",
      },
      {
        name: "PROJECT MANAGEMENT",
        image: "/build/PROJECT MANAGEMENT/1.jfif",
      },
      {
        name: "RENOVATION & REMOLDING",
        image: "/build/RENOVATION & REMOLDING/1.jfif",
      },
      {
        name: "RESIDENTIAL CONSTRUCTION",
        image: "/build/RESIDENTIAL CONSTRUCTION/1.jfif",
      },
    ],
  },

  grow: {
    heading: "Marketing, Branding & AI Growth",
    text: "AI-powered marketing systems for modern businesses.",

    items: [
      {
        name: "Brand Identity",
        image: "/services/grow-1.jpg",
      },
      {
        name: "Website Development",
        image: "/services/grow-2.jpg",
      },
      {
        name: "SEO",
        image: "/services/grow-3.jpg",
      },
      {
        name: "Google Ads",
        image: "/services/grow-4.jpg",
      },
      {
        name: "AI Content",
        image: "/services/grow-5.jpg",
      },
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
  {data.items.map((item, index) => (
    <motion.div
      key={item.name}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-3xl border border-black/10 bg-white hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">
          {item.name}
        </h3>


<Link
  href={`/projects?pillar=${activePillar}&category=${encodeURIComponent(
    item.name
  )}`}
  className="inline-flex items-center gap-2 text-theme font-semibold mt-4 group/link"
>
  Explore

  <span className="transition-all duration-300 group-hover/link:translate-x-2">
    →
  </span>
</Link>
      </div>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}