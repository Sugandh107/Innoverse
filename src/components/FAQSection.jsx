import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = ({ 
  fonts = { title: 'Arial Black', body: 'Arial' },
  faqs = [
    {
      question: "Who can participate? 🌐",
      answer: "Anyone passionate about technology, innovation, and problem-solving can participate! Whether you're a student, professional developer, designer, or enthusiast, DUHacks welcomes all skill levels."
    },
    {
      question: "What if this is my first hackathon?",
      answer: "No worries! DUHacks is beginner-friendly. We provide mentorship, workshops, and resources to help first-timers learn and build amazing projects. It's the perfect opportunity to start your hackathon journey!"
    },
    {
      question: "Do I need to pay a registration fee to participate in the hackathon?",
      answer: "No! DUHacks 4.0 is completely free to participate. We believe in making innovation accessible to everyone."
    },
    {
      question: "As the hackathon is in hybrid mode, who is allowed to participate in offline mode?",
      answer: "Offline participation is typically available for participants from DDU and nearby colleges. Specific eligibility criteria will be shared during registration. Remote participants can join online from anywhere!"
    },
    {
      question: "For the participants in offline mode, will travel reimbursement be provided?",
      answer: "Travel reimbursement details vary. Please check the official guidelines or contact the organizing team for specific information about reimbursement policies."
    },
    {
      question: "Will everyone from DDU be eligible for offline tickets, or is there a selection process?",
      answer: "Due to venue capacity limitations, there may be a selection process for offline participation. Priority is typically given to registered teams and early applicants. Register early to secure your spot!"
    },
    {
      question: "What should be the team size?",
      answer: "Teams can have 2-4 members. You can also participate solo if you prefer. We encourage diverse teams with varied skill sets for better collaboration!"
    },
    {
      question: "Are team members from other colleges allowed?",
      answer: "Yes! DUHacks encourages cross-college collaboration. You can team up with participants from different colleges to bring diverse perspectives to your project."
    },
    {
      question: "What will I get after attending DUHacks 4.0? 🏆",
      answer: "Amazing prizes, swag, certificates, networking opportunities with industry professionals, mentorship from experts, and most importantly - the experience of building something incredible in 36 hours!"
    },
    {
      question: "What if I do not have a team? 🤔",
      answer: "Don't worry! We'll have team formation sessions at the beginning of the hackathon. You can also join our community channels to connect with other participants looking for teammates."
    }
  ]
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-slate-950 overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4"
            style={{ fontFamily: fonts.title }}
          >
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              Questions
            </span>
          </h2>
          <p 
            className="text-base sm:text-lg text-white/70 mt-4"
            style={{ fontFamily: fonts.body }}
          >
            Got questions? We've got answers!
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-500/50"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-all duration-300"
              >
                <span 
                  className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
                  style={{ fontFamily: fonts.body }}
                >
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-white/70 transition-all duration-300 ${
                    openIndex === index ? 'rotate-180 text-cyan-400' : 'group-hover:text-cyan-400'
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                  <div className="border-t border-white/10 pt-4">
                    <p 
                      className="text-sm sm:text-base text-white/80 leading-relaxed"
                      style={{ fontFamily: fonts.body }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p 
            className="text-base sm:text-lg text-white/70 mb-6"
            style={{ fontFamily: fonts.body }}
          >
            Still have questions? Reach out to us!
          </p>
          <button 
            className="relative group inline-block"
          >
            <div className="absolute inset-0 bg-purple-600 rounded-full blur-md group-hover:blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300" />
            <div 
              className="relative bg-slate-800 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-bold border-2 border-purple-500 group-hover:border-cyan-400 transition-all duration-300 group-hover:scale-105"
              style={{ fontFamily: fonts.body }}
            >
              Contact Us
            </div>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default FAQSection;