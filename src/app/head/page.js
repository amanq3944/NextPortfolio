"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function HeadSection() {
  const socialIcons = [
    { icon: <FaGithub />, color: "hover:text-purple-800" },
    { icon: <FaLinkedin />, color: "hover:text-blue-600" },
    { icon: <FaTwitter />, color: "hover:text-sky-400" },
    { icon: <FaInstagram />, color: "hover:text-pink-600" },
  ];

  return (
    <section
      className="pt-18 relative bg-gradient-to-br from-purple-50 to-white via-white min-h-screen flex items-center justify-center overflow-hidden"
      id="head"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -right-20 top-1/3 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="pt-10 container mx-auto px-5 py-20 flex flex-col-reverse items-center justify-center gap-12 sm:flex-row sm:justify-center sm:items-center sm:gap-8 z-10">
        {/* Left Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-20 sm:w-1/2 flex flex-col space-y-6 sm:space-y-8"
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
            className="text-3xl font-semibold text-gray-800 sm:text-5xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hello I m {" "}
            <span className="text-purple-700 font-bold relative inline-block">
              Aman Qureshi
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-purple-200 rounded-full"></span>
            </span>
          </motion.h3>

          <motion.h1
            className="text-4xl font-bold text-gray-900 sm:text-6xl leading-tight"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Building{" "}
            <span className="relative">
              <span className="relative z-10">Digital</span>
              <span className="absolute -bottom-1 left-0 w-full h-3 bg-purple-100 z-0"></span>
            </span>{" "}
            <span className="block text-purple-700">Experiences</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Passionate web developer specializing in modern JavaScript frameworks.
            I create fast, responsive, and accessible web applications with
            attention to detail and user experience.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FiDownload className="text-lg" />
              Download CV
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 border-2 border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-all duration-300"
            >
              Lets Talk
            </motion.button>
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
                className={`text-2xl text-gray-600 ${social.color} transition-colors duration-300`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative w-64 h-64 sm:w-96 sm:h-96"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-100 rounded-full blur-md opacity-70 -z-10"></div>
          <motion.div
            whileHover={{ rotate: 0, scale: 1.02 }}
            initial={{ rotate: 0 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white hover:shadow-purple-500/30 transition-all duration-500"
          >
            <Image
              src="/images/AMANPP.jpeg"
              alt="Aman Qureshi"
              width={500}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
          
          {/* Decorative badge */}
          <motion.div 
            className="absolute -bottom-5 -right-5 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          >
            <span className="font-bold">5+ Years</span> Experience
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}