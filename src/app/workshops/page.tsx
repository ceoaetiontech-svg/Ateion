"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Zap, BookOpen, Brain, Target, Shield, MessageSquare, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Users, CheckCircle, Briefcase, GraduationCap } from "lucide-react";


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
<section className="relative overflow-hidden">
  {/* Background layers */}
  <div className="absolute inset-0 bg-[#071428]" />

  {/* Top radial glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,78,216,0.35),transparent_60%)]" />

  {/* Center soft blue density */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,42,82,0.6),transparent_65%)]" />

  {/* Bottom dark fade */}
  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,#050B1A_100%)]" />

  {/* Content */}
  <div className="relative z-10 min-h-[85vh] flex items-center justify-center px-6">
    <div className="max-w-[900px] text-center">

      {/* Small label */}
      <div className="mb-4">
        <span className="text-[14px] tracking-[3px] uppercase text-white/80">
          Capability Development
        </span>
      </div>

      {/* Main heading */}
      <h1 className="text-[45px] sm:text-[69px]  text-white leading-[1.1] tracking-[-2px] mb-6">
        AI Workshops <br /> for Students
      </h1>

      {/* Tagline */}
      <p className="text-[28px]  italic text-white leading-[1.4] mb-12">
        “Because your potential deserves better tools than chaos and last-minute panic.”
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button className="px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-lg  transition">
          Explore Framework
        </button>

        <button className="px-10 py-4 rounded-full border border-white/30 text-white text-lg hover:bg-white/10 transition">
          Workshops →
        </button>
      </div>
    </div>
  </div>
</section>


