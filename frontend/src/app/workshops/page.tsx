"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Zap, BookOpen, Brain, Target, Shield, MessageSquare, Sparkles } from "lucide-react";
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

const workshops = [
  {
    id: "01",
    title: "Organizing a Student’s Life with AI",
    intro: "Stop drowning in deadlines. Start designing your days. Transform AI into your personal command center that manages academics, assignments, and goals with precision.",
    learn: [
      "Build AI-powered study schedules that adapt to your priorities",
      "Create intelligent to-do lists that prioritize automatically",
      "Design sustainable systems for notes, materials, and resources",
      "Master prompt engineering for actionable organization strategies",
      "Develop goal-setting frameworks that break objectives into steps"
    ],
    highlights: [
      "Move from reactive chaos to proactive control",
      "Build self-running systems through smart AI configuration",
      "Learn professional-level productivity prompt structures",
      "Develop lifelong organizational skills"
    ],
    duration: "2 Hours",
    shift: "From scattered notes and missed deadlines to a self-sustaining system.",
    icon: Target,
    color: "bg-secondary/20"
  },
  {
    id: "02",
    title: "Time Doesn’t Vanish — You Misuse It",
    intro: "Diagnose where your hours disappear, then redesign how you spend them. Use AI to audit productivity leaks and build schedules that reflect reality, not fantasy.",
    learn: [
      "Conduct AI-powered time audits to expose inefficiencies",
      "Design realistic schedules aligned with your actual capacity",
      "Master decision frameworks for ruthless prioritization",
      "Build AI systems that recommend what to tackle, drop, or automate",
      "Create energy-aware schedules for peak performance"
    ],
    highlights: [
      "Gain complete visibility into time allocation",
      "Replace guesswork with data-driven decisions",
      "Design schedules you’ll actually follow",
      "Master strategic elimination and delegation"
    ],
    duration: "2 Hours",
    shift: "From “I have no time” to “I control exactly where my time goes.”",
    icon: Clock,
    color: "bg-secondary/20"
  },
  {
    id: "03",
    title: "The AI Revolution — And What It Means for You",
    intro: "Understand the tool reshaping your future. Explore AI’s evolution, impact, and implications across education, careers, ethics, and society.",
    learn: [
      "Trace AI’s journey from basic computation to generative intelligence",
      "Understand AI’s impact on education, careers, and human behavior",
      "Explore how AI makes decisions and where bias originates",
      "Examine ethics, privacy, and responsible AI usage",
      "Recognize why prompt engineering is the new essential literacy"
    ],
    highlights: [
      "Think critically about AI capabilities and limitations",
      "Understand both how and why AI matters",
      "Navigate ethical considerations shaping AI’s future",
      "Position yourself as an informed navigator, not a passive user"
    ],
    duration: "2 Hours",
    shift: "From user to navigator — someone who understands why AI matters.",
    icon: Shield,
    color: "bg-secondary/20"
  },
  {
    id: "04",
    title: "Build Your Own AI Teacher",
    intro: "Why settle for one teaching style when you can design your own? Create personalized AI tutors tailored to your subjects, pace, and weak spots — available 24/7.",
    learn: [
      "Design AI tutors customized to specific subjects and goals",
      "Engineer prompts for explanations adapted to your level",
      "Create AI-powered quizzes for self-assessment and exam prep",
      "Build adaptive systems that target your weak areas",
      "Implement spaced repetition and active recall strategies"
    ],
    highlights: [
      "Access unlimited personalized tutoring on demand",
      "Design learning that matches your exact needs",
      "Eliminate dependency on external schedules",
      "Develop powerful self-directed learning skills"
    ],
    duration: "2 Hours",
    shift: "From depending on teachers to building your own — one that evolves with you.",
    icon: Brain,
    color: "bg-secondary/20"
  },
  {
    id: "05",
    title: "Prompt Engineering — The Language of AI",
    intro: "The difference between average and power users? Precision. Learn to speak AI’s language and unlock outputs most people don’t know are possible.",
    learn: [
      "Master prompt anatomy: structure, context, and constraints",
      "Design multi-step prompt chains for complex problems",
      "Use role-based prompting to shape AI’s expertise level",
      "Apply few-shot learning with strategic examples",
      "Craft prompts for specific formats, tones, and outputs",
      "Debug poor responses by refining your strategy",
      "Build reusable templates for recurring tasks"
    ],
    highlights: [
      "Transform vague requests into precise outputs",
      "Learn frameworks professionals use across industries",
      "Master iterative refinement for consistent results",
      "Gain the literacy that defines AI competence"
    ],
    duration: "2 Hours",
    shift: "From asking questions to engineering solutions — controlling AI instead of hoping it understands.",
    icon: MessageSquare,
    color: "bg-secondary/20"
  }
];

