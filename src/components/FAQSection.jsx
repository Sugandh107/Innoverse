import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = ({
  fonts = {
    title: "Inter, system-ui, sans-serif",
    body: "Inter, system-ui, sans-serif",
  },
  faqs = [
    {
      question: "Who can participate? 🌐",
      answer:
        "Anyone passionate about technology, innovation, and problem-solving can participate! Whether you're a student, professional developer, designer, or enthusiast, DUHacks welcomes all skill levels.",
    },
    {
      question: "What if this is my first hackathon?",
      answer:
        "No worries! innoverse is beginner-friendly. We provide mentorship, workshops, and resources to help first-timers learn and build amazing projects. It's the perfect opportunity to start your hackathon journey!",
    },
    {
      question: "Do I need to pay a registration fee?",
      answer:
        "Yes,Just 300Rs To participate. We believe in making innovation accessible to everyone.",
    },
    {
      question: "Who can participate offline?",
      answer:
        "Offline participation is available for DDU and nearby college students. Remote participants can join online from anywhere!",
    },
    {
      question: "Will travel reimbursement be provided?",
      answer:
        "Travel reimbursement details vary. Please refer to the official guidelines or contact our team for updates.",
    },
    {
      question: "What should be the team size?",
      answer:
        "Teams can have 2-4 members, or you can participate solo. We encourage diverse teams for stronger collaboration!",
    },
    {
      question: "Are cross-college teams allowed?",
      answer:
        "Yes! DUHacks encourages cross-college collaboration — build a diverse team and bring your ideas to life!",
    },
    {
      question: "What will I gain from DUHacks 4.0? 🏆",
      answer:
        "Prizes, swag, certificates, networking opportunities, mentorship — and the thrill of building something incredible in 36 hours!",
    },
  ],
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden py-20 sm:py-24">
      {/* Decorative glowing circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
    
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight"
            style={{ fontFamily: fonts.title }}
          >
            Frequently Asked{" "}
            
<span
  className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient bg-clip-text text-transparent"
  style={{
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  Questions
</span>

          </h2>
          <p
            className="text-lg text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: fonts.body }}
          >
            Everything you need to know about DUHacks 4.0 — from participation
            to prizes, we’ve got you covered.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span
                  className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300"
                  style={{ fontFamily: fonts.body }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-cyan-400"
                      : "group-hover:text-cyan-300"
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-white/10 pt-4">
                      <p
                        className="text-slate-300 text-base leading-relaxed"
                        style={{ fontFamily: fonts.body }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p
            className="text-slate-300 text-lg mb-6"
            style={{ fontFamily: fonts.body }}
          >
            Still have questions? Reach out — we’re here to help.
          </p>
          <button className="relative inline-flex items-center justify-center px-10 py-4 font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>

      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>
    </section>
  );
};

export default FAQSection;
