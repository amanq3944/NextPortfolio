"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { FiDownload, FiEye } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

const AboutSection = () => {
  const controls = useAnimation();

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.96, opacity: 0, x: -20 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    hover: {
      scale: 1.03,
      y: -2,
      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)",
      transition: {
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 5px 15px -5px rgba(124, 58, 237, 0.3)",
    },
  };

  const handleImageHover = () => {
    controls.start({
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: { duration: 8, repeat: Infinity, ease: "linear" },
    });
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={containerVariants}
      className="bg-[url('/images/bg2.jpg')] bg-cover bg-no-repeat bg-center sm:bg-fixed min-h-screen relative w-full overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50 flex flex-col justify-center items-center py-20 px-4 sm:px-20"
      id="about"
    >

      <div className="sm:pb-10 relative h-full max-w-8xl w-full p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Content Section */}
        <motion.div
          variants={containerVariants}
          className="w-full flex flex-col justify-center items-start gap-8 h-full"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <motion.span
              className="text-sm font-semibold text-purple-600 uppercase tracking-widest inline-flex items-center gap-2"
              whileHover={{ x: 3 }}
            >
              <span className="h-px w-8 bg-purple-400"></span>
              About Me
            </motion.span>
            <motion.h1
              className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent leading-tight"
              whileHover={{
                x: 5,
                transition: { duration: 0.3 },
              }}
            >
              Aman Qureshi
            </motion.h1>
            <motion.p
      className="text-xl font-medium text-amber-600 flex items-center gap-2"
      whileHover={{ x: 3 }}
    >
      <span className="text-amber-300">✦</span>
      <span className="text-amber-600">
        <Typewriter
          words={[
            "Frontend Developer",
            "Backend Developer",
            "Full Stack Developer",
            'MERN Stack Developer',
            'Web Developer'
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </span>
    </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-5">
            <motion.p
              className="text-lg text-justify sm:text-xl text-white leading-relaxed font-semibold"
              whileHover={{ x: 2 }}
            >
              I architect and build exceptional digital experiences with
              meticulous attention to detail. My passion lies in crafting
              solutions that are as beautiful as they are functional.
            </motion.p>

            <motion.p
              className="text-lg text-justify sm:text-xl text-white leading-relaxed font-semibold"
              whileHover={{ x: 2 }}
            >
              With expertise across the entire stack, I bring ideas to life
              through clean, efficient code and intuitive interfaces. My
              approach blends technical excellence with creative vision to
              deliver products that users adore.
            </motion.p>

            {/* Skills tags */}
            <motion.div
              className="flex flex-wrap gap-3 pt-2"
              variants={itemVariants}
            >
              {[
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Tailwind CSS",
                "GraphQL",
                "PostgreSQL",
              ].map((skill) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: "#f3e8ff", // fixed bg-purple-100 (oklch-safe)
                    color: "#6b21a8", // fixed text-purple-800
                  }}
                  whileHover={{
                    y: -2,
                    backgroundColor: "rgb(124, 58, 237)", // #7c3aed
                    color: "#ffffff",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-5 mt-4"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg flex items-center gap-2 hover:shadow-xl transition-all"
            >
              <FiEye className="text-lg" />
              View Portfolio
            </motion.button>

            <motion.a
              href="https://flowcv.com/resume/gvu94eesbeav"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl border-2 border-purple-600 text-purple-600 font-medium hover:bg-purple-600 hover:text-white transition-all flex items-center gap-2"
            >
              <FiDownload className="text-lg" />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated decorative wave */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden -mb-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-24"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".15"
            className="fill-purple-200"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".3"
            className="fill-purple-200"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-purple-200"
          ></path>
        </svg>
      </div> */}
    </motion.section>
  );
};

export default AboutSection;
