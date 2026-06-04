"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const brandText = "BUILDHIVE";

export default function LoadingScreen({ onComplete }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const progress = (index / brandText.length) * 100;

  useEffect(() => {
    if (index < brandText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(
          (prev) => prev + brandText[index]
        );
        setIndex((prev) => prev + 1);
      }, 180);

      return () => clearTimeout(timer);
    }

    setFinished(true);

    const finishTimer = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => clearTimeout(finishTimer);
  }, [index, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.05,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        {/* Background Glow */}
        <motion.div
          className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-theme/20 blur-[150px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-theme/20 blur-[150px]"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-20 flex flex-col items-center">

          {/* DESIGN BUILD GROW */}
          {/* <div className="mb-8 flex flex-wrap justify-center gap-4 md:gap-8">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: index >= 2 ? 1 : 0.3,
                y: 0,
              }}
              transition={{ duration: 0.5 }}
              className="text-xs md:text-lg tracking-[4px] text-white"
            >
              DESIGN
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: index >= 5 ? 1 : 0.3,
                y: 0,
              }}
              transition={{ duration: 0.5 }}
              className="text-xs md:text-lg tracking-[4px] text-theme font-semibold"
            >
              BUILD
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: index >= 8 ? 1 : 0.3,
                y: 0,
              }}
              transition={{ duration: 0.5 }}
              className="text-xs md:text-lg tracking-[4px] text-white"
            >
              GROW
            </motion.div>
          </div> */}

          {/* Main Logo */}
          <motion.div
            animate={
              finished
                ? {
                    scale: [1, 1.05, 1],
                  }
                : {}
            }
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="relative"
          >
            <h1
              className="
                text-5xl
                sm:text-6xl
                md:text-8xl
                lg:text-[110px]
                font-black
                tracking-[8px]
                text-white
                text-center
              "
            >
              {displayedText}

              {!finished && (
                <motion.span
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                  className="text-theme"
                >
                  |
                </motion.span>
              )}
            </h1>

            {/* Glow */}
            <motion.div
              className="absolute inset-0 blur-2xl bg-theme/20"
              animate={{
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: index >= 4 ? 1 : 0,
            }}
            className="mt-5 text-center text-white/60 tracking-[3px] text-xs md:text-sm"
          >
            DESIGN • BUILD • GROW
          </motion.p>

          {/* Progress */}
          <div className="mt-10 w-[280px] md:w-[420px]">

            {/* <div className="mb-2 flex justify-between text-[10px] md:text-xs text-white/50">
              <span>0%</span>
              <span>{Math.round(progress)}%</span>
              <span>100%</span>
            </div> */}

            <div className="h-[6px] overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-theme"
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 0.2,
                }}
              />
            </div>
          </div>

          {/* Completion Animation */}
          {/* {finished && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-8 text-theme tracking-[5px] text-xs md:text-sm"
            >
              ENTERING BUILDHIVE
            </motion.div>
          )} */}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}