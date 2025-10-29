// import React from "react";

// const DevTeamSection = ({ 
//   fonts = { title: "Arial Black", body: "Arial" }, 
//   team = [
//     { name: "Sughand", image: "https://randomuser.me/api/portraits/men/75.jpg" },
//     { name: "Vishnu", image: "https://randomuser.me/api/portraits/women/65.jpg" },
//     { name: "Ningraj", image: "https://randomuser.me/api/portraits/men/43.jpg" },
//     { name: "Arbaz", image: "https://randomuser.me/api/portraits/women/32.jpg" },
//     { name: "Someone", image: "https://randomuser.me/api/portraits/men/55.jpg" }
//   ]
// }) => {
//   return (
//     <section className="relative w-full bg-slate-950 py-16 sm:py-20 overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        // <div className="text-center mb-12 sm:mb-16">
        //   <h2
        //     className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4"
        //     style={{ fontFamily: fonts.title }}
        //   >
        //     Meet Our{" "}
        //     <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
        //       Developer Team
        //     </span>
        //   </h2>
        // </div>

//         {/* Team Members grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
//           {team.map((member, index) => (
//             <div
//               key={member.name}
//               className="relative text-center transform hover:scale-105 transition-transform duration-500"
//               style={{ animationDelay: `${index * 0.2}s` }}
//             >
//               <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden ring-4 ring-cyan-400/40 hover:ring-purple-500/60 shadow-xl animate-[float_4s_ease-in-out_infinite]">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h3
//                 className="mt-4 text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500"
//                 style={{ fontFamily: fonts.body }}
//               >
//                 {member.name}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="absolute top-10 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
//       <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
//     </section>
//   );
// };

// export default DevTeamSection;

// import React from "react";
// import { motion } from "framer-motion";

// const teamMembers = [
//   { name: "Arbaz Pinjar", img: "https://randomuser.me/api/portraits/men/75.jpg", border: "border-purple-500" },
//   { name: "Sara Khan", img: "https://randomuser.me/api/portraits/men/75.jpg", border: "border-cyan-400" },
//   { name: "Ravi Kumar", img: "https://randomuser.me/api/portraits/men/75.jpg", border: "border-pink-500" },
//   { name: "Aisha Patel", img: "https://randomuser.me/api/portraits/men/75.jpg", border: "border-purple-400" },
//   { name: "Rahul Singh", img: "https://randomuser.me/api/portraits/men/75.jpg", border: "border-cyan-500" },
// ];

// const TeamSection = () => {
//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: { staggerChildren: 0.15 }
//     }
//   };

//   const memberVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 50 },
//     visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   return (
//     <section className="relative py-16 bg-slate-950 text-white text-center overflow-hidden">
//       {/* Decorative gradient glows */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

//       {/* Section Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: -40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="text-3xl sm:text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
//       >
//         Meet Our{" "}
//              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
//                Developer Team
//              </span>
//       </motion.h2>

//       {/* Members Grid */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-10 justify-items-center"
//       >
//         {teamMembers.map((member, index) => (
//           <motion.div key={index} variants={memberVariants} className="group relative">
//             {/* Glow behind each member */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700">
//               <div className={`w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full ${member.border.replace('border-', 'bg-')} opacity-30`} />
//             </div>

//             {/* Profile image */}
//             <motion.div
//               whileHover={{ scale: 1.1, rotate: 2 }}
//               transition={{ type: "spring", stiffness: 200, damping: 10 }}
//               className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto border-4 ${member.border} overflow-hidden shadow-lg shadow-purple-500/30`}
//             >
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </motion.div>

//             {/* Name */}
//             <motion.p
//               className="mt-3 text-sm sm:text-base font-semibold text-white/90 group-hover:text-purple-400 transition-colors duration-300"
//             >
//               {member.name}
//             </motion.p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default TeamSection;

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const TeamSection = () => {
//   const [activeTab, setActiveTab] = useState("Developers");

//   const teams = {
//     Developers: [
//       { name: "Sughand", role: "Full Stack Developer", img: "https://randomuser.me/api/portraits/men/75.jpg" },
//       { name: "Vishnu", role: "Lead Developer", img: "https://randomuser.me/api/portraits/men/75.jpg" },
//       { name: "Arbaz", role: "Full Stackoper", img: "https://randomuser.me/api/portraits/men/75.jpg" },
//       { name: "Ningaraj", role: "Backend Engineer", img: "https://randomuser.me/api/portraits/men/75.jpg" },
//       { name: "John", role: "Frontend Developer", img: "https://randomuser.me/api/portraits/men/75.jpg" },
//     ],
//     Management: [
//       { name: "Prof. Jatayu Baxi", role: "Faculty Coordinator", img: "https://randomuser.me/api/portraits/men/75.jpg" },
//       { name: "Priya Nair", role: "Event Manager", img: "https://randomuser.me/api/portraits/men/75.jpg" },
//       { name: "Vikram Desai", role: "Operations Head", img: "https://randomuser.me/api/portraits/men/75.jpg" },
//       { name: "Nihar Shah", role: "Finance Lead", img: "https://randomuser.me/api/portraits/men/75.jpg" },
//       { name: "Ananya Gupta", role: "Outreach Coordinator", img: "https://randomuser.me/api/portraits/men/75.jpg" },
//     ],
//   };

//   return (
//     <section className="relative w-full py-20 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
//       {/* Soft glowing particles (background animation) */}
//       <div className="absolute inset-0">
//         {[...Array(25)].map((_, i) => (
//           <motion.span
//             key={i}
//             className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full blur-[2px] opacity-30"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//             }}
//             animate={{
//               y: [null, Math.random() * window.innerHeight],
//               opacity: [0.2, 0.6, 0.2],
//             }}
//             transition={{
//               duration: 5 + Math.random() * 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: -40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="relative text-4xl sm:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-center"
//       >
//         The Order of Innovators
//       </motion.h2>

//       {/* Tabs */}
//       <div className="relative flex flex-wrap justify-center gap-3 mb-14 z-10">
//         {Object.keys(teams).map((category) => (
//           <motion.button
//             whileHover={{ scale: 1.08 }}
//             whileTap={{ scale: 0.95 }}
//             key={category}
//             onClick={() => setActiveTab(category)}
//             className={`px-5 py-2 rounded-full font-semibold border transition-all duration-300 ${
//               activeTab === category
//                 ? "bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white shadow-[0_0_25px_rgba(168,85,247,0.5)]"
//                 : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400"
//             }`}
//           >
//             {category}
//           </motion.button>
//         ))}
//       </div>

//       {/* Team Grid */}
//       <motion.div
//         key={activeTab}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center px-6 z-10"
//       >
//         {teams[activeTab].map((member, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.15, duration: 0.8, type: "spring" }}
//             viewport={{ once: true }}
//             className="group relative flex flex-col items-center text-center"
//           >
//             {/* Floating glow border */}
//             <motion.div
//               animate={{
//                 y: [0, -8, 0],
//               }}
//               transition={{
//                 duration: 4 + i * 0.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-[3px] border-transparent bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 p-[2px] shadow-[0_0_25px_rgba(168,85,247,0.25)]"
//             >
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 className="rounded-full w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//               {/* animated ring */}
//               <motion.div
//                 className="absolute inset-0 rounded-full border-2 border-transparent"
//                 animate={{
//                   rotate: 360,
//                 }}
//                 transition={{
//                   duration: 10,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 style={{
//                   borderImage:
//                     "linear-gradient(45deg, rgba(6,182,212,0.6), rgba(168,85,247,0.6), rgba(236,72,153,0.6)) 1",
//                   borderImageSlice: 1,
//                 }}
//               />
//             </motion.div>

//             <h3 className="text-white mt-4 text-base sm:text-lg font-semibold">
//               {member.name}
//             </h3>
//             <p className="text-slate-400 text-sm">{member.role}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default TeamSection;

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