{/* About Section */}
<section className="bg-white py-[100px] px-6">
  <div className="max-w-[1200px] mx-auto text-center">

    {/* Main statement */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-[36px] md:text-[56px]  text-[#0F172A] tracking-[-1px] mb-8"
    >
      Clarity. Control. Confidence.
    </motion.h2>

    {/* Description content */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true }}
      className="max-w-[900px] mx-auto space-y-6"
    >
      {/* Paragraph 1 – workshop design */}
      <p className="text-[20px] text-[#64748B] leading-[1.7]">
        These workshops are designed for students who want to master how they study,
        plan, and learn in the modern era — without adding unnecessary complexity.
      </p>

      {/* Paragraph 2 – practical systems */}
      <p className="text-[20px] text-[#64748B] leading-[1.7]">
        Instead of overwhelming tools, we focus on building practical, personalized AI
        systems that help manage time, reduce stress, and support meaningful cognitive growth.
      </p>

      {/* Paragraph 3 – hands-on emphasis */}
      <div className="mt-8 inline-block bg-[#F8FAFC] border border-[#E2E8F0] px-10 py-6 rounded-2xl">
        <p className="text-[20px] italic text-[#0F172A] leading-[1.6]">
          Each session is hands-on, immediate, and designed to transform academic friction
          into systematic, repeatable flow.
        </p>
      </div>
    </motion.div>

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
        numberColor: "rgba(59, 130, 246, 0.85)", // Blue
      },
      {
        badgeBg: "#FEE2E2",
        accent: "#DC2626",
        shiftBg: "#FEF2F2",
        shiftText: "#991B1B",
        numberColor: "rgba(220, 38, 38, 0.85)", // Red
      },
      {
        badgeBg: "#EEF2FF",
        accent: "#6366F1",
        shiftBg: "#EEF2FF",
        shiftText: "#3730A3",
        numberColor: "rgba(99, 102, 241, 0.85)", // Indigo
      },
      {
        badgeBg: "#ECFDF5",
        accent: "#10B981",
        shiftBg: "#ECFDF5",
        shiftText: "#065F46",
        numberColor: "rgba(16, 185, 129, 0.85)", // Green
      },
      {
        badgeBg: "#FFFBEB",
        accent: "#F59E0B",
        shiftBg: "#FFFBEB",
        shiftText: "#92400E",
        numberColor: "rgba(245, 158, 11, 0.85)", // Amber
      },
    ][index];

    return (
      <motion.section
        key={workshop.id}
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`${isGray ? "bg-[#F8FAFC]" : "bg-white"} py-[88px] px-6 lg:px-16`}
      >
        <div className="max-w-[1280px] mx-auto">
          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-[110px_1fr_1fr] gap-12 items-start">

            {/* WORKSHOP NUMBER */}
            <div className="hidden lg:flex items-start justify-center pt-1">
              <span
                className="text-[88px] font-extrabold leading-none select-none"
                style={{ color: accents.numberColor }}
              >
                {workshop.id}
              </span>
            </div>

            {/* LEFT CONTENT */}
            <div className="max-w-[680px] space-y-4">
              <h3 className="text-[40px] text-[#0F172A] leading-[1.2]">
                {workshop.title}
              </h3>

              <p className="text-[18px] text-[#475569] leading-relaxed">
                {workshop.intro}
              </p>

              {/* DURATION BADGE */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[14px]"
                style={{
                  background: accents.badgeBg,
                  color: accents.accent,
                }}
              >
                <Clock size={16} />
                Duration: {workshop.duration}
              </div>

              {/* SHIFT QUOTE */}
              <div
                className="mt-6 p-6 pl-7 rounded-lg border-l-4"
                style={{
                  background: accents.shiftBg,
                  borderLeftColor: accents.accent,
                }}
              >
                <p
                  className="text-[18px] italic leading-[1.5]"
                  style={{ color: accents.shiftText }}
                >
                  “{workshop.shift}”
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* WHAT YOU’LL LEARN */}
              <div className="border rounded-2xl p-6 bg-white">
                <h4 className="text-[21px] text-[#0F172A] mb-4">
                  What You’ll Learn
                </h4>
                <ul className="space-y-3">
                  {workshop.learn.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2
                        size={18}
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
              <div className="border rounded-2xl p-6 bg-white">
                <h4 className="text-[21px] text-[#0F172A] mb-4">
                  Key Highlights
                </h4>
                <ul className="space-y-3">
                  {workshop.highlights.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <Zap
                        size={18}
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




{/* Delivery & Format Section */}
<section className="bg-[#0A1628] py-[100px] px-6">
  <div className="max-w-[1200px] mx-auto text-center">

    {/* Section header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Small label */}
      <div className="text-[14px] font-semibold tracking-[2px] uppercase text-[#3B82F6] mb-3">
        Execution
      </div>

      {/* Main heading */}
      <h2 className="text-[58px]  text-white mb-12">
        Delivery &amp; Format
      </h2>
    </motion.div>

    {/* Feature cards grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl p-8 text-center
                   bg-white/5 backdrop-blur-md
                   border border-white/10"
      >
        <Users className="w-12 h-12 mx-auto mb-4 text-[#3B82F6]" />
        <p className="text-[18px] font-medium text-[#E2E8F0] leading-relaxed">
          Live, interactive sessions
        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl p-8 text-center
                   bg-white/5 backdrop-blur-md
                   border border-white/10"
      >
        <CheckCircle className="w-12 h-12 mx-auto mb-4 text-[#3B82F6]" />
        <p className="text-[18px] font-medium text-[#E2E8F0] leading-relaxed">
          Practical, step-by-step guidance
        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl p-8 text-center
                   bg-white/5 backdrop-blur-md
                   border border-white/10"
      >
        <Briefcase className="w-12 h-12 mx-auto mb-4 text-[#3B82F6]" />
        <p className="text-[18px] font-medium text-[#E2E8F0] leading-relaxed">
          Focus on real student workflows
        </p>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl p-8 text-center
                   bg-white/5 backdrop-blur-md
                   border border-white/10"
      >
        <GraduationCap className="w-12 h-12 mx-auto mb-4 text-[#3B82F6]" />
        <p className="text-[18px] font-medium text-[#E2E8F0] leading-relaxed">
          No prior technical background required
        </p>
      </motion.div>

    </div>
  </div>
</section>


   {/* CTA Section */}
<section className="bg-white py-[120px] px-6 text-center">
  <div className="max-w-[1200px] mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      {/* Small label */}
      <div className="text-[14px] font-semibold tracking-[2px] uppercase text-[#3B82F6] mb-3">
        Partner with us
      </div>

      {/* Main heading */}
      <h2 className="text-[45px]  text-[#0F172A] mb-6 leading-tight">
        Bring These AI Workshops to Your Students
      </h2>

      {/* Description */}
      <p className="text-[20px] text-[#64748B] leading-[1.6] max-w-[900px] mx-auto mb-12">
        For institutions, groups, or organizations interested in conducting these workshops,
        submit an enquiry to discuss scheduling and customization.
      </p>

      {/* CTA Button */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href="/enquire"
          className="
            inline-block
            px-12 py-[18px]
            text-[18px] font-semibold text-white
            rounded-xl
            bg-[linear-gradient(135deg,#3B82F6,#2563EB)]
            shadow-[0_12px_32px_rgba(59,130,246,0.3)]
            hover:shadow-[0_16px_48px_rgba(59,130,246,0.4)]
            transition-all duration-300
          "
        >
          Submit Institutional Enquiry
        </Link>
      </motion.div>
    </motion.div>
  </div>
</section>
</div>
  );
}