import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  ClipboardList, 
  Lightbulb, 
  Clock, 
  Code, 
  Scale, 
  Handshake, 
  MapPin, 
  Hotel,
  Copyright, 
  CheckCircle 
} from "lucide-react";


const Rules = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

const sections = [
  {
    title: "Eligibility",
    icon: Users,
    points: [
      "Participants must be currently enrolled in MCA or BCA programs.",
      "Participation is strictly team-based only.",
      "Each team must consist of exactly 3 members.",
      "A team can belong to only one stream (MCA or BCA).",
      "Participants must carry their college ID cards for verification.",
    ],
  },
  {
    title: "Registration Guidelines",
    icon: ClipboardList,
    points: [
      "Teams must register before the deadline announced by organizers.",
      "A unique Team Name must be provided during registration.",
      "Once registered, team member changes are not allowed.",
      "All participants are required to report on time for the event start on 1st Dec at 9:00 AM.",
    ],
  },
  {
    title: "Project Scope & Theme",
    icon: Lightbulb,
    points: [
      "Each team must choose one theme from the event themes.",
      "All submitted solutions must be original, developed during the hackathon only.",
      "Any use of pre-built templates or open-source components must be properly credited.",
      "Plagiarism or pre-built project submissions will lead to disqualification.",
      "Any kind of misconduct or code plagiarism will lead to immediate disqualification.",
    ],
  },
  {
    title: "Hackathon Structure",
    icon: Clock,
    points: [
      "Event duration: 24 hours (Non-stop coding) across 2 days.",
      "MCA & BCA streams will run parallelly, but judged separately.",
      "Mentors will be available for technical guidance.",
      "Teams cannot interfere with or obstruct other teams.",
      "The event will conclude on 2nd December followed by a Prize distribution ceremony.",
    ],
  },
  {
    title: "Technical & Submission Rules",
    icon: Code,
    points: [
      "Code must be pushed to the assigned repository/Git link before submission time.",
      "Each team must submit: Working prototype, Project presentation (PPT), Documentation/README.",
      "Late submissions will not be considered for evaluation.",
      "Internet usage allowed but no sharing of code between teams.",
      "Participants must submit their project code on the specified platform before final evaluation.",
    ],
  },
  {
    title: "Judging Criteria",
    icon: Scale,
    points: [
      "Innovation & Creativity",
      "Technical Implementation & Complexity",
      "Relevance to Theme",
      "User Experience & Design",
      "Presentation & Communication",
      "Practical Impact / Problem Solving",
    ],
  },
  {
    title: "Conduct & Discipline",
    icon: Handshake,
    points: [
      "Participants must maintain professional discipline throughout the event.",
      "Participants are expected to maintain discipline and follow campus rules.",
      "Any form of malpractice, cheating, or misconduct will lead to disqualification.",
      "All decisions made by the organizing committee will be final and binding.",
    ],
  },
  {
    title: "Venue & Logistics Rules",
    icon: MapPin,
    points: [
      "Teams must stay within designated workspaces during coding hours.",
      "Breaks will be provided for food and refreshments.",
      "Participants are responsible for their personal belongings.",
      "Devices must be brought by participants.",
    ],
  },
  {
    title: "Accommodation & Food Arrangements",
    icon: Hotel,
    points: [
      "Accommodation for participants will be arranged only for 1st Dec night.",
    //   "Breakfast, lunch, and dinner will be provided on 1st Dec.",
    //   "Breakfast, lunch, and high-tea will be provided on 2nd Dec.",
    ],
  },
  {
    title: "Intellectual Property Rights",
    icon: Copyright,
    points: [
      "Teams own the rights to their project.",
      "Organizers may request permission to showcase winning projects.",
    ],
  },
  {
    title: "Acknowledgment",
    icon: CheckCircle,
    points: [
      "By participating, all members agree to follow these rules and the event schedule.",
      "All decisions made by the organizing committee will be final.",
    ],
  },
];


  return (
    <section
      id="rules"
      className="min-h-screen py-20 px-6 md:px-16 text-white relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #0a0e27 0%, #0f1419 100%)',
        fontFamily: '"Gliker-Regular", sans-serif'
      }}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500 rounded-full blur-3xl"
          animate={{
            x: [-150, 150, -150],
            y: [-100, 100, -100],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </motion.div>

      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="relative z-10 mt-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white">
          <span>Hackathon Rules</span>
          {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            & Guidelines
          </span>
        </h2>
        
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-12" />
      </div>

      <div className="max-w-6xl mx-auto space-y-6 relative z-10">
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <motion.div
              key={index}
              className="group relative"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div 
                className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-cyan-500/20 shadow-xl overflow-hidden transition-all duration-300"
                style={{
                  boxShadow: hoveredCard === index 
                    ? '0 20px 60px rgba(6, 182, 212, 0.3)' 
                    : '0 4px 20px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Animated gradient overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0"
                  animate={{
                    opacity: hoveredCard === index ? 0.05 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <IconComponent 
                      size={48} 
                      className="text-cyan-400"
                      strokeWidth={2}
                    />
                    
                    <h3 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                      {section.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.points.map((point, i) => (
                      <li 
                        key={i} 
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mt-1 flex-shrink-0 font-bold text-xl">
                          ▹
                        </span>
                        <span className="text-base md:text-lg leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Animated corner accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-10 rounded-bl-full"
                  animate={{
                    scale: hoveredCard === index ? [1, 1.2, 1] : 1,
                    rotate: hoveredCard === index ? [0, 90, 0] : 0,
                  }}
                  transition={{ duration: 2, repeat: hoveredCard === index ? Infinity : 0 }}
                />

                {/* Sparkle effect on hover */}
                {hoveredCard === index && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                        initial={{ 
                          x: Math.random() * 100 + '%',
                          y: Math.random() * 100 + '%',
                          scale: 0 
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom decoration */}
      <div className="text-center mt-16 relative z-10">
        <motion.p 
          className="text-cyan-300/80 text-lg"
          animate={{
            textShadow: [
              '0 0 10px rgba(6, 182, 212, 0.3)',
              '0 0 20px rgba(6, 182, 212, 0.6)',
              '0 0 10px rgba(6, 182, 212, 0.3)',
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Good luck to all participants! 🚀
        </motion.p>
      </div>
    </section>
  );
};

export default Rules;