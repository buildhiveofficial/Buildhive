"use client";

import { useRouter } from "next/navigation";
import { AlertCircle, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      {/* Floating Alert Icon */}
      <motion.div
        className="mb-8"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <AlertCircle size={80} className="text-theme" />
      </motion.div>

      {/* 404 Text */}
      <motion.h1
        className="text-6xl md:text-8xl font-bold mb-4 tracking-widest"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        className="text-lg md:text-2xl text-gray-400 mb-8 text-center max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Oops! The page you are looking for does not exist.  
        It might have been moved or deleted.
      </motion.p>

      {/* Animated CTA Button */}
      <motion.button
        onClick={() => router.push("/")}
        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-theme text-white font-semibold hover:bg-theme/90 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Home size={20} /> Go Back Home
      </motion.button>

      {/* Animated Falling Squares (Theme Accent) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-theme rounded-sm"
            initial={{ x: Math.random() * 100 + "%", y: -20, opacity: 0 }}
            animate={{ y: "110%", opacity: 1 }}
            transition={{
              delay: i * 0.3,
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}