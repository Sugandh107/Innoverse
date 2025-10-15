import React from "react";
import "./Contact.css";

function Contact() {
  const contactData = [
    {
      icon: "📧",
      role: "Registration & Queries",
      description: "For participant registrations, ticket issues, and general questions",
      email: "registration@innoverse.com",
      responseTime: "24 hours"
    },
    {
      icon: "💼",
      role: "Faculty",
      description: "For Faculty Related inquiries",
      email: "Faculty@innoverse.com",
      responseTime: "48 hours"
    },
    {
      icon: "🛠",
      role: "Technical Support",
      description: "For website issues, submission problems, and tech help",
      email: "tech@innoverse.com",
      responseTime: "12 hours"
    },
    {
      icon: "📍",
      role: "Venue & Logistics",
      description: "For location, directions, accommodation, and venue questions",
      email: "venue@innoverse.com",
      responseTime: "24 hours"
    }
  ];

  return (
    <div className="contact-container">
      <h1 className="contact-title">DUHACKS</h1>
      <div className="contact-subtitle">Contact Our Team</div>
      
      <div className="contact-grid">
        {contactData.map((contact, index) => (
          <div key={index} className="contact-card">
            <span className="contact-icon">{contact.icon}</span>
            <h3 className="contact-role">{contact.role}</h3>
            <p className="contact-description">{contact.description}</p>
            <a href={`mailto:${contact.email}`} className="contact-email">
              {contact.email}
            </a>
            <p className="contact-response">Response time: {contact.responseTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;