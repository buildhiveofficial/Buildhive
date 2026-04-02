"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const text = "BUILDHIVE";

const LoadingScreen = ({ onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  const progress = (index / text.length) * 100;

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 200);

      return () => clearTimeout(timeout);
    } else {
      setDone(true);

      const timer = setTimeout(() => {
        onComplete();
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* TEXT + CURSOR */}
      <div className="flex items-center gap-2 md:text-5xl text-4xl font-bold tracking-widest text-white">
        
        <motion.span
          animate={
            done
              ? {
                  textShadow:
                    "0px 0px 10px #fff, 0px 0px 25px #f14e11, 0px 0px 50px #f14e11",
                }
              : {}
          }
          transition={{ duration: 0.8 }}
        >
          {displayedText}
        </motion.span>

        {!done && (
          <motion.span
            className="w-3 h-3 bg-theme rounded-full"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          />
        )}
      </div>

      {/* PROGRESS BAR */}
      <div className=" md:w-[250px] w-3/4 h-[8px] mt-4 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-theme"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;