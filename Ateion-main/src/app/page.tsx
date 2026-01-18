"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, Brain, Lightbulb, Target, Users, GraduationCap, Building2 } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const framework = [
  {
    title: "Interpretative Reasoning",
    description: "The ability to decode complex information and identify underlying patterns from unfamiliar contexts.",
    icon: Brain
  },
  {
    title: "Logical Structure",
    description: "Evaluation of systematic thought frameworks used to construct coherent and defensible arguments.",
    icon: Target
  },
  {
    title: "Creative Application",
    description: "The capacity to synthesize knowledge across domains and apply it innovatively to novel scenarios.",
    icon: Lightbulb
  },
  {
    title: "Analytical Precision",
    description: "Systematic breakdown of complex problems into manageable components with clear methodology.",
    icon: BookOpen
  }
];

const stats = [
  { label: "Institutions", value: "200+", icon: Building2 },
  { label: "Students", value: "50K+", icon: GraduationCap },
  { label: "Partners", value: "100+", icon: Users }
];

const alignmentFeatures = [
  {
    title: "Aligned with NEP 2020",
    description: "Framework designed in accordance with National Education Policy guidelines for competency-based assessment."
  },
  {
    title: "Endorsed Nationwide",
    description: "Trusted by students, educators, and institutions across the country for capability benchmarking."
  },
  {
    title: "National Standard",
    description: "Building the foundational infrastructure for capability-first evaluation in India."
  }
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  return (
    <div className="flex flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent),transparent_70%)] opacity-30 pointer-events-none" />
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="container mx-auto px-4 sm:px-6 py-20 text-center relative z-10"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-6 bg-primary/20" />
              <span className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.5em] text-primary/50">
                The ATEION Standard
              </span>
              <div className="h-px w-6 bg-primary/20" />
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] mb-8 leading-[0.9] text-primary font-serif tracking-tighter"
            >
              The Capability <br />
              <span className="italic opacity-90">Benchmark</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-foreground/70 font-sans font-light max-w-3xl mx-auto mb-12 px-4 leading-relaxed"
            >
              Beyond memorization. Beyond grades. ATEION establishes a national standard for capability-first evaluation.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
            >
              <Link href="/nco" className="enquiry-button px-10">
                Explore Framework
              </Link>
              <Link href="/workshops" className="group px-10 py-4 rounded-full border border-border text-primary font-sans font-medium hover:bg-secondary transition-all duration-300 flex items-center gap-2">
                Workshops <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-3 gap-6 sm:gap-12 max-w-3xl mx-auto border-t border-border/50 pt-12"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-2 tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] text-primary/40 group-hover:text-primary transition-colors">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 md:py-40 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-5xl mx-auto text-center mb-24 md:mb-32"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary mb-10 font-serif leading-tight">
              Establishing a national standard for <span className="italic">capability evaluation</span>.
            </h2>
            <div className="h-px w-24 bg-primary/20 mx-auto mb-10" />
            <p className="text-xl sm:text-2xl text-foreground/60 leading-relaxed max-w-4xl mx-auto font-light">
              Building the foundational infrastructure for capability-first evaluation in India, trusted by elite institutions nationwide.
            </p>
          </motion.div>

          {/* Alignment Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {alignmentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border/50 rounded-[2rem] p-8 md:p-12 group hover:bg-primary hover:border-primary transition-all duration-500"
              >
                <div className="w-1.5 h-12 bg-primary group-hover:bg-accent mb-8 transition-colors" />
                <h3 className="text-2xl sm:text-3xl text-primary group-hover:text-primary-foreground mb-4 font-serif transition-colors">{feature.title}</h3>
                <p className="text-base text-foreground/50 group-hover:text-primary-foreground/70 leading-relaxed transition-colors">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 md:py-40 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent opacity-[0.03] blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24"
          >
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-bold mb-4 block">Our Initiatives</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary font-serif">
                Programs designed to <br className="hidden sm:block" /> cultivate excellence.
              </h2>
            </div>
            <Link href="/workshops" className="flex items-center gap-3 text-primary font-sans font-bold uppercase tracking-[0.2em] text-[10px] hover:gap-5 transition-all group border-b border-primary/20 pb-2">
              View All Programs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] sm:aspect-[16/10] lg:aspect-square bg-primary p-10 md:p-14 flex flex-col justify-between shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <span className="text-primary-foreground/40 font-sans font-bold uppercase tracking-[0.4em] text-[10px]">Initiative 01</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl sm:text-5xl md:text-6xl text-primary-foreground mb-6 font-serif leading-tight">National Capability <br />Olympiad</h3>
                <p className="text-primary-foreground/60 mb-10 max-w-sm text-lg font-light leading-relaxed group-hover:text-primary-foreground/80 transition-colors">
                  A rigorous examination framework evaluating cognitive reasoning and analytical precision.
                </p>
                <Link href="/nco" className="inline-flex items-center gap-3 text-accent font-sans font-bold uppercase tracking-[0.2em] text-xs hover:gap-5 transition-all">
                  Access Framework <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] sm:aspect-[16/10] lg:aspect-square bg-card p-10 md:p-14 flex flex-col justify-between border border-border/50 shadow-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <span className="text-primary/40 font-sans font-bold uppercase tracking-[0.4em] text-[10px]">Initiative 02</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl sm:text-5xl md:text-6xl text-primary mb-6 font-serif leading-tight">Capability <br />Workshops</h3>
                <p className="text-foreground/50 mb-10 max-w-sm text-lg font-light leading-relaxed group-hover:text-foreground/70 transition-colors">
                  Specialized development paths for systematic thinking in the modern era.
                </p>
                <Link href="/workshops" className="inline-flex items-center gap-3 text-primary font-sans font-bold uppercase tracking-[0.2em] text-xs hover:gap-5 transition-all">
                  Explore Path <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Framework Dimensions Section */}
      <section className="py-24 md:py-40 bg-background border-t border-border/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20 md:mb-24"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-bold mb-4 block">Core Framework</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary font-serif">
              Dimensions of <span className="italic">Capability</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {framework.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/30 border border-border/50 hover:bg-background hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 group transition-all duration-700 p-8 sm:p-10 rounded-[2rem] flex flex-col gap-8"
              >
                <div className="w-16 h-16 bg-background border border-border/50 group-hover:bg-primary group-hover:border-primary rounded-2xl flex items-center justify-center transition-all duration-500">
                  <item.icon className="text-primary group-hover:text-background w-8 h-8 transition-colors" strokeWidth={1.2} />
                </div>
                <div>
                  <h4 className="text-2xl mb-4 text-primary font-serif">{item.title}</h4>
                  <p className="text-base text-foreground/50 leading-relaxed group-hover:text-foreground/70 transition-colors font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-24 md:py-48 overflow-hidden bg-primary text-primary-foreground relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-accent),transparent_80%)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] italic leading-tight tracking-tighter mb-4 opacity-40 hover:opacity-100 transition-opacity duration-700"
            >
              Beyond memorization.
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] leading-tight tracking-tighter"
            >
              Beyond grades.
            </motion.h2>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-48 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="bg-accent rounded-[3rem] p-12 sm:p-20 md:p-32 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white,transparent_50%)] opacity-40 pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.5em] text-primary/40 mb-10 block">Partner with ATEION</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-12 font-serif leading-tight">Begin Your Institution&apos;s <br className="hidden sm:block" /> Assessment Journey</h2>
              <p className="text-primary/60 max-w-2xl mx-auto mb-16 text-lg sm:text-xl font-light leading-relaxed">
                Join 200+ elite institutions establishing a new benchmark for student capability and cognitive excellence across India.
              </p>
              <Link href="/enquire" className="enquiry-button px-14 py-6 text-xl">
                Submit Institutional Enquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
