"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain, Lightbulb, Target, Users, GraduationCap, Building2, Award, Shield, TrendingUp } from "lucide-react";
import { alignmentFeatures, fadeInUp, framework, staggerContainer, stats } from "./pagedata";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen  overflow-hidden bg-gradient-to-br from-[#0A1628] to-[#1E293B]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 py-20 text-center relative z-10 max-w-[800px] top-0">

          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#3B82F6]/40"></div>
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#60A5FA]">The ATEION Standard</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#3B82F6]/40"></div>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0 }
              }}
              className="text-7xl sm:text-6xl lg:text-8xl xl:text-9xl mb-5 leading-[0.95] text-white font-light tracking-tight"
              style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
            >
              The Capability <br /><span className="font-normal bg-gradient-to-r from-white via-white to-[#93C5FD] bg-clip-text text-transparent">Benchmark</span>
            </motion.h1>

            <motion.p
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 }
              }}
              className="text-lg lg:text-xl text-[#94A3B8] font-normal max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Beyond memorization. Beyond grades. ATEION establishes a national standard for capability-first evaluation.
            </motion.p>

            <motion.div
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.4 }
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
            >
              <Link href='/nco'><button className="cursor-pointer group relative px-10 py-3 rounded-full bg-white text-[#0A1628] text-base overflow-hidden transition-all duration-300 hover:bg-[#F8FAFC] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.2)]">
                Explore Framework
              </button></Link>
              <Link href='/workshops'><button className="cursor-pointer group relative px-10 py-3 rounded-full bg-white text-[#0A1628] text-base overflow-hidden transition-all duration-300 hover:bg-[#F8FAFC] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.2)]">
                Workshops
              </button></Link>

            </motion.div>

            {/* Stats */}
            <motion.div
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.6 }
              }}
              className="grid grid-cols-3 gap-8 lg:gap-16 max-w-3xl mx-auto pt-12 border-t border-white/10"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center transition-transform duration-300 hover:-translate-y-1">
                  <div
                    className="text-4xl lg:text-5xl xl:text-[64px] mb-2 tracking-tight bg-gradient-to-r from-[#3B82F6] to-[#F59E0B] bg-clip-text text-transparent"
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-base font-medium uppercase tracking-wider text-[#64748B]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* National Standard Section */}
      <section className="py-24 lg:py-32 bg-white border-b border-[#E2E8F0]">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1200px]">
          <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl text-[#0F172A] mb-6 leading-tight tracking-normal">
              Establishing a national standard for capability evaluation
            </h2>
            <p className="text-lg lg:text-xl text-[#64748B] leading-relaxed max-w-[800px] mx-auto">
              Building the foundational infrastructure for capability-first evaluation in India, trusted by elite institutions nationwide.
            </p>
          </motion.div>



          {/* Alignment Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {alignmentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -16, boxShadow: "0 12px 48px rgba(0,0,0,0.08)" }}
                whileTap={{ y: -36, boxShadow: "0 12px 48px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                // Add separate tap transition
                transition={{
                  tap: { type: "spring", bounce: 0.3, duration: 0.6 }
                }}
                viewport={{ once: true }}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-10"
              >
                <div className="w-12 h-12 mb-6 text-[#2563EB]">
                  <feature.icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl text-[#0F172A] mb-4 tracking-normal">{feature.title}</h3>
                <p className="text-base text-[#64748B] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Programs Section */}
      <section className="py-24 lg:py-32 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1200px]">
          <motion.div {...fadeInUp} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-sm uppercase tracking-wider text-[#2563EB] font-semibold mb-3 block">OUR INITIATIVES</span>
              <h2 className="text-4xl lg:text-5xl text-[#0F172A] tracking-normal">
                Programs designed to cultivate excellence
              </h2>
            </div>
            <button className="cursor-pointer group flex items-center gap-2 text-[#2563EB] font-semibold text-base hover: transition-all">
              View All Programs <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -16, boxShadow: "0 12px 48px rgba(37,99,235,0.15)" }}
              whileTap={{ y: -36, boxShadow: "0 12px 48px rgba(37,99,235,0.15)" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              transition={{
                tap: { type: "spring", bounce: 0.3, duration: 0.6 }
              }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-[#EFF6FF] border-l-4 border-[#2563EB] p-12"
            >
              <span className="text-sm uppercase tracking-wider text-[#2563EB] font-semibold mb-4 block">INITIATIVE 01</span>
              <h3 className="text-3xl lg:text-4xl text-[#0F172A] mb-4 leading-tight tracking-normal">National Capability Olympiad</h3>
              <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
                A rigorous examination framework evaluating cognitive reasoning and analytical precision.
              </p>
              <button className="cursor-pointer group inline-flex items-center gap-2 text-[#2563EB] font-semibold text-base hover:gap-3 transition-all duration-300">
                Access Framework <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -16, boxShadow: "0 12px 48px rgba(37,99,235,0.15)" }}
              whileTap={{ y: -36, boxShadow: "0 12px 48px rgba(37,99,235,0.15)" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              transition={{
                tap: { type: "spring", bounce: 0.3, duration: 0.6 }
              }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl bg-white border-l-4 border-[#2563EB] p-12"
            >
              <span className="text-sm uppercase tracking-wider text-[#2563EB] font-semibold mb-4 block">INITIATIVE 02</span>
              <h3 className="text-3xl lg:text-4xl text-[#0F172A] mb-4 leading-tight tracking-normal">Capability Workshops</h3>
              <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
                Specialized development paths for systematic thinking in the modern era.
              </p>
              <button className="cursor-pointer group inline-flex items-center gap-2 text-[#2563EB] font-semibold text-base hover:gap-3 transition-all duration-300">
                Explore Path <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Framework Dimensions Section */}
      <section className="py-24 lg:py-32 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-8 max-w-[1200px]">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider text-[#3B82F6] font-semibold mb-3 block">CORE FRAMEWORK</span>
            <h2 className="text-4xl lg:text-5xl text-white tracking-normal">
              Dimensions of Capability
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-8">
            {framework.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -16, borderColor: "#3B82F6", boxShadow: "0 2px 8px #3B82F6" }}
                whileTap={{ y: -36, borderColor: "#3B82F6", boxShadow: "0 2px 8px #3B82F6" }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                transition={{
                  tap: { type: "spring", bounce: 0.3, duration: 0.6 }
                }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#3B82F6]/30 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(59,130,246,0.2)]  p-10 rounded-2xl"
              >
                <div className="w-10 h-10 mb-6 text-[#3B82F6]">
                  <item.icon size={40} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl mb-4 text-white tracking-normal lg:tracking-[0.04em]">{item.title}</h4>
                <p className="text-base text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Philosophy Banner */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-[#1E293B] to-[#0A1628] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        </div>
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative z-10">
          <motion.div {...fadeInUp} className="text-center space-y-4">
            <div className="h-px w-24 bg-white/20 mx-auto mb-12" />
            <h2 className="text-5xl lg:text-7xl leading-tight lg:tracking-[0.02em]">
              Beyond memorization.
            </h2>
            <h2 className="text-5xl lg:text-7xl leading-tight lg:tracking-[0.02em]">
              Beyond grades.
            </h2>
            <div className="h-px w-24 bg-white/20 mx-auto mt-12" />
          </motion.div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-[900px]">
          <motion.div {...fadeInUp} className="text-center">
            <span className="text-sm uppercase tracking-wider text-[#2563EB] font-semibold mb-3 block">PARTNER WITH ATEION</span>
            <h2 className="text-4xl lg:text-5xl text-[#0F172A] mb-6 leading-tight tracking-normal">
              Begin Your Institution's Assessment Journey
            </h2>
            <p className="text-lg lg:text-xl text-[#64748B] mb-12 leading-relaxed">
              Join 200+ elite institutions establishing a new benchmark for student capability and cognitive excellence across India.
            </p>
            <Link href='/enquire'><button className="cursor-pointer group relative px-12 py-5 rounded-full bg-gradient-to-r from-[#1E3A5F] to-[#2C5282] text-white text-lg overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(30,58,95,0.4)]">
              <span className="relative z-10">Submit Institutional Enquiry</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2C5282] to-[#1E3A5F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}