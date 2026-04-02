"use client"
import { Home, MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const links = [
    { to: "/", label: "Home", icon: <Home className='h-5 w-5' /> },
    { to: "/about", label: "About", icon: <Home className='h-5 w-5' /> },
    { to: "/services", label: "Services", icon: <Home className='h-5 w-5' /> },
    { to: "/projects", label: "Projects", icon: <Home className='h-5 w-5' /> },
    { to: "/grow", label: "Grow", icon: <Home className='h-5 w-5' /> },
    { to: "/team", label: "Team", icon: <Home className='h-5 w-5' /> },
  ]

  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)

  return (
    <div className='relative'>
      {/* Desktop Navbar */}
      <div className='bg-black text-white flex items-center justify-between px-6 md:px-16 py-3 fixed top-0 w-full z-50 shadow-lg'>
        <Link href={"/"}>
        <img src="/logo/Logo.png" className='md:w-52 w-32' alt="logo" />
        </Link>
        <div className='hidden md:flex items-center gap-6'>
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.to}
              className={`text-lg transition-colors duration-300 ${
                pathname === link.to
                  ? "text-theme font-bold border-b-2 border-theme "
                  : "text-white hover:text-theme"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className='md:block hidden'
        >
          <button className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-theme group px-8 py-2 rounded-lg">
  <span className="relative z-10 text-theme group-hover:text-white text-xl duration-500">CONTACT</span>
  <span className="absolute w-full h-full bg-theme -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
  <span className="absolute w-full h-full bg-theme -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
</button>
        </Link>

        {/* Mobile Menu Toggle */}
        <button className='md:hidden text-white' onClick={toggleMenu}>
          {open ? <X className='w-6 h-6' /> : <MenuIcon className='w-6 h-6' />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className='fixed top-0 left-0 w-[70%] h-full bg-black z-50 p-5 flex flex-col justify-between'
          >
            <div>
               <Link href={"/"} onClick={() => setOpen(false)}>
                     <div className='px-4 -mt-1'> <img src="/logo/Logo.png" className=' w-32' alt="logo" /></div>
        </Link>
            <div className='flex flex-col gap-4 mt-8'>
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.to}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 text-lg p-2 rounded-lg transition-all duration-200 ${
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

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className=' text-black font-semibold py-2 px-6  mb-5'
            >
             <button className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-theme group px-8 py-2 rounded-lg">
  <span className="relative z-10 text-theme group-hover:text-white text-xl duration-500">CONTACT</span>
  <span className="absolute w-full h-full bg-theme -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
  <span className="absolute w-full h-full bg-theme -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
</button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar