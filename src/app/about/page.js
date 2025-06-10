"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { FiDownload, FiEye } from "react-icons/fi";

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
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50 flex flex-col justify-center items-center py-20 px-4 sm:px-8"
      id="about"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl w-full p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Image Section with elegant frame */}
        <motion.div
          variants={imageVariants}
          whileHover="hover"
          onHoverStart={handleImageHover}
          className="w-full lg:w-1/2 flex justify-center relative group"
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/AMANAA.webp"
              alt="Aman Qureshi - Full Stack Developer"
              fill
              className="object-cover object-center transition-all duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* Decorative frame */}
            <div className="absolute inset-0 border-4 border-white/20 rounded-2xl pointer-events-none" />
            <div className="absolute -inset-6 bg-gradient-to-br from-purple-100/30 to-indigo-100/30 rounded-3xl -z-10 blur-md opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-5 -right-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow-lg font-medium text-sm flex items-center gap-2 z-10"
          >
            <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for work
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={containerVariants}
          className="w-full lg:w-1/2 flex flex-col gap-8"
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
              className="text-xl font-medium text-purple-800/90 flex items-center gap-2"
              whileHover={{ x: 3 }}
            >
              <span className="text-purple-500">✦</span> Full Stack Developer &
              Digital Craftsman
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-5">
            <motion.p
              className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light"
              whileHover={{ x: 2 }}
            >
              I architect and build exceptional digital experiences with
              meticulous attention to detail. My passion lies in crafting
              solutions that are as beautiful as they are functional.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light"
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

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-4 rounded-xl border-2 border-purple-600 text-purple-600 font-medium hover:bg-purple-600 hover:text-white transition-all flex items-center gap-2"
            >
              <FiDownload className="text-lg" />
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated decorative wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden -mb-1">
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
      </div>
    </motion.section>
  );
};

export default AboutSection;
