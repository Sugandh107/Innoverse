import React, { useState, useEffect, useRef } from "react";
import { Mail, Clock, MapPin, Phone, Send, MessageCircle } from "lucide-react";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const sectionRef = useRef(null);

  // Scroll animation trigger
  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const contactData = [
    
    {
      icon: <MessageCircle className="w-8 h-8" />,
      role: "Registration & Queries",
      description: "",
      contacts: [
        { name: "Sriraj Yadav", phone: "7760819024" },
        { name: "Praveen ", phone: "6362237616" },
      ],
      color: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/10",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-slate-950 overflow-hidden py-20 sm:py-24"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Title Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Get in{" "}
            <span
  className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient bg-clip-text text-transparent"
  style={{
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
              Touch
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have questions? We're here to help! Reach out to our team for any
            inquiries 
          </p>
        </div>

        {/* Contact Cards Grid */}
       <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 max-w-2xl mx-auto mb-16 px-4 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {contactData.map((contact, index) => (
            <div
              key={index}
              className="relative group w-full"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 mx ${contact.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:border-white/30 transition-all duration-300 transform hover:-translate-y-2">
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${contact.color} mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {contact.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                  {contact.role}
                </h3>
                {/* <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {contact.description}
                </p> */}

                {/* Contact List */}
                <div className="space-y-3">
                  {contact.contacts.map((person, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors duration-200">
                      <Phone className="w-4 h-4 mt-0.5 text-slate-400 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white mb-1">{person.name}</p>
                        <a
                          href={`tel:${person.phone}`}
                          className={`text-xs font-medium bg-gradient-to-r ${contact.color} bg-clip-text text-transparent hover:underline break-words`}
                        >
                          {person.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        

        {/* Additional Info */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-slate-400 text-lg">
            Need immediate assistance?{" "}
            <a
              href="mailto:info@innoverse.com"
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold hover:underline"
            >
              Contact us directly
            </a>
          </p>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>
    </section>
  );
}

export default Contact;