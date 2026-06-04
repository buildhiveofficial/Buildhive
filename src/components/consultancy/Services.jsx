"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const Services = () => {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Our Consultancy Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Through GM Services, we offer reliable and strategic consultancy
              tailored to your project goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {["Project Planning", "Cost Estimation", "Site Analysis"].map(
              (service, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition bg-black"
                >
                  <h3 className="text-xl font-semibold text-theme">
                    {service}
                  </h3>
                  <p className="mt-3 text-gray-100">
                    Professional {service.toLowerCase()} services to ensure
                    efficiency, cost control, and success of your project.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
