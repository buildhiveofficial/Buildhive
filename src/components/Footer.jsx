
import { motion } from "framer-motion";
import { Facebook01Icon, Globe02Icon, InstagramIcon, Mail01Icon, YoutubeIcon } from "hugeicons-react";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => (
  <footer className="border-t border-border bg-black">
    <div className="container mx-auto px-6 md:px-16 py-16">
      <div className="grid gap-12 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Link href={"/"}>
            <img src="/logo/logo.png" className='md:w-52 w-32' alt="logo" />
            </Link>
          </div>
          <p className="text-sm leading-relaxed text-white">
            Crafting exceptional spaces that inspire and endure. Premium construction services since 2005.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-theme">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "Services", "Projects", "Contact"].map((l) => (
              <Link
                key={l}
                href={`/${l.toLowerCase()}`}
                className="text-sm text-white transition-colors hover:text-theme"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-theme">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-white">
            <span>Architectural Design</span>
            <span>Residential Construction</span>
            <span>Commercial Projects</span>
            <span>Interior Design</span>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-theme">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-white">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-theme" />
              <span>123 Construction Ave, NY 10001</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-theme" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-theme" />
              <span>info@buildhive.com</span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
<div className="mt-12 border-t border-white pt-6 flex flex-col md:flex-row items-center justify-between gap-6">

  {/* Left Social Icons */}
  <div className="flex items-center gap-5 text-white">
    <a href="#" className="hover:text-theme transition duration-300 hover:scale-110">
      <InstagramIcon size={20} />
    </a>

    <a href="#" className="hover:text-theme transition duration-300 hover:scale-110">
      <Facebook01Icon size={20} />
    </a>

    <a href="#" className="hover:text-theme transition duration-300 hover:scale-110">
      <Mail01Icon size={20} />
    </a>
  </div>

  {/* Center Copyright */}
  <div className="text-sm text-gray-300 text-center">
    © 2026 <span className="text-theme font-semibold">BuildHive</span>. All rights reserved.
  </div>
    {/* Developer Info */}
            <div className=" text-xs text-white  md:w-40 text-center">
              Developed by{" "}
              <a
                href="https://mudassar-rana.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-theme/200 font-medium"
              >
                Mudassar Ali 
              </a>{" "}
              | 
              <a 
                href="mailto:mudassarimran234@gmail.com" 
                className="ml-1 hover:text-theme/200"
              >
                mudassarimran234@gmail.com
              </a>{" "}
              | 
              <a 
                href="https://wa.me/923007298222" 
                className="ml-1 hover:text-theme/200"
                target="_blank"
                rel="noopener noreferrer"
              >
                0300 7298222
              </a>
            </div>

  {/* Spacer for alignment */}
  {/* <div className="hidden md:block w-30" /> */}
</div>
    </div>
  </footer>
);

export default Footer;
