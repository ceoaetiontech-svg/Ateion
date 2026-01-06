"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Send, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is the primary objective of ATEION?",
    answer: "ATEION focuses on establishing a capability benchmark that goes beyond traditional academic scores, evaluating students on their cognitive depth, logical reasoning, and interpretative skills."
  },
  {
    question: "How can an institution register for NCO?",
    answer: "Institutions can fill out the enquiry form above. Our team will reach out with the registration package, institutional portal access, and examination schedules."
  },
  {
    question: "Are the AI workshops suitable for all age groups?",
    answer: "Our workshops are modular and tailored for different tiers, from middle school students to undergraduates, ensuring age-appropriate cognitive challenges."
  },
  {
    question: "Is there any preparation material provided for the Olympiad?",
    answer: "Yes, once registered, institutions receive access to preparatory frameworks and sample evaluations designed to familiarize students with the ATEION assessment style."
  },
  {
    question: "What is the examination format for NCO?",
    answer: "NCO is a 60-minute examination consisting of 40 Multiple Choice Questions (MCQs) that evaluate four core dimensions: Interpretative Reasoning, Logical Structure, Creative Application, and Analytical Precision."
  },
  {
    question: "Can individual students register for NCO?",
    answer: "Yes, individual registrations are accepted for students seeking independent capability benchmarking. Students can complete the application form, pay the participation fee, and attempt the examination online."
  }
];

const institutionTypes = [
  "Select type",
  "K-12 School",
  "College / University",
  "Educational Center",
  "Other",
];

const enquiryTypes = [
  "Select enquiry type",
  "NCO Registration",
  "AI Workshops",
  "Strategic Partnership",
  "General Query",
];

const studentRanges = [
  "Select range",
  "Under 100",
  "100 - 500",
  "500 - 1000",
  "1000+",
];

const referralOptions = [
  "Select option",
  "Social Media",
  "Institutional Referral",
  "Search Engine",
  "Email/Newsletter",
  "Other"
];

export default function EnquirePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    institutionName: "",
    institutionType: "Select type",
    contactPerson: "",
    designation: "",
    email: "",
    phone: "",
    studentStrength: "Select range",
    enquiryType: "Select enquiry type",
    cityState: "",
    message: "",
    referral: "Select option"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const inputClasses = "w-full bg-transparent border-b border-border/60 py-4 focus:outline-none focus:border-primary transition-all duration-300 font-sans text-base sm:text-lg placeholder:text-foreground/20 text-foreground";
  const labelClasses = "text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-primary/40 mb-1 block";

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
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
                  {/* Institution Name */}
                  <div className="sm:col-span-2">
                    <label className={labelClasses}>Institution Name *</label>
                    <input 
                      type="text" 
                      name="institutionName"
                      value={formData.institutionName}
                      onChange={handleChange}
                      placeholder="Full legal name of the institution" 
                      className={inputClasses}
                      required
                    />
                  </div>
                  
                  {/* Institution Type */}
                  <div>
                    <label className={labelClasses}>Institution Type *</label>
                    <select 
                      name="institutionType"
                      value={formData.institutionType}
                      onChange={handleChange}
                      className={`${inputClasses} cursor-pointer appearance-none`}
                      required
                    >
                      {institutionTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Contact Person */}
                  <div>
                    <label className={labelClasses}>Contact Person *</label>
                    <input 
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder="Full name" 
                      className={inputClasses}
                      required
                    />
                  </div>

                  {/* Designation */}
                  <div>
                    <label className={labelClasses}>Designation *</label>
                    <input 
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="e.g., Principal, Dean" 
                      className={inputClasses}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClasses}>Official Email *</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="institutional.email@domain.edu" 
                      className={inputClasses}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className={labelClasses}>Phone Number *</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX" 
                      className={inputClasses}
                      required
                    />
                  </div>

                  {/* City/State */}
                  <div>
                    <label className={labelClasses}>City / State *</label>
                    <input 
                      type="text"
                      name="cityState"
                      value={formData.cityState}
                      onChange={handleChange}
                      placeholder="City, State" 
                      className={inputClasses}
                      required
                    />
                  </div>

                  {/* Student Strength */}
                  <div>
                    <label className={labelClasses}>Student Strength</label>
                    <select 
                      name="studentStrength"
                      value={formData.studentStrength}
                      onChange={handleChange}
                      className={`${inputClasses} cursor-pointer appearance-none`}
                    >
                      {studentRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  {/* Nature of Enquiry */}
                  <div>
                    <label className={labelClasses}>Nature of Enquiry *</label>
                    <select 
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className={`${inputClasses} cursor-pointer appearance-none`}
                      required
                    >
                      {enquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label className={labelClasses}>Message *</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your enquiry in detail..." 
                      className={`${inputClasses} min-h-[120px] resize-none`}
                      required
                    />
                  </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-8">
                  <p className="text-xs text-foreground/40 font-light max-w-xs text-center sm:text-left">
                    By submitting this form, you agree to our privacy policy and terms regarding institutional affiliation.
                  </p>
                  <motion.button 
                    type="submit" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="enquiry-button px-12 py-5 flex items-center gap-3 group"
                  >
                    Send Enquiry <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </div>
              </form>
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