export default function WorkshopsPage() {
  const containerRef = useRef(null);
  
  return (
    <div ref={containerRef} className="flex flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-accent),transparent_40%)] opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 py-24 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-primary/30" />
              <span className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.4em] text-primary/60">
                CAPABILITY DEVELOPMENT
              </span>
            </motion.div>
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary font-serif leading-[0.95] mb-8"
            >
              AI Workshops <br />
              <span className="italic opacity-90">for Students</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl sm:text-2xl md:text-3xl text-foreground/70 font-sans font-light leading-relaxed max-w-2xl italic"
            >
              &ldquo;Because your potential deserves better tools than chaos and last-minute panic.&rdquo;
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary font-serif mb-8 leading-tight">Clarity. Control. <br />Confidence.</h2>
              <div className="w-20 h-1 bg-primary mb-8" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-light">
                These workshops are designed for students who want to master how they study, plan, and learn in the modern era.
              </p>
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                Instead of overwhelming tools, we focus on building practical, personalized AI systems that manage time, reduce stress, and target cognitive growth.
              </p>
              <div className="bg-background border border-border p-8 rounded-3xl mt-8 shadow-sm">
                <p className="text-primary text-lg font-serif italic leading-relaxed">
                  Each session is hands-on, immediate, and designed to transform academic friction into systematic flow.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshops List */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-32 md:space-y-48">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                  {/* Workshop Header & Intro */}
                  <div className="lg:col-span-5 space-y-8">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl md:text-6xl font-serif italic text-primary/10 select-none">{workshop.id}</span>
                      <div className="h-px w-12 bg-border" />
                      <div className={`p-4 rounded-2xl bg-card border border-border group-hover:bg-primary transition-all duration-500`}>
                        <workshop.icon className="w-8 h-8 text-primary group-hover:text-background transition-colors" strokeWidth={1.2} />
                      </div>
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl text-primary font-serif leading-tight">
                      {workshop.title}
                    </h3>
                    <p className="text-lg text-foreground/60 leading-relaxed font-light">
                      {workshop.intro}
                    </p>
                    <div className="flex items-center gap-3 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-primary/40 bg-secondary px-4 py-2 rounded-full w-fit">
                      <Clock className="w-3 h-3" />
                      Duration: {workshop.duration}
                    </div>
                    
                    {/* The Shift */}
                    <div className="bg-card/50 p-8 rounded-[2rem] border border-border/50 relative overflow-hidden group-hover:bg-background group-hover:shadow-2xl group-hover:shadow-primary/5 transition-all duration-500">
                      <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                        <Sparkles className="w-16 h-16 text-primary" />
                      </div>
                      <div className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-primary/40 mb-4">The Resulting Shift</div>
                      <p className="text-lg text-primary font-serif italic leading-relaxed">
                        &ldquo;{workshop.shift}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Workshop Details */}
                  <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10 md:gap-16 lg:pt-20">
                    <div className="space-y-8">
                      <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-primary/40 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" /> What You’ll Learn
                      </h4>
                      <ul className="space-y-6">
                        {workshop.learn.map((item, i) => (
                          <li key={i} className="flex gap-4 text-base text-foreground/70 leading-relaxed font-light group/li">
                            <CheckCircle2 className="w-5 h-5 text-primary/30 group-hover/li:text-primary transition-colors flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-8">
                      <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-primary/40 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Key Highlights
                      </h4>
                      <ul className="space-y-6">
                        {workshop.highlights.map((item, i) => (
                          <li key={i} className="flex gap-4 text-base text-foreground/70 leading-relaxed font-light group/li">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover/li:bg-primary transition-colors flex-shrink-0 mt-2.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery & Format Section */}
      <section className="py-24 md:py-40 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent),transparent_80%)] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary-foreground/40 mb-4 block">Execution</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif">Delivery & Format</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              "Live, interactive sessions",
              "Practical, step-by-step guidance",
              "Focus on real student workflows",
              "No prior technical background required"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2rem] text-center group hover:bg-white/10 transition-all duration-500"
              >
                <p className="text-lg font-serif italic group-hover:scale-105 transition-transform">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-48 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-accent rounded-[3rem] p-12 sm:p-20 md:p-32 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white,transparent_50%)] opacity-30 pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary/40 mb-8 block">Partner with us</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary font-serif mb-10 leading-tight">
                Bring These AI Workshops <br className="hidden sm:block" /> to Your Students
              </h2>
              <p className="text-lg sm:text-xl text-primary/60 font-light leading-relaxed mb-16 max-w-2xl mx-auto">
                For institutions, groups, or organizations interested in conducting these workshops, submit an enquiry to discuss scheduling and customization.
              </p>
              <Link 
                href="/enquire" 
                className="enquiry-button px-14 py-6 text-xl"
              >
                Submit Institutional Enquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
