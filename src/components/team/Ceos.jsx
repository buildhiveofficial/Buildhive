"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ceos = [
  {
    name: "Zeeshan Aslam",
    role: "Chief Executive Officer",
    tagline: "We don’t just build structures, we build legacies.",
    bio: "Zeeshan is a visionary leader with over 15 years of experience in the construction industry. He has successfully delivered large-scale infrastructure projects and transformed the company into a multi-national enterprise. His leadership focuses on innovation, operational excellence, and long-term impact.",
    achievements: [
      "Led 120+ mega construction projects",
      "Expanded company to 5 countries",
      "Awarded Best Infrastructure Leader 2023",
    ],
  },
  {
    name: "M.Abdullah Sheikh",
    role: "Co-Founder",
    tagline: "Design is intelligence made visible.",
    bio: "Abdullah specializes in modern architecture and sustainable design. With a strong background in creative direction and urban planning, he has reshaped the company’s design philosophy and brought innovation to every project.",
    achievements: [
      "Transformed 200+ residential designs",
      "Top 40 Under 40 Industry Leader",
      "Pioneer in sustainable architecture",
    ],
  },
];

export default function LeadershipSection() {
  const [active, setActive] = useState(ceos[0]);

  return (
    <section className="relative bg-linear-to-b from-white via-zinc-50 to-white py-28 px-6 md:px-20 overflow-hidden">

      {/* glow */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-theme/10 blur-[120px]" />

      {/* heading */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-zinc-900"
        >
          Our <span className="text-theme">Leadership</span>
        </motion.h2>

        <motion.p
          className="mt-6 text-lg text-zinc-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Strong leadership drives innovation, growth, and long-term success.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-14 items-start relative z-10">

        {/* LEFT – Selector */}
        <div className="flex flex-col gap-4">
          {ceos.map((ceo, index) => {
            const isActive = active.name === ceo.name;

            return (
              <motion.div
                key={index}
                onClick={() => setActive(ceo)}
                whileHover={{ scale: 1.02 }}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border
                ${
                  isActive
                    ? "bg-white shadow-xl border-zinc-300"
                    : "bg-zinc-50 border-zinc-200 hover:bg-white"
                }`}
              >
                <h3 className="text-lg font-semibold text-zinc-900">
                  {ceo.name}
                </h3>
                <p className="text-sm text-theme">{ceo.role}</p>
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT – Detailed Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="bg-black rounded-3xl shadow-xl p-8 md:p-10 border border-zinc-200 relative"
          >
            {/* Name */}
            <img src="./logo/Fav.png" className="md:h-20 h-13 absolute top-8 right-7 md:top-10 md:right-10" alt="" />
            <h3 className="text-2xl md:text-3xl font-bold text-theme">
              {active.name}
            </h3>
            <p className="text-white mb-4">{active.role}</p>

            {/* Tagline */}
            <p className="text-xl italic text-theme mb-6">
              “ <span className="text-white">{active.tagline}</span>”
            </p>

            {/* Bio */}
            <p className="text-white/60 leading-relaxed mb-6">
              {active.bio}
            </p>

            {/* Achievements */}
            <div className="grid sm:grid-cols-2 gap-3">
              {active.achievements.map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-zinc-50 border border-zinc-200 rounded-xl p-3 text-sm text-zinc-700"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}