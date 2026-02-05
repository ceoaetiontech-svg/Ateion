import { BookOpen, Brain, Lightbulb, Target, Users, GraduationCap, Building2, Award, Shield, TrendingUp } from "lucide-react";

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true, margin: "-50px" }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const framework = [
  {
    title: "Interpretative Reasoning",
    description: "The ability to decode complex information and identify underlying patterns from unfamiliar contexts.",
    icon: Brain
  },
  {
    title: "Logical Structure",
    description: "Evaluation of systematic thought frameworks used to export construct coherent and defensible arguments.",
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

export const stats = [
  { label: "Institutions", value: "200+", icon: Building2 },
  { label: "Students", value: "50K+", icon: GraduationCap },
  { label: "Partners", value: "100+", icon: Users }
];

export const alignmentFeatures = [
  {
    title: "Aligned with NEP 2020",
    description: "Framework designed in accordance with National Education Policy guidelines for competency-based assessment.",
    icon: Award
  },
  {
    title: "Endorsed Nationwide",
    description: "Trusted by students, educators, and institutions across the country for capability benchmarking.",
    icon: Shield
  },
  {
    title: "National Standard",
    description: "Building the foundational infrastructure for capability-first evaluation in India.",
    icon: TrendingUp
  }
];