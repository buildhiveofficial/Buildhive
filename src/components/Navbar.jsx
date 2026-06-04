"use client";

import {
  Home,
  MenuIcon,
  X,
  User,
  Briefcase,
  Folder,
  Users,
  CircleUser,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const links = [
    { to: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
    { to: "/about", label: "About", icon: <User className="h-5 w-5" /> },
    {
      to: "/services",
      label: "Services",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      to: "/projects",
      label: "Projects",
      icon: <Folder className="h-5 w-5" />,
    },
    {
      to: "/team",
      label: "Team",
      icon: <Users className="h-5 w-5" />,
    },
    {
      to: "/consultancy",
      label: "Consultancy",
      icon: <CircleUser className="h-5 w-5" />,
    },
  ];

  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="relative">
      {/* Desktop Navbar */}
      <div className="bg-black text-white flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 py-2 fixed top-0 w-full z-50 shadow-lg">
        <Link href="/">
          <img
            src="/logo/Logo.png"
            className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 h-auto"
            alt="logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.to}
              className={`text-sm lg:text-base xl:text-lg transition-colors duration-300 whitespace-nowrap ${
                pathname === link.to
                  ? "text-theme font-bold border-b-2 border-theme"
                  : "text-white hover:text-theme"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <Link href="/contact" className="hidden md:block">
          <button className="cursor-pointer font-semibold overflow-hidden relative border border-theme group px-4 lg:px-6 xl:px-8 py-2 rounded-lg">
            <span className="relative z-10 text-theme group-hover:text-white text-sm lg:text-base xl:text-lg duration-500">
              CONTACT
            </span>

            <span className="absolute w-full h-full bg-theme -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>

            <span className="absolute w-full h-full bg-theme -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
          </button>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.35 }}
              className="fixed top-0 left-0 h-screen w-[85%] sm:w-[75%] max-w-[320px] bg-black z-50 p-4 sm:p-5 flex flex-col justify-between"
            >
              <div>
                <Link href="/" onClick={() => setOpen(false)}>
                  <div className="px-2">
                    <img
                      src="/logo/Logo.png"
                      className="w-28 sm:w-32"
                      alt="logo"
                    />
                  </div>
                </Link>

                <div className="flex flex-col gap-3 mt-8">
                  {links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 text-base sm:text-lg p-3 rounded-lg transition-all duration-200 ${
                        pathname === link.to
                          ? "bg-theme text-white font-bold"
                          : "text-theme hover:bg-gray-800"
                      }`}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Button */}
              <Link href="/contact" onClick={() => setOpen(false)}>
                <button className="w-full cursor-pointer font-semibold overflow-hidden relative border border-theme group py-3 rounded-lg">
                  <span className="relative z-10 text-theme group-hover:text-white text-base duration-500">
                    CONTACT
                  </span>

                  <span className="absolute w-full h-full bg-theme -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>

                  <span className="absolute w-full h-full bg-theme -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                </button>
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;