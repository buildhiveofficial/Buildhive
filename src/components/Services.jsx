"use client"
import { motion } from "framer-motion";
import {
  Building2,
  Ruler,
  HardHat,
  Paintbrush,
  Shield,
  Home,
  Store,
  Landmark,
  Wrench
} from "lucide-react";

const services = [
  { icon: Ruler, title: "Architectural Design", desc: "Our team of award-winning architects creates innovative designs that balance aesthetics with functionality. We specialize in modern, sustainable architecture.", features: ["3D Visualization", "Sustainable Design", "Permit Management"] },
  { icon: Building2, title: "Commercial Construction", desc: "From office towers to retail complexes, we build commercial spaces that drive business success with modern amenities and efficient layouts.", features: ["Office Buildings", "Retail Spaces", "Warehouses"] },
  { icon: Home, title: "Residential Construction", desc: "Premium residential developments including luxury homes, apartments, and gated communities tailored to modern living standards.", features: ["Custom Homes", "Apartments", "Townhouses"] },
  { icon: Paintbrush, title: "Interior Design", desc: "Transform any space with our expert interior design services. We create environments that are both beautiful and functional.", features: ["Space Planning", "Material Selection", "Furnishing"] },
  { icon: Store, title: "Commercial Spaces", desc: "Purpose-built shops, malls, and commercial centers designed to maximize foot traffic and create memorable retail experiences.", features: ["Shopping Malls", "Retail Stores", "Showrooms"] },
  { icon: HardHat, title: "Project Management", desc: "End-to-end project oversight ensuring timely delivery, budget adherence, and quality standards on every project.", features: ["Timeline Management", "Cost Control", "Quality Assurance"] },
  { icon: Landmark, title: "Real Estate Development", desc: "Strategic real estate development from land acquisition through project completion, maximizing investment returns.", features: ["Land Acquisition", "Feasibility Studies", "Market Analysis"] },
  { icon: Wrench, title: "Renovation & Remodeling", desc: "Breathe new life into existing structures with our renovation services. We modernize buildings while preserving their character.", features: ["Structural Updates", "Modern Upgrades", "Heritage Restoration"] },
  { icon: Shield, title: "Safety Consulting", desc: "Comprehensive safety consulting to ensure all projects meet and exceed regulatory requirements and industry standards.", features: ["Safety Audits", "Training Programs", "Compliance"] },
];


const Services = () => {
  return (
    <div className="md:pt-20 pt-16">

      {/* Hero Section */}
      <section className="py-24 overflow-hidden relative">

        <img
          src="/images/services.png"
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
              Services
            </span>

            <h1 className="mt-3 text-5xl font-bold text-white md:text-7xl">
              What We Build
            </h1>

            <p className="mt-4 max-w-xl text-lg text-white/70">
              Comprehensive construction services from concept to completion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {services.map((s, i) => {
              const Icon = s.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative flex h-full flex-col rounded-2xl bg-[#0f0f0f] border border-white/5 p-8 overflow-hidden transition-all duration-500 hover:border-theme/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                >

                  {/* Top glow line */}
                  <div className="absolute top-0 left-0 h-1 w-0 bg-theme transition-all duration-500 group-hover:w-full" />

                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-theme transition-all duration-500 group-hover:bg-theme group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-semibold text-white group-hover:text-theme transition-colors duration-300">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-white/60">
                    {s.desc}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {s.features.map((f, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 transition-all duration-300 group-hover:border-theme/40 group-hover:text-theme"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;