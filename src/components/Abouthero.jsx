"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function ConstructionCard() {
  return (
    <section className="relative py-32  overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/10 blur-[120px]" />

      <div className=" mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-16 md:gap-36 items-center">

        {/* LEFT CONTENT */}
                <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{once:true}}
          className="relative"
        >
          {/* Floating Image */}
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/construction.png"
              alt="construction"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Offset Background Layer */}
          <div className="absolute top-3 left-3 md:top-6 md:left-6 w-full h-full bg-black border border-orange-500/30 rounded-2xl" />

          {/* Glow */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/30 blur-[100px]" />
        </motion.div>
         {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{once:true}}
        >
          <p className="text-orange-500 tracking-widest text-sm mb-3">
            PREMIUM CONSTRUCTION
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            We Build the <br />
            <span className="text-orange-500">Future Spaces</span>
          </h2>

          <p className="text-black/70 mb-5 leading-relaxed">
            We deliver cutting-edge construction solutions that combine modern
            architecture, structural strength, and innovative execution.
          </p>

          <p className="text-black/60 mb-8 leading-relaxed">
            From concept to completion, our focus remains on quality,
            precision, and long-term durability that stands the test of time.
          </p>

          <Button text={"Explore More"} link={"/about"} />
        </motion.div>

       


      </div>
    </section>
  );
}