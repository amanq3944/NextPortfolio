"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeadSection() {
  return (
    <section
      className="bg-[url('https://images.unsplash.com/photo-1661362290679-c7da7ff5ee5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fDNkJTIwYmFja2dyb3VuZCUyMGluJTIwY29sb3IlMjB3aGl0ZSUyMHdpdGglMjBsaXR0bGUlMjBwcmludGVkJTIwbGlnaHRzfGVufDB8fDB8fHww')] bg-cover bg-center"
      id="head"
    >
      <div className="flex flex-col-reverse h-auto w-full items-center justify-center p-5 sm:flex-row sm:justify-around sm:items-start sm:gap-2 sm:px-25 sm:py-20">
        {/* Left Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex h-auto flex-col space-y-5 sm:space-y-5 p-5 sm:ml-15 rounded-2xl"
        >
          <motion.h3
            className="text-2xl font-semibold text-purple-950 sm:text-5xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            I am <span className="animate-pulse">Aman Qureshi</span>
          </motion.h3>

          <motion.h1
            className="text-3xl font-bold text-purple-950 sm:text-7xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Next-Level
            <span className="block text-purple-700">Web Developer.</span>
          </motion.h1>

          <motion.p
            className="font-medium text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            itaque tempore, iste ex, magnam ipsum, quae assumenda nisi facilis
            totam possimus deserunt veniam sint! Quasi deserunt harum corrupti
            rem consequatur!
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm sm:text-lg rounded-[7px] border-2 border-purple-600 font-semibold text-purple-600 hover:cursor-pointer hover:border-none hover:bg-purple-600 hover:text-white hover:outline-none sm:h-12 sm:w-80 h-10 w-50"
          >
            Download CV...
          </motion.button>

          {/* Social Icons */}
          <motion.div
            className="flex space-x-5 pt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {[
              "https://cdn-icons-png.flaticon.com/128/1384/1384014.png",
              "https://cdn-icons-png.flaticon.com/128/6244/6244710.png",
              "https://cdn-icons-png.flaticon.com/128/2168/2168336.png",
              "https://cdn-icons-png.flaticon.com/128/1384/1384015.png",
            ].map((icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={icon}
                  alt="icon"
                  className="size-10 hover:bg-purple-600 rounded-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="h-auto mt-2 w-full sm:flex sm:justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ rotate: 0, scale: 1.05 }}
            initial={{ rotate: 0 }}
            className="rounded-2xl transition-transform duration-800 shadow-2xl border-2 border-purple-600 hover:shadow-purple-600"
          >
            <Image
              src="/images/AMANPP.jpeg"
              alt="imgHead"
              width={500}
              height={500}
              className="sm:size-[450px] rounded-2xl w-full h-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
