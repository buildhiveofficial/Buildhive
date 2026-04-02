"use client"
import React from 'react'
import AnimatedSection from './Animated'
import { motion } from 'framer-motion'
import Button from './Button'

const Vission = () => {
  return (
    <div>
       <section className="py-24">
      <div className="container mx-auto px-6 md:px-16">
        <AnimatedSection className="rounded-2xl bg-black p-12 text-center md:p-20">
          <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
            Ready to Build Your <span className="text-theme">Vision</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/60">
            Let's bring your architectural dreams to life. Contact us today for a free consultation.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8 flex items-center justify-center">
            <Button text={"Start Your Project"} link={"/contact"} />
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
    </div>
  )
}

export default Vission
