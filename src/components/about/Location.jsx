"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-theme mb-4"
      >
        Our Location
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10"
      >
        Visit us in person or reach out online — we’re always here to connect
        with passionate traders.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="max-w-5xl mx-auto rounded-2xl overflow-hidden  bg-black shadow-lg"
      >
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Map */}
          <div className="w-full md:w-2/3 h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d787.3315096774144!2d73.11418561611126!3d31.412462923236575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268725b330195%3A0x41252daea86b04b7!2sKohinoor%20Plaza%20I!5e0!3m2!1sen!2s!4v1760867145129!5m2!1sen!2s"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address */}
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-6 md:p-8 text-center bg-black">
            <MapPin className="w-10 h-10 text-theme mb-3" />
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
              Visit Our Office
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              kohinoor plaza 1, Jaranwala Rd, Kohinoor City, Faisalabad, Pakistan
            </p>
            <p className="text-xs md:text-sm text-gray-500 mt-2">
              Monday - Saturday, 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
