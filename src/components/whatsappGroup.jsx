"use client"
import React from 'react'
import AnimatedSection from './Animated'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { WhatsappIcon } from "hugeicons-react"

const Vission = () => {

  const phoneNumber = "9230088873872";
  const message = "Hi, I want to start a project with you.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div>
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-16">
          <AnimatedSection className="rounded-2xl bg-black p-12 text-center md:p-20">
            
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
  Let’s Turn Your <span className="text-theme">Ideas</span> Into Reality
</h2>

<p className="mx-auto mt-4 max-w-lg text-white/60">
  Start a conversation with us on WhatsApp and bring your vision to life with expert solutions.
</p>

            <motion.a
              href={whatsappLink}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-flex justify-center"
            >
              <button
                className="relative bg-theme text-white font-medium text-[17px] px-7 py-6 pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#f14e11] group"
              >
                <div
                  className="absolute left-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#f14e11] active:scale-95"
                >
                  <WhatsappIcon className="text-theme w-5 h-5" />
                </div>

                <span className="ml-9">Chat on WhatsApp</span>
              </button>
            </motion.a>

          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Vission