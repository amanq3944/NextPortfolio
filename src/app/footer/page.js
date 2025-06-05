"use client";

import { motion } from "framer-motion";

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
    scale: 1.05,
    transition: { duration: 0.3 },
  };

  const tapEffect = {
    scale: 0.95,
  };

  const socialIcon = {
    hover: {
      y: -5,
      scale: 1.1,
      backgroundColor: "#d97706", // amber-600
    },
    tap: {
      scale: 0.9,
    },
  };

  const arrowIcon = {
    hover: {
      x: 5,
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.footer
      id="footer"
      className="text-white bg-slate-900 p-5 sm:p-20 flex flex-col space-y-3 items-center justify-around"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={container}
    >
      <motion.div 
        className="flex flex-col space-y-3 items-start sm:flex sm:flex-row sm:justify-around w-full"
        variants={container}
      >
        {/* Left Section */}
        <motion.div 
          className="flex flex-col items-start space-y-5"
          variants={item}
        >
          <h1 className="inline-block text-5xl font-bold sm:text-6xl sm:tracking-wide">
            <motion.div 
              className="inline-block w-fit rounded-[100%] bg-amber-600"
              whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
            >
              Le
            </motion.div>
            t's work <span className="block">together</span>
          </h1>
          
          <div className="sm:flex sm:flex-col sm:items-start sm:justify-around sm:space-x-3">
            <motion.p 
              className="text-2xl font-semibold sm:text-3xl sm:tracking-wide"
              variants={item}
            >
              Based in India |
            </motion.p>
            
            <motion.div 
              className="flex items-center justify-around space-x-3 pt-4"
              variants={item}
            >
              {[
                "https://cdn-icons-png.flaticon.com/128/1384/1384014.png",
                "https://cdn-icons-png.flaticon.com/128/6244/6244710.png",
                "https://cdn-icons-png.flaticon.com/128/2168/2168336.png",
                "https://cdn-icons-png.flaticon.com/128/1384/1384015.png",
              ].map((src, i) => (
                <motion.a 
                  key={i} 
                  href="#"
                  variants={item}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.img
                    src={src}
                    alt="iconImg"
                    className="size-9 rounded-full bg-white"
                    variants={socialIcon}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Middle Section - Email */}
        <motion.div 
          className="group rounded-[7px] border p-7 hover:border-amber-600 hover:cursor-pointer"
          variants={item}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <div className="h-36 w-full flex flex-col flex-wrap justify-around items-center">
            <div>
              <p className="text-xl font-bold sm:text-2xl group-hover:text-amber-600">
                Looking for a hectic designer?
              </p>
            </div>
            <a href="#">
              <motion.div 
                className="group flex flex-wrap items-center justify-start sm:flex sm:flex-row sm:items-center sm:justify-start"
                whileHover="hover"
              >
                <p className="flex flex-wrap text-xl text-yellow-600 sm:text-2xl group-hover:text-purple-600">
                  amanq3944@gmail.com
                </p>
                <motion.img
                  src="https://cdn-icons-png.flaticon.com/128/14035/14035529.png"
                  alt="footerIconImg"
                  className="group size-9 rotate-45"
                  variants={arrowIcon}
                />
              </motion.div>
            </a>
          </div>
        </motion.div>

        {/* Right Section - Phone */}
        <motion.div 
          className="rounded-[7px] border-[0.1px] p-7 group hover:border-amber-600 hover:cursor-pointer"
          variants={item}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <div className="h-36 w-full flex flex-col flex-wrap justify-around items-center">
            <div>
              <p className="text-xl font-bold sm:text-2xl group-hover:text-amber-600">
                Want a more in-depth look at my history?
              </p>
            </div>
            <a href="#">
              <motion.div 
                className="flex flex-wrap items-center justify-start sm:flex sm:flex-row sm:items-center sm:justify-start"
                whileHover="hover"
              >
                <p className="flex flex-wrap text-xl text-yellow-600 sm:text-2xl group-hover:text-purple-600">
                  +91 9575932050
                </p>
                <motion.img
                  src="https://cdn-icons-png.flaticon.com/128/14035/14035529.png"
                  alt="footerIconImg"
                  className="size-9 rotate-45"
                  variants={arrowIcon}
                />
              </motion.div>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Name Section */}
      <motion.div 
        className="flex flex-wrap items-center"
        variants={item}
      >
        <h1 className="text-center font-[Orbitron] text-6xl font-bold tracking-wide text-yellow-600 sm:text-center sm:text-[160px]">
          AMAN QURESHI
        </h1>
      </motion.div>

      {/* Bottom Section */}
      <motion.div 
        className="w-full border-t-[1px] pt-3 sm:flex sm:w-full sm:flex-row sm:justify-between"
        variants={item}
      >
        <p className="text-sm sm:text-lg font-semibold">
          ©2023 Aman Qureshi, All Rights Reserved
        </p>
        <motion.a 
          href="#navbar"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <p className="inline-block text-xl sm:text-lg font-semibold">
            Back to Top
            <motion.img
              src="https://cdn-icons-png.flaticon.com/128/14035/14035529.png"
              alt="b2tIcon"
              className="inline-block size-7"
              whileHover={{ y: -5 }}
            />
          </p>
        </motion.a>
      </motion.div>
    </motion.footer>
  );
}
