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
<section
  className="
    relative overflow-hidden
    text-center
    pt-[160px] pb-[120px]
    bg-gradient-to-br
    from-[#6366F1]
    to-[#4F46E5]
  "
>
  {/* Subtle radial accent */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_45%)]" />

  <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-[900px]">
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* Small Label */}
      <motion.div
        variants={fadeInUp}
        className="mb-4"
      >
        <span
          className="
            text-[17px]
            font-semibold
            tracking-[3px]
            uppercase
            text-white/80
          "
        >
          CAPABILITY DEVELOPMENT
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        variants={fadeInUp}
        className="
          text-[44px] md:text-[68px]
          font-extrabold
          tracking-[-2px]
          leading-[1.1]
          text-white
          mb-6
        "
      >
        AI Workshops for Students
      </motion.h1>

      {/* Tagline */}
      <motion.p
        variants={fadeInUp}
        className="
          text-[30px]
          font-medium
          italic
          text-white
          leading-[1.4]
          max-w-[900px]
          mx-auto
          mb-12
        "
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
<section className="w-full">
  {workshops.map((workshop, index) => {
    const isGray = index % 2 === 1;

    const accents = [
      {
        badgeBg: "#EFF6FF",
        accent: "#3B82F6",
        shiftBg: "#EFF6FF",
        shiftText: "#1E40AF",
      },
      {
        badgeBg: "#F3E8FF",
        accent: "#8B5CF6",
        shiftBg: "#F3E8FF",
        shiftText: "#5B21B6",
      },
      {
        badgeBg: "#EEF2FF",
        accent: "#6366F1",
        shiftBg: "#EEF2FF",
        shiftText: "#3730A3",
      },
      {
        badgeBg: "#ECFDF5",
        accent: "#10B981",
        shiftBg: "#ECFDF5",
        shiftText: "#065F46",
      },
      {
        badgeBg: "#FFFBEB",
        accent: "#F59E0B",
        shiftBg: "#FFFBEB",
        shiftText: "#92400E",
      },
    ][index];

    return (
      <motion.section
        key={workshop.id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className={`${isGray ? "bg-[#F8FAFC]" : "bg-white"} py-[100px] px-6 lg:px-16`}
      >
        <div className="max-w-[1400px] mx-auto">
          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-[140px_1fr_1fr] gap-16 items-start">

            {/* WORKSHOP NUMBER */}
            <div className="relative hidden lg:block">
              <span
                className="absolute top-[-40px] left-0 text-[120px] font-extrabold opacity-[0.15] leading-none"
                style={{ color: accents.accent }}
              >
                {workshop.id}
              </span>
            </div>

            {/* LEFT CONTENT */}
            <div className="relative z-10 max-w-[720px] space-y-6">
              <h3 className="text-[36px] font-bold text-[#0F172A] leading-[1.2]">
                {workshop.title}
              </h3>

              <p className="text-[18px] text-[#475569] leading-relaxed">
                {workshop.intro}
              </p>

              {/* DURATION BADGE */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[14px] font-semibold"
                style={{
                  background: accents.badgeBg,
                  color: accents.accent,
                }}
              >
                <Clock size={16} />
                Duration: {workshop.duration}
              </div>

              {/* SHIFT + QUOTE */}
              <div
                className="mt-8 p-6 pl-8 rounded-lg border-l-4"
                style={{
                  background: accents.shiftBg,
                  borderLeftColor: accents.accent,
                }}
              >
                <p
                  className="text-[20px] italic leading-[1.5]"
                  style={{ color: accents.shiftText }}
                >
                  “{workshop.shift}”
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* WHAT YOU’LL LEARN */}
              <div
                className={`border-2 rounded-2xl p-8 ${
                  isGray ? "bg-white" : "bg-[#F8FAFC]"
                }`}
              >
                <h4 className="text-[20px] font-bold text-[#0F172A] mb-6">
                  What You’ll Learn
                </h4>
                <ul className="space-y-4">
                  {workshop.learn.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2
                        size={20}
                        className="text-[#10B981] flex-shrink-0 mt-1"
                      />
                      <span className="text-[16px] text-[#64748B] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* KEY HIGHLIGHTS */}
              <div
                className={`border-2 rounded-2xl p-8 ${
                  isGray ? "bg-white" : "bg-[#F8FAFC]"
                }`}
              >
                <h4 className="text-[20px] font-bold text-[#0F172A] mb-6">
                  Key Highlights
                </h4>
                <ul className="space-y-4">
                  {workshop.highlights.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <Zap
                        size={20}
                        className="text-[#F59E0B] flex-shrink-0 mt-1"
                      />
                      <span className="text-[16px] text-[#64748B] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </motion.section>
    );
  })}
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
