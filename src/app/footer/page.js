"use client";

import { motion } from "framer-motion";
import { FiArrowUp, FiMail, FiPhone, FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

export default function Footer() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const hoverEffect = {
    scale: 1.03,
    y: -3,
    transition: { duration: 0.3, ease: "easeOut" },
  };

  const tapEffect = {
    scale: 0.98,
  };

  const socialIcon = {
    hover: {
      y: -5,
      scale: 1.1,
      color: "#d97706",
    },
    tap: {
      scale: 0.9,
    },
  };

  const arrowIcon = {
    hover: {
      x: 5,
      transition: { duration: 0.3 },
    },
  };

  const floatingAnim = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.footer
      id="footer"
      className="relative text-white bg-gradient-to-b from-slate-900 to-slate-800 px-5 py-12 sm:px-10 sm:py-20 flex flex-col space-y-10 items-center justify-around overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-amber-600/20 blur-xl"
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
          transition: {
            duration: 8,
            repeat: Infinity,
          }
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-purple-600/20 blur-xl"
        animate={{
          x: [0, -15, 0],
          y: [0, -10, 0],
          transition: {
            duration: 10,
            repeat: Infinity,
          }
        }}
      />

      <motion.div
        className="flex flex-col space-y-10 items-start w-full max-w-7xl mx-auto sm:flex-row sm:justify-between sm:space-y-0 sm:space-x-8"
        variants={container}
      >
        {/* Left Section */}
        <motion.div
          className="flex flex-col items-start space-y-6 sm:w-1/3"
          variants={item}
        >
          <motion.h1 
            className="text-4xl font-bold sm:text-5xl leading-tight"
            whileHover={{
              transition: { staggerChildren: 0.1 }
            }}
          >
            <motion.span 
              className="inline-block px-2 mr-1 rounded-lg bg-amber-600"
              whileHover={{ 
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.6 }
              }}
            >
              Let's
            </motion.span>
            <motion.span className="block">create something</motion.span>
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              extraordinary
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-1 bg-amber-600"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1, transition: { duration: 0.3 } }}
              />
            </motion.span>
          </motion.h1>

          <motion.div className="space-y-4" variants={item}>
            <motion.p
              className="text-xl font-medium text-slate-300"
              variants={item}
            >
              Based in India | Available worldwide
            </motion.p>

            <motion.div
              className="flex items-center space-x-4 pt-2"
              variants={item}
            >
              {[
                { icon: <FiGithub />, url: "https://github.com" },
                { icon: <FiTwitter />, url: "https://twitter.com" },
                { icon: <FiLinkedin />, url: "https://linkedin.com" },
                { icon: <FiInstagram />, url: "https://instagram.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-slate-300 hover:text-amber-500"
                  variants={socialIcon}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Sections */}
        <div className="flex flex-col space-y-6 sm:space-y-0 sm:space-x-6 sm:flex-row sm:w-2/3">
          {/* Email Section */}
          <motion.div
            className="group relative rounded-xl border border-slate-700 p-6 hover:border-amber-600 hover:shadow-lg hover:shadow-amber-600/10 transition-all duration-300 bg-slate-800/50 backdrop-blur-sm"
            variants={item}
            whileHover={hoverEffect}
            whileTap={tapEffect}
          >
            <div className="h-full flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <FiMail className="text-3xl text-amber-600 group-hover:text-amber-500 transition-colors" />
                <p className="text-xl font-bold sm:text-2xl group-hover:text-amber-500 transition-colors">
                  Want to collaborate?
                </p>
                <p className="text-slate-300">Drop me an email</p>
              </div>
              <a href="mailto:amanq3944@gmail.com">
                <motion.div
                  className="group flex items-center"
                  whileHover="hover"
                >
                  <p className="text-xl text-amber-500 sm:text-xl group-hover:text-purple-400 transition-colors">
                    amanq3944@gmail.com
                  </p>
                  <motion.span
                    className="ml-2 text-amber-500 group-hover:text-purple-400 transition-colors"
                    variants={arrowIcon}
                  >
                    ↗
                  </motion.span>
                </motion.div>
              </a>
            </div>
          </motion.div>

          {/* Phone Section */}
          <motion.div
            className="group relative rounded-xl border border-slate-700 p-6 hover:border-amber-600 hover:shadow-lg hover:shadow-amber-600/10 transition-all duration-300 bg-slate-800/50 backdrop-blur-sm"
            variants={item}
            whileHover={hoverEffect}
            whileTap={tapEffect}
          >
            <div className="h-full flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <FiPhone className="text-3xl text-amber-600 group-hover:text-amber-500 transition-colors" />
                <p className="text-xl font-bold sm:text-2xl group-hover:text-amber-500 transition-colors">
                  Want to chat?
                </p>
                <p className="text-slate-300">Give me a call</p>
              </div>
              <a href="tel:+1234567890">
                <motion.div
                  className="group flex items-center"
                  whileHover="hover"
                >
                  <p className="text-xl text-amber-500 sm:text-xl group-hover:text-purple-400 transition-colors">
                    +1 (234) 567-890
                  </p>
                  <motion.span
                    className="ml-2 text-amber-500 group-hover:text-purple-400 transition-colors"
                    variants={arrowIcon}
                  >
                    ↗
                  </motion.span>
                </motion.div>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Name Section */}
      <motion.div 
        className="w-full max-w-7xl mx-auto py-10"
        variants={item}
      >
        <motion.h1 
          className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-purple-500 to-amber-500 text-5xl sm:text-7xl md:text-8xl lg:text-[120px] tracking-tight"
          animate={{
            backgroundPositionX: ['0%', '100%', '0%'],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          AMAN QURESHI
        </motion.h1>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="w-full max-w-7xl mx-auto pt-8 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        variants={item}
      >
        <p className="text-sm sm:text-base font-medium text-slate-400">
          © {new Date().getFullYear()} Crafted with ❤️ by Aman Qureshi. All rights reserved.
        </p>
        
        <div className="flex space-x-6">
          <motion.a
            href="#"
            className="text-sm sm:text-base font-medium text-slate-400 hover:text-amber-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Privacy Policy
          </motion.a>
          <motion.a
            href="#"
            className="text-sm sm:text-base font-medium text-slate-400 hover:text-amber-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Terms of Service
          </motion.a>
        </div>
        
        <motion.a
          href="#navbar"
          className="flex items-center space-x-2 text-sm sm:text-base font-medium text-slate-400 hover:text-amber-500 transition-colors"
          whileHover={{ 
            scale: 1.05,
            color: "#f59e0b"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Back to Top</span>
          <motion.div
            animate={floatingAnim}
          >
            <FiArrowUp className="text-amber-500" />
          </motion.div>
        </motion.a>
      </motion.div>
    </motion.footer>
  );
}