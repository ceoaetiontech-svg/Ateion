"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  pages: [
    { name: "Home", href: "/" },
    { name: "NCO", href: "/nco" },
    { name: "AI Workshops", href: "/workshops" },
  ],
  contact: [
    { name: "Enquire", href: "/enquire" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0A1628] to-[#1E293B] text-white py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 mb-20 md:mb-32">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl sm:text-5xl tracking-tighter block mb-4 font-serif tracking-wide">ATEION</span>
              <p className="text-[10px] font-normal uppercase tracking-[0.4em] text-white/40 leading-relaxed">
                The Capability Benchmark
              </p>
            </motion.div>
          </div>

          {/* Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[12px] font-normal uppercase tracking-[0.3em] text-white mb-8">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-white/60 hover:text-white inline-block cursor-pointer active:translate-x-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[12px] font-normal uppercase tracking-[0.3em] text-white mb-8">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-white/60 hover:text-white inline-block cursor-pointer active:translate-x-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h4 className="text-[12px] font-normal uppercase tracking-[0.3em] text-white mb-8">Philosophy</h4>
            <p className="text-lg italic text-white/70 leading-relaxed font-normal">
              &ldquo;Beyond memorization. Beyond grades.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8"
        >
          <div className="text-[10px] font-normal uppercase tracking-[0.3em] text-white/70">
            © {new Date().getFullYear()} ATEION. All rights reserved.
          </div>
          <div className="flex items-center gap-8">
            <div className="text-[10px] font-normal uppercase tracking-[0.3em] text-white/70">
              Capability-First Evaluation
            </div>
            <div className="text-[10px] font-normal uppercase tracking-[0.3em] text-white/70">
              India
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}