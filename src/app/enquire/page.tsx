"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

import { faqs } from "./data";
import EnquireForm from "./form";

export default function EnquirePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-accent),transparent_40%)] opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 pt-24 md:pt-32 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary/40 mb-4 block">Connect with us</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl text-primary mb-6 font-serif">
              Institutional Enquiry
            </h1>
            <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto font-light leading-relaxed">
              Partner with ATEION to establish a new standard for student capability evaluation within your institution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 md:py-32 bg-card/20 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 max-w-7xl mx-auto">
            
            {/* Contact Info Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-12"
            >
              <div>
                <h2 className="text-3xl font-serif text-primary mb-8">Establish a partnership.</h2>
                <p className="text-lg text-foreground/60 font-light leading-relaxed mb-10">
                  The mode of conducting of exams is both offline and online and the individual specific mode will be provided by schools and through emails by Ateion.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                    <Mail className="w-5 h-5 text-primary group-hover:text-background transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] font-sans font-bold uppercase tracking-widest text-primary/30">Email Us</div>
                    <div className="text-lg text-primary font-medium">destiny@ateion.info</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                    <Phone className="w-5 h-5 text-primary group-hover:text-background transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] font-sans font-bold uppercase tracking-widest text-primary/30">Call Us</div>
                    <div className="text-lg text-primary font-medium">+91 9356976878</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-background transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] font-sans font-bold uppercase tracking-widest text-primary/30">Location</div>
                    <div className="text-lg text-primary font-medium">Pune, India</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-background rounded-[3rem] p-8 sm:p-12 md:p-16 shadow-2xl shadow-primary/5 border border-border/50 relative overflow-hidden"
            >
              <EnquireForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary/40 mb-4 block">Knowledge Base</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary font-serif">Frequently Asked Questions</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card/30 border border-border/50 rounded-[2rem] overflow-hidden hover:border-primary/20 transition-all duration-500"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 sm:px-12 py-8 sm:py-10 flex items-center justify-between text-left group"
                >
                  <span className="text-lg sm:text-xl md:text-2xl text-primary font-serif pr-8 group-hover:text-primary/70 transition-colors">{faq.question}</span>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border group-hover:border-primary group-hover:bg-primary transition-all duration-500 flex items-center justify-center">
                    {openFaq === index ? (
                      <Minus size={18} className="text-primary group-hover:text-background" />
                    ) : (
                      <Plus size={18} className="text-primary/40 group-hover:text-background" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 sm:px-12 pb-12 text-base sm:text-lg text-foreground/60 leading-relaxed max-w-3xl font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
