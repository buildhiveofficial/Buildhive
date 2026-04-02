"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import residentialImg from "@/assets/project-residential.jpg";
// import commercialImg from "@/assets/project-commercial.jpg";
// import interiorImg from "@/assets/project-interior.jpg";
// import shopsImg from "@/assets/project-shops.jpg";
// import heroImg from "@/assets/hero-construction.jpg";
// import aboutImg from "@/assets/about-hero.jpg";

const categories = ["All", "Residential", "Commercial", "Interior", "Retail"];

const projects = [
  { title: "Skyline Residences", category: "Residential", location: "New York, NY", year: "2024" },
  { title: "Metro Business Tower", category: "Commercial", location: "Chicago, IL", year: "2023" },
  { title: "The Penthouse Suite", category: "Interior", location: "Miami, FL", year: "2024" },
  { title: "Grand Mall Complex", category: "Retail", location: "Los Angeles, CA", year: "2023" },
  { title: "Harbor Point Tower", category: "Commercial", location: "San Francisco, CA", year: "2022" },
  { title: "Sunset Villas", category: "Residential", location: "Austin, TX", year: "2024" },
];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
      <div className="md:pt-20 pt-16">
<section className="relative py-24 overflow-hidden">
  {/* Background Image */}
  <img
    src="/images/projecthero.png"
    alt="Modern construction site"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark Overlay (important for readability) */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Optional linear overlay for premium look */}
  <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/4 to-black/60" />

  {/* Content */}
  <div className="relative z-10 container mx-auto px-6 md:px-20">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="text-sm font-medium tracking-widest text-theme uppercase">
        Portfolio
      </span>

      <h1 className="mt-3 font-bold text-5xl md:text-7xl text-white">
        Our Projects
      </h1>

      <p className="mt-4 max-w-xl text-lg text-white/70">
        Explore our portfolio of landmark constructions and architectural marvels.
      </p>
    </motion.div>
  </div>
</section>

        <section className="py-24">
          <div className="container mx-auto px-6 md:px-16">
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {categories.map((c) => (
                <motion.button
                  key={c}
                  onClick={() => setActive(c)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-colors cursor-pointer ${
                    active === c
                      ? "bg-theme text-white"
                      : "bg-theme/10 hover:bg-theme/80 hover:text-white"
                  }`}
                >
                  {c}
                </motion.button>
              ))}
            </div>

            <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((p) => (
                  <motion.div
                    key={p.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <img
                      src={"/images/projecthero.png"}
                      alt={p.title}
                      className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-xs font-medium tracking-widest text-theme uppercase">{p.category}</span>
                      <h3 className="mt-1 font-display text-xl font-bold text-white">{p.title}</h3>
                      <p className="mt-1 text-sm text-white/60">{p.location} · {p.year}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </div>
  );
};

export default Projects;
