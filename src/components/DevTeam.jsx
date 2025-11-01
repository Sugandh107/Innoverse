import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("Developers");

  const teams = {
    Developers: [
      { name: "Arbaz Pinjar", role: "Full Stack Developer", img: "https://randomuser.me/api/portraits/men/75.jpg", linkedin: "#", github: "#" },
      { name: "Aisha Khan", role: "Frontend Developer", img: "https://randomuser.me/api/portraits/men/75.jpg", linkedin: "#", github: "#" },
      { name: "Rohit Sharma", role: "Backend Engineer", img: "https://randomuser.me/api/portraits/men/75.jpg", linkedin: "#", github: "#" },
      { name: "Milan Bhadraka", role: "Lead Developer", img: "https://randomuser.me/api/portraits/men/75.jpg", linkedin: "#", github: "#" },
      { name: "Sanya Patel", role: "UI/UX Designer", img: "https://randomuser.me/api/portraits/men/75.jpg", linkedin: "#", github: "#" },
    ],
    Management: [
      { name: "Priya Nair", role: "Event Manager", img: "https://randomuser.me/api/portraits/men/75.jpg", linkedin: "#", github: "#" },
      { name: "Nihar Shah", role: "Finance Lead", img: "https://randomuser.me/api/portraits/men/75.jpg", linkedin: "#", github: "#" },
      { name: "Vikram Desai", role: "Operations Head", img: "https://randomuser.me/api/portraits/men/75.jpg", linkedin: "#", github: "#" },
      { name: "Ananya Gupta", role: "Outreach Coordinator", img: "https://randomuser.me/api/portraits/men/75.jpg", linkedin: "#", github: "#" },
      { name: "Prof. Jatayu Baxi", role: "Faculty Coordinator", img: "https://randomuser.me/api/portraits/men/75.jpg", linkedin: "#", github: "#" },
    ],
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-center"
      >
        The Order of Innovators 💻
      </motion.h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {Object.keys(teams).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === category
                ? "bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white shadow-lg scale-105"
                : "bg-slate-800 text-gray-300 hover:bg-slate-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Team Grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center px-6"
      >
        {teams[activeTab].map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            {/* Animated Gradient Blob Background */}
            <div className="relative group">
              <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-blob rounded-[60%_40%_50%_70%/50%_60%_40%_60%] transition-all duration-700 group-hover:scale-110"
                style={{ zIndex: -1 }}
              ></div>

              {/* Image */}
              <div className="relative w-36 h-36 sm:w-30 sm:h-30 overflow-hidden rounded-full shadow-sm">
                <img
                  src={member.img}
                  alt={member.name}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700"
                />
              </div>
            </div>

            {/* Name + Role */}
            <h3 className="mt-4 text-lg font-bold">{member.name}</h3>
            <p className="text-sm text-gray-400">{member.role}</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-3">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-cyan-400 hover:text-cyan-300 text-lg transition" />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-purple-400 hover:text-purple-300 text-lg transition" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;



