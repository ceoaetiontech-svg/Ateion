"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "NCO", href: "/nco" },
  { name: "AI Workshops", href: "/workshops" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[1000] h-[60px] bg-white/85 backdrop-blur-[12px] border-b border-gray-100/50"
      >
        <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50 group">
            <div className="relative overflow-hidden">
              <div className="relative overflow-hidden border border-black rounded">
              <Image
                src="/logo.PNG"
                alt="ATEION Logo"
                width={120}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 ease-out group-hover:scale-[1.05]"
                priority
              />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-[32px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium text-[#334155] hover:text-[#3B82F6] transition-all duration-300 relative py-2 group ${
                  pathname === link.href 
                    ? "text-[#3B82F6] font-semibold" 
                    : ""
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#3B82F6] transition-all duration-300 rounded-full origin-left group-hover:w-full w-0 ${
                  pathname === link.href ? "w-full" : ""
                }`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Enquire Button */}
            <Link 
              href="/enquire" 
              className="hidden sm:inline-flex items-center px-[32px] py-[12px] text-sm font-semibold bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white rounded-[24px] hover:-translate-y-[2px] hover:shadow-[0_10px_24px_rgba(59,130,246,0.3)] transition-all duration-300 hover:shadow-lg active:translate-y-0"
            >
              Enquire
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#3B82F6] z-50 relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={24} strokeWidth={1.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={24} strokeWidth={1.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-white/95 backdrop-blur-2xl" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative flex flex-col items-center justify-center min-h-screen gap-10"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-4xl sm:text-5xl font-serif transition-all duration-500 ${
                      pathname === link.href 
                        ? "text-[#3B82F6] scale-110 italic" 
                        : "text-gray-500/50 hover:text-[#3B82F6]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link 
                  href="/enquire" 
                  className="px-10 py-5 text-sm font-semibold bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white rounded-[24px] hover:-translate-y-[2px] hover:shadow-[0_10px_24px_rgba(59,130,246,0.3)] transition-all duration-300"
                >
                  Submit Enquiry
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
