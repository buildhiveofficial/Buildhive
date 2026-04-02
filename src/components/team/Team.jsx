"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Team = () => {
  return (
    <div className='md:pt-20 pt-16'>
        <section className="py-24 overflow-hidden relative">
        <img
          src="/images/team.png"
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
              Our People
            </span>

            <h1 className="mt-3 text-5xl font-bold text-white md:text-7xl">
             Meet the Team
            </h1>

            <p className="mt-4 max-w-xl text-lg text-white/70">
              The talented professionals behind every BuildHive project.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Team
