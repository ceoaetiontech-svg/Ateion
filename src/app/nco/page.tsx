"use client";

import { motion } from "framer-motion"; // Smooth scroll-triggered animations
import { Brain, Target, Lightbulb, BookOpen, Clock, FileQuestion, CheckCircle, Award, Medal, Trophy, Calendar, Building2, User } from "lucide-react"; // All icons used
import Link from "next/link"; // Next.js fast navigation links

// 4 core evaluation dimensions NCO tests (with icons)
const evaluationDimensions = [
  {
    title: "Interpretative Reasoning",
    description: "Ability to analyze unfamiliar information, identify patterns, and derive insights from novel contexts.",
    icon: Brain
  },
  {
    title: "Logical Structure",
    description: "Evaluation of reasoning chains used to construct coherent arguments and decision processes.",
    icon: Target
  },
  {
    title: "Creative Application",
    description: "Capability to apply concepts innovatively across domains to solve non-routine problems.",
    icon: Lightbulb
  },
  {
    title: "Analytical Precision",
    description: "Accuracy and structure in breaking down complex problems into solvable components.",
    icon: BookOpen
  }
];

// Exam format stats - 60min, 40 MCQs
const examStructure = [
  { label: "Duration", value: "60 MIN", icon: Clock },
  { label: "Questions", value: "40", icon: FileQuestion },
  { label: "Format", value: "MCQ", icon: CheckCircle }
];

// 4 eligibility grade groups
const eligibilityCategories = [
  { grade: "Classes 3-5", description: "Foundational reasoning and expression" },
  { grade: "Classes 6-8", description: "Structured thinking and interpretation" },
  { grade: "Classes 9-10", description: "Problem-solving depth and application" },
  { grade: "Classes 11-12 & Undergraduate", description: "Professional capability assessment" }
];

// 4 scoring components in results
const scoringComponents = [
  { title: "Raw Score", description: "Total correct responses across all sections" },
  { title: "Section Score", description: "Adjusted score reflecting capability strength" },
  { title: "Percentile Rank", description: "Relative performance against peer group" },
  { title: "Capability Profile", description: "Detailed breakdown by evaluation dimension" }
];

// 3 award tiers with colors/icons
const awards = [
  { title: "Gold", description: "Awarded to top performers demonstrating exceptional capability across all dimensions.", icon: Trophy, color: "text-amber-500" },
  { title: "Silver", description: "Recognizes strong capability with consistent performance across sections.", icon: Medal, color: "text-slate-400" },
  { title: "Bronze", description: "Acknowledges solid foundational capability and analytical competence.", icon: Award, color: "text-amber-700" }
];

// 2 registration flows (institutional vs individual)
const registrationSteps = {
  institutional: [
    "Submit institutional enquiry",
    "Receive registration details",
    "Confirm student participation",
    "Conduct examination at institution"
  ],
  individual: [
    "Complete application form",
    "Pay participation fee",
    "Receive examination credentials",
    "Attempt examination online"
  ]
};

// 2025 exam timeline (5 key dates)
const importantDates = [
  { event: "Registration Opens", date: "February 1, 2025" },
  { event: "Final Registration Deadline Without LateFee", date: "March 20, 2025" },
  { event: "Final Registration Deadline With LateFee", date: "February 28, 2025" },
  { event: "Examination Date", date: "March 5, 2025" },
  { event: "Results Declaration", date: "March 30, 2025" }
];

// 4 exam sections matching evaluation dimensions
const distributionSections = [
  { id: "Section A", title: "Interpretative Reasoning" },
  { id: "Section B", title: "Logical Structure" },
  { id: "Section C", title: "Creative Application" },
  { id: "Section D", title: "Analytical Precision" }
];

