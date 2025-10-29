import React from "react";
import "./Rules.css";
import { motion } from "framer-motion";

const Rules = () => {
  const sections = [
    {
      title: "Eligibility",
      points: [
        "Participants must be currently enrolled MCA or BCA students.",
        "Participation is strictly team-based only.",
        "Each team must have exactly 3 members.",
        "A team can belong to only one stream (MCA or BCA).",
      ],
    },
    {
      title: "Registration Guidelines",
      points: [
        "Teams must register before the deadline announced by organizers.",
        "A unique Team Name must be provided during registration.",
        "Once registered, team member changes are not allowed.",
      ],
    },
    {
      title: "Project Scope & Theme",
      points: [
        "Each team must choose one theme from the event themes.",
        "All submitted solutions must be original, developed during the hackathon only.",
        "Any use of pre-built templates, open-source components must be properly credited.",
        "Plagiarism or pre-built project submissions will lead to disqualification.",
      ],
    },
    {
      title: "Hackathon Structure",
      points: [
        "Event duration: 24 hours (Non-stop coding) across 2 days.",
        "MCA & BCA streams will run parallelly, but judged separately.",
        "Mentors will be available for technical guidance.",
        "Teams cannot interfere with or obstruct other teams.",
      ],
    },
    {
      title: "Technical & Submission Rules",
      points: [
        "Code must be pushed to the assigned repository/Git link before submission time.",
        "Each team must submit: Working prototype, Project presentation (PPT), Documentation/README.",
        "Late submissions will not be considered for evaluation.",
        "Internet usage allowed but no sharing of code between teams.",
      ],
    },
    {
      title: "Judging Criteria",
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
      points: [
        "Participants must maintain professional discipline throughout the event.",
        "Any form of malpractice, cheating, misconduct will lead to disqualification.",
        "Decision of judges and organizing committee will be final and binding.",
      ],
    },
    {
      title: "Venue & Logistics Rules",
      points: [
        "Teams must stay within designated workspaces during coding hours.",
        "Breaks will be provided for food and refreshments.",
        "Participants are responsible for their personal belongings.",
        "Devices must be brought by participants.",
      ],
    },
    {
      title: "Intellectual Property Rights",
      points: [
        "Teams own the rights to their project.",
        "Organizers may request permission to showcase winning projects.",
      ],
    },
    {
      title: "Acknowledgment",
      points: [
        "By participating, all members agree to follow these rules and the event schedule.",
      ],
    },
  ];

  return (
    <section
      id="rules"
      className="min-h-screen py-20 px-6 md:px-16 text-white bg-[var(--color-slate-950)]"
    >
      <motion.h2
        className="text-5xl font-bold text-center mb-12 text-white"
        style={{ fontFamily: '"Fredoka", sans-serif' }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hackathon Rules & Guidelines
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="glow-card border border-cyan-700/30 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/30 backdrop-blur-sm transition-transform transform hover:-translate-y-2 duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl font-semibold mb-4 text-cyan-300"
              style={{ fontFamily: '"Fredoka", sans-serif' }}
            >
              {section.title}
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              {section.points.map((point, i) => (
                <li key={i} className="hover:text-cyan-400 transition-colors">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Rules;
