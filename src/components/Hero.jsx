"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from './Button'

const Hero = () => {
  return (
    <div>
          <section className="relative flex min-h-screen h-screen items-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <img src={"/images/hero-construction.jpg"} alt="Modern construction site" className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
      <div className="container relative z-10 mx-auto px-6 md:px-16 py-32">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6 inline-block rounded-full border border-theme/30 bg-theme/10 px-4 py-1.5 text-xs font-medium tracking-widest text-theme uppercase"
          >
            Premium Construction
          </motion.span>
          <h1 className="mb-3 font-display text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
            Building the
            <span className="text-theme"> Future</span>
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/70">
            We craft exceptional architectural spaces that inspire communities and stand the test of time. From concept to completion.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
             <Button text={"Projects"} link={"/projects"}  />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={"/contact"}
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

    </div>
  )
}

export default Hero