export default function NCOPage() {
  return (
    <div className="flex flex-col selection:bg-primary selection:text-primary-foreground">
      
      {/* Hero: Main headline + CTA buttons */}
      <section className="min-h-[70vh] flex items-center bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-accent),transparent_40%)] opacity-20" /> {/* Background gradient */}
        <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-4xl">
            {/* Subtitle badge */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary/30" />
              <span className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.4em] text-primary/60">
                National Standard for Capability
              </span>
            </motion.div>
            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-6 leading-[0.95] font-serif">
              National Capability <br className="hidden md:block" />
              <span className="italic opacity-90">Olympiad</span>
            </h1>
            {/* Hero description */}
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-2xl leading-relaxed mb-10 font-sans font-light">
              A structured national examination framework evaluating cognitive reasoning and creative application.
            </p>
            {/* 2 CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/enquire" className="enquiry-button">Register Institution</Link>
              <Link href="#structure" className="px-8 py-4 rounded-full border border-border text-primary font-sans font-medium hover:bg-secondary transition-all duration-300">Learn More</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* "What is NCO" intro section */}
      <section className="py-24 md:py-32 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Headline */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-8 font-serif leading-tight">Beyond memorization. <br />Beyond grades.</h2>
              <div className="h-1 w-20 bg-primary mb-8" /> {/* Decorative line */}
            </motion.div>
            {/* Right: Description + quote */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-8">
              <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-light">Rigorous standardized exam evaluating critical thinking and reasoning.</p>
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">Comparative benchmark measuring cognitive capabilities for modern excellence.</p>
              <div className="bg-background border border-border p-8 rounded-3xl mt-8 shadow-sm">
                <p className="text-primary text-lg font-serif italic leading-relaxed">"NCO serves as national standard for measuring capability beyond traditional grades."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Evaluation dimensions cards */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-20 md:mb-24">
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-bold mb-4 block">Dimensions of assessment</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary font-serif">What NCO Evaluates</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {evaluationDimensions.map((dimension, index) => ( // Maps 4 dimensions into hover cards
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}
                className="bg-card/40 border border-border/50 rounded-[2.5rem] p-8 sm:p-10 group hover:bg-background hover:border-primary/20 hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-background border border-border group-hover:bg-primary group-hover:border-primary rounded-2xl flex items-center justify-center mb-8 transition-all duration-500">
                  <dimension.icon className="w-8 h-8 text-primary group-hover:text-background transition-colors" strokeWidth={1.2} />
                </div>
                <h3 className="text-2xl sm:text-3xl text-primary mb-4 font-serif">{dimension.title}</h3>
                <p className="text-base sm:text-lg text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors">{dimension.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam structure stats + section breakdown */}
      <section id="structure" className="py-24 md:py-40 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background blur orbs */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-20 md:mb-24">
            <p className="text-primary-foreground/40 font-sans uppercase tracking-[0.4em] text-[10px] font-bold mb-4">The Framework</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif">Examination Structure</h2>
          </motion.div>

          {/* 3 big stat cards: 60min/40q/MCQ */}
          <div className="grid sm:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto mb-24 md:mb-32">
            {examStructure.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-10 text-center">
                <item.icon className="w-10 h-10 mx-auto mb-6 text-accent/80" strokeWidth={1} />
                <div className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4 tracking-tighter">{item.value}</div>
                <div className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-primary-foreground/50">{item.label}</div>
              </motion.div>
            ))}
          </div>

          {/* 4 exam sections grid */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl mb-10 text-center font-serif opacity-80 uppercase tracking-widest">Sectional Distribution</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {distributionSections.map((section, index) => (
                <div key={index} className="bg-white/10 hover:bg-white/15 transition-colors border border-white/5 rounded-2xl p-6 text-center group">
                  <div className="text-[10px] text-primary-foreground/40 font-bold uppercase tracking-[0.2em] mb-2 group-hover:text-accent transition-colors">{section.id}</div>
                  <div className="text-xs sm:text-sm text-primary-foreground/90 font-medium leading-tight">{section.title}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4 Eligibility grade categories */}
      <section className="py-24 md:py-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-bold mb-4 block">Who can participate</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary mb-6 font-serif">Eligibility</h2>
                <p className="text-lg text-foreground/60 leading-relaxed font-light">Open to students in recognized Indian institutions across 4 cohorts.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {eligibilityCategories.map((category, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}
                  className="bg-card/40 border border-border/50 rounded-[2rem] p-8 sm:p-10 hover:bg-accent/20 transition-all duration-500">
                  <div className="text-2xl sm:text-3xl text-primary mb-4 font-serif">{category.grade}</div>
                  <p className="text-base text-foreground/60 leading-relaxed">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 Scoring methodology cards */}
      <section className="py-24 md:py-40 bg-card/20 border-y border-border/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary mb-8 font-serif text-center">Scoring Methodology</h2>
              <p className="text-lg sm:text-xl text-foreground/60 text-center max-w-3xl mx-auto leading-relaxed font-light">Standardized scoring with comparative benchmarks, no negative marking.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {scoringComponents.map((component, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
                  className="bg-background border border-border/50 rounded-3xl p-8 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 bg-primary text-background rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{index + 1}</div>
                    <div>
                      <h4 className="text-xl font-serif text-primary mb-2">{component.title}</h4>
                      <p className="text-base text-foreground/60 leading-relaxed">{component.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No negative marking note */}
            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 text-center backdrop-blur-sm">
              <p className="text-base text-primary/80 font-sans tracking-wide">
                <span className="font-bold uppercase text-[10px] bg-primary text-background px-2 py-0.5 rounded mr-2">Note</span>
                <strong>No negative marking</strong> - every question demonstrates capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Award tiers */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-20 md:mb-24">
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-bold mb-4 block">Excellence rewarded</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary font-serif">Recognition & Awards</h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {awards.map((award, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.15 }} viewport={{ once: true }} whileHover={{ y: -15 }}
                className="bg-background border border-border/50 rounded-[2.5rem] p-10 text-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500">
                <div className={`w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center bg-card/50`}>
                  <award.icon className={`w-10 h-10 ${award.color}`} strokeWidth={1} />
                </div>
                <h3 className="text-3xl text-primary mb-4 font-serif">{award.title}</h3>
                <p className="text-base text-foreground/60 leading-relaxed font-light">{award.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Certificate note */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} 
            className="bg-card/40 border border-border/50 rounded-[2rem] p-10 text-center max-w-3xl mx-auto">
            <p className="text-lg text-foreground/80 font-light italic">
              All participants receive detailed <strong className="text-primary font-serif font-normal underline decoration-primary/20 underline-offset-4">Capability Profile Report</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2 Registration process columns */}
      <section className="py-24 md:py-40 bg-card/30 border-y border-border/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary font-serif">Registration Process</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Institutional registration (4 steps) */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} 
              className="bg-primary rounded-[2.5rem] p-10 md:p-14 text-primary-foreground relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><Building2 className="w-6 h-6 text-accent" /></div>
                <h3 className="text-2xl sm:text-3xl font-serif">Institutional</h3>
              </div>
              <div className="space-y-6">
                {registrationSteps.institutional.map((step, index) => (
                  <div key={index} className="flex items-start gap-6 group/item">
                    <div className="w-8 h-8 bg-white/10 border border-white/5 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover/item:bg-white/20 transition-colors">{index + 1}</div>
                    <p className="text-primary-foreground/80 pt-1 text-lg font-light leading-tight">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Individual registration (4 steps) */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} 
              className="bg-background border border-border rounded-[2.5rem] p-10 md:p-14 shadow-sm">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center"><User className="w-6 h-6 text-primary" /></div>
                <h3 className="text-2xl sm:text-3xl text-primary font-serif">Individual</h3>
              </div>
              <div className="space-y-6">
                {registrationSteps.individual.map((step, index) => (
                  <div key={index} className="flex items-start gap-6 group/item">
                    <div className="w-8 h-8 bg-card border border-border rounded-full flex items-center justify-center text-sm font-bold text-primary flex-shrink-0 group-hover/item:bg-accent/20 transition-colors">{index + 1}</div>
                    <p className="text-foreground/70 pt-1 text-lg font-light leading-tight">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5 Important dates timeline */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex items-center gap-4 mb-16">
              <Calendar className="w-10 h-10 text-primary opacity-30" strokeWidth={1} />
              <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary font-serif">Important Dates</h2>
            </motion.div>

            <div className="space-y-4">
              {importantDates.map((dateObj, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between bg-card/20 hover:bg-card/50 border border-border/30 rounded-2xl p-6 sm:px-10 transition-all duration-300 group">
                  <span className="text-lg sm:text-xl text-primary font-serif mb-2 sm:mb-0 group-hover:translate-x-1 transition-transform">{dateObj.event}</span>
                  <span className="text-xs sm:text-sm text-foreground/50 font-sans font-bold uppercase tracking-widest bg-background border border-border/50 px-4 py-2 rounded-full group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all">{dateObj.date}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Register now */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} 
            className="bg-primary rounded-[3rem] p-12 sm:p-20 md:p-32 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
            {/* Background blur effects */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-accent rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4" />
              <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-white rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.5em] text-accent mb-8 block opacity-80">Final call for 2025</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-10 font-serif leading-[1.1]">Register Your <br className="hidden sm:block" /> Institution Today</h2>
              <p className="text-primary-foreground/60 max-w-2xl mx-auto mb-16 text-lg sm:text-xl font-light leading-relaxed">
                Join elite institutions establishing new benchmark for student capability nationwide.
              </p>
              <Link href="/enquire" className="px-12 py-6 bg-accent text-primary text-xl font-serif rounded-full hover:scale-110 hover:shadow-2xl transition-all duration-500 active:scale-95 inline-block">
                Submit Institutional Enquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
