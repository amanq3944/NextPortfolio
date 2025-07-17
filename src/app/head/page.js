"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const titles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "Web Developer",
];
export default function HeadSection() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // current title index
  const [charIndex, setCharIndex] = useState(0); // current character index

  useEffect(() => {
    const currentTitle = titles[index];

    // If we haven't finished typing the current title
    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentTitle[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }

    // Wait 2 seconds after typing full title, then move to next
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % titles.length);
      setText("");
      setCharIndex(0);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [charIndex, index]);

  const socialIcons = [
    { icon: <FaGithub />, color: "hover:text-purple-800" },
    { icon: <FaLinkedin />, color: "hover:text-blue-600" },
    { icon: <FaTwitter />, color: "hover:text-sky-400" },
    { icon: <FaInstagram />, color: "hover:text-pink-600" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your EmailJS service details
      await emailjs.send(
        "service_ixqcxe8",
        "template_0bunsva",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "GjVZLX6O2ywIGcq54"
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsOpen(false), 2000);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Email sending failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="bg-[url('/images/bg.jpg')] bg-cover bg-no-repeat bg-center sm:bg-fixed min-h-screen sm:pt-10 pt-25 relative bg-gradient-to-br from-purple-50 to-white via-white flex items-center justify-center overflow-hidden"
      id="head"
    >
      <div className="container mx-auto px-5 flex flex-col-reverse items-center justify-center gap-12 sm:flex-row sm:justify-center sm:items-center sm:gap-8 z-10">
        {/* Left Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-8 sm:w-2/4 flex flex-col space-y-6 sm:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <span className="text-sm font-medium text-purple-600 tracking-wider">
              INTRODUCING
            </span>
          </motion.div>

          <motion.h3
            className="text-3xl font-semibold text-white sm:text-5xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hello I m{" "}
            <span className="text-purple-700 font-bold relative inline-block">
              Aman Qureshi
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-purple-200 rounded-full"></span>
            </span>
          </motion.h3>

          <motion.h1
            className="flex text-3xl font-bold text-white sm:text-5xl leading-tight"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-amber-300">✦</span>
            <span className="pl-3 block text-purple-500">
              {text}
              <span className="blinking-cursor">|</span>
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 max-w-lg leading-relaxed text-justify"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Passionate web developer specializing in modern JavaScript
            frameworks. I create fast, responsive, and accessible web
            applications with attention to detail and user experience.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="https://flowcv.com/resume/gvu94eesbeav"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FiDownload className="text-lg" />
              Download CV
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(true)}
              className="px-6 py-3 border-2 border-purple-600 text-purple-400 font-medium rounded-lg hover:cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Lets Talk
            </motion.button>

            {/* Pop-up Modal */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Backdrop with blur and fade effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
                  ></motion.div>

                  {/* Modal container with glassmorphism effect */}
                  <motion.div
                    initial={{ y: -20, scale: 0.98 }}
                    animate={{ y: 0, scale: 1 }}
                    exit={{ y: 20, scale: 0.98 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-md mx-auto bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/20 p-6"
                  >
                    {/* Close Button */}
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-600 transition-colors backdrop-blur-sm"
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.button>

                    {/* Modal Content */}
                    <h2 className="text-2xl font-bold text-purple-600 mb-2">
                      Let's Talk!
                    </h2>
                    <p className="text-gray-600 mb-6">
                      We will get back to you within 24 hours.
                    </p>

                    {submitStatus === "success" ? (
                      <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                        Message sent successfully!
                      </div>
                    ) : submitStatus === "error" ? (
                      <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                        Failed to send message. Please try again.
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          required
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          required
                        />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your Message"
                          rows="4"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          required
                        ></textarea>

                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={isSubmitting}
                          className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-70"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </motion.button>
                      </form>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {socialIcons.map((social, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`text-2xl text-purple-600 ${social.color} transition-colors duration-300`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <div className="w-[350px] h-[450px] relative flex items-center justify-center rounded-[16px] overflow-hidden">
          {/* Rotating gradient (replaces ::before) */}
          <div className="absolute w-[180px] h-[150%] bg-gradient-to-b from-[#ff00c8] to-[#6aff00] animate-[spin_5s_linear_infinite] origin-center"></div>

          {/* Inner content area (replaces ::after) */}
          <div className="absolute inset-[4px] bg-[#141414] rounded-[12px] flex items-center justify-center p-2">
            {/* Image card with Framer Motion effects */}
            <motion.div
              className="relative w-full h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-lg shadow-xl border border-white/20 hover:border-purple-400/50 w-full h-full"
              >
                <Image
                  src="/images/AMANPP.jpeg"
                  alt="Aman Qureshi"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Image overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                className="text-2xl absolute -bottom-2 -right-3 bg-purple-600 text-white px-5 py-1 rounded shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
              >
                <span className="font-semibold">2+ Years</span> Exp
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
