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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50 group">
            <div className="relative overflow-hidden">
              {/* <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/be22b8f1-cf5b-4878-85a2-a9a1bb854c38/WhatsApp-Image-2026-01-04-at-12.13.16-AM-1767465811619.jpeg"
                alt="ATEION Logo"
                width={120}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                priority
              /> */}
              <Image
                src="/Capture.PNG"
                alt="ATEION Logo"
                width={120}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[10px] font-sans font-bold uppercase tracking-[0.3em] transition-all duration-300 hover:text-primary relative group py-2 ${
                  pathname === link.href ? "text-primary" : "text-foreground/40"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-500 rounded-full ${
                  pathname === link.href ? "w-1/2" : "w-0 group-hover:w-1/2"
                }`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/enquire" className="hidden sm:inline-flex enquiry-button !px-6 !py-3 !text-[10px] uppercase tracking-widest">
              Enquire
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-primary z-50 relative w-10 h-10 flex items-center justify-center"
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
            <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl" />
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
                      pathname === link.href ? "text-primary scale-110 italic" : "text-foreground/30 hover:text-primary"
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
                <Link href="/enquire" className="enquiry-button !px-10 !py-5 !text-xs">
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
