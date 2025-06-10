'use client'; // Add this at the top for client-side rendering

// Use specific imports from framer-motion
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={containerVariants}
      className="sm:h-screen h-fit bg-gradient-to-r from-purple-100 to-white sm:flex sm:flex-col sm:justify-center sm:items-center"
      id="about"
    >
      <div className="p-10 py-10 gap-y-10 flex flex-col items-center justify-center sm:flex sm:flex-row sm:items-center sm:justify-around">
        <motion.div
          variants={imageVariants}
          className="sm:flex sm:w-1/2 sm:flex-col sm:items-center sm:justify-center"
        >
          <Image
            src="/images/AMANAA.webp"
            alt="aboutImg"
            width={500}
            height={500}
            className="sm:size-[500px] size-80 rounded-[7px] shadow-2xl sm:shadow-2xl bg-none"
            priority // Add priority if this is above the fold
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-3 sm:w-1/2 sm:gap-4"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-bold text-purple-800 sm:text-lg border-b-2 w-fit"
          >
            About Me
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold sm:text-6xl text-purple-600"
          >
            Aman Qureshi
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold sm:text-lg"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold sm:text-lg text-justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            veritatis reiciendis obcaecati excepturi maxime enim.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm text-slate-600 sm:text-lg text-justify"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolor iste amet id ipsam provident, quae quaerat tempore aspernatur
            ad consequuntur sed possimus ea impedit velit nesciunt eveniet
            reiciendis aut!
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm sm:text-lg rounded-[7px] border-2 border-purple-600 font-semibold text-purple-600 hover:cursor-pointer hover:border-none hover:bg-purple-600 hover:text-white hover:outline-none sm:h-12 sm:w-80 h-10 w-full"
          >
            Read More...
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;