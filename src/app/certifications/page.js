"use client";

import { motion } from "framer-motion";

export default function Certifications() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 0.7,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <section
        className="mt-15 relative flex flex-col items-center justify-center"
        id="certificate"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ two: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <h1 className="text-2xl font-bold sm:text-4xl">
            Our
            <span className="ml-3 w-fit border-b-2 border-b-purple-600 text-purple-600">
              Certifications
            </span>
          </h1>
        </motion.div>
        
        <div className="relative w-full max-w-9xl overflow-hidden">
          <motion.div 
            className="m-10 sm:m-20 flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth sm:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <motion.div
                key={item}
                className="flex h-auto max-h-auto w-full max-w-sm shrink-0 snap-center flex-col items-center justify-center space-y-3 rounded-[7px] border-2 border-purple-600 bg-purple-100 p-5 opacity-70 shadow-2xl hover:border-purple-600 hover:shadow-purple-600 sm:h-auto sm:w-lg sm:shrink-0 sm:snap-center"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
              >
                <img
                  src="https://img.icons8.com/?size=128&id=0umfE6N5VaVA&format=png"
                  alt="cardIcon"
                  className="size-8"
                />
                <h1 className="text-2xl font-bold text-purple-600 sm:text-4xl">
                  Web Development
                </h1>
                <img
                  src="https://cdn.pixabay.com/photo/2017/09/18/05/23/certificate-2760735_1280.png"
                  alt="certiImg"
                />
                <p className="text-justify text-sm text-gray-600 sm:text-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus atque quaerat aliquam quas doloribus ut dolorum unde
                  eaque dolores blanditiis expedita!
                </p>
                <a
                  href="./Certificates.html"
                  className="h-12 w-full rounded-[7px] border-2 border-purple-600 text-[18px] font-semibold text-purple-600 hover:cursor-pointer hover:border-none hover:bg-purple-600 hover:text-white hover:outline-none sm:h-12 sm:w-full sm:text-[20px] flex justify-center items-center"
                >
                  Read More...{" "}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}