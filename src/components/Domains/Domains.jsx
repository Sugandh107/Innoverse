import React from "react";
import "./Domains.css";
import { FaBrain, FaLock, FaCube } from "react-icons/fa";

const domains = [
  {
    icon: <FaBrain />,
    title: "Artificial Intelligence & Machine Learning",
    desc: "Innovate using intelligent algorithms and data-driven insights to build smarter solutions.",
  },
  {
    icon: <FaLock />,
    title: "Cybersecurity",
    desc: "Secure the digital world through threat detection, data protection, and resilient systems.",
  },
  {
    icon: <FaCube />,
    title: "Blockchain",
    desc: "Explore decentralized systems that power secure, transparent, and tamper-proof applications.",
  },
];

const Domains = () => {
  return (
    <section id="domains" className="domains-section">
      <h2 className="domains-title">Domains</h2>
      <div className="domains-grid">
        {domains.map((domain, index) => (
          <div key={index} className="domain-card">
            <div className="domain-icon">{domain.icon}</div>
            <h3 className="domain-name">{domain.title}</h3>
            <p className="domain-desc">{domain.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Domains;
