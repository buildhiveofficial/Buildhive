"use client"
import { motion } from "framer-motion";

export const GMServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/gm-services.jpg"
              alt="GM Services"
              className="w-full h-87.5 object-cover rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-widest text-theme uppercase">
              Our Consultancy Partner
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
              Powered by GM Services
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              All consultancy solutions are professionally delivered through GM
              Services, a trusted name in strategic planning and construction
              advisory. Their expertise ensures that every project is guided
              with precision, industry knowledge, and a results-driven approach.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              From initial consultation to final execution, GM Services handles
              every aspect with a commitment to quality, efficiency, and
              long-term success. Their team works closely with clients to
              understand project requirements and provide tailored solutions
              that align with modern industry standards.
            </p>


          </motion.div>
        </div>
      </div>
    </section>
  );
};
