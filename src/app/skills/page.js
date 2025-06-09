"use client";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      className="flex flex-col items-center justify-center space-y-10 sm:h-screen pt-15"
      id="skills"
    >
      {/* Header */}
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-row items-center justify-center space-x-2">
          <div className="w-15 sm:w-20 border-t-2 border-purple-600"></div>
          <h1 className="animate-scrol text-center text-3xl sm:text-5xl font-bold tracking-wide">
            My <span className="text-purple-700">Skills</span>
          </h1>
          <div className="w-15 sm:w-20 border-t-2 border-purple-600"></div>
        </div>
        <p className="pt-2 text-sm font-medium text-gray-600 sm:text-lg">
          I Like to craft Beautiful and Scalable Web Products
        </p>
      </motion.div>

      {/* Skills & Progress Bars */}
      <div className="sm:px-20 sm:pt-10 sm:w-full sm:flex sm:flex-row sm:justify-center sm:items-center sm:space-x-10">
        {/* Left Info Cards */}
        <motion.div
          className="space-y-5 p-5 sm:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
  {
    title: "Design + Development",
    desc: "Clean, modern design + optimized for performance, search engines, and conversion.",
  },
  {
    title: "Technology",
    desc: "Staying current with latest frameworks & scalable code patterns.",
  },
  {
    title: "Always Responsive",
    desc: "Mobile-first design for seamless experience across devices.",
  },
].map((item, i) => (
  <motion.div
    key={i}
    className="flex items-start gap-4"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring" }}
    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
  >
    <img
      src="https://cdn-icons-png.flaticon.com/128/103/103456.png"
      alt="skillsImg"
      className="w-6 h-6 mt-1"
    />
    <div>
      <h1 className="text-xl font-bold sm:text-2xl">{item.title}</h1>
      <p className="text-sm text-gray-600 sm:text-lg">{item.desc}</p>
    </div>
  </motion.div>
))}
        </motion.div>

        {/* Right Progress Bars */}
        <motion.div
          className="rounded-[7px] flex h-auto sm:w-1/2 flex-col space-y-5 p-5 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: false }}
        >
          {[
            { skill: "HTML / CSS", percent: 95 },
            { skill: "Tailwind CSS", percent: 90 },
            { skill: "JavaScript", percent: 85 },
            { skill: "ReactJs", percent: 85 },
            { skill: "NodeJs", percent: 75 },
          ].map(({ skill, percent }, idx) => (
            <motion.div key={idx} className="w-full">
              <h1 className="font-bold tracking-wide text-purple-600">{skill}</h1>
              <div className="relative h-6 w-full rounded-[7px] bg-gray-300 overflow-hidden">
                <motion.div
                  className="h-6 flex items-center justify-center bg-purple-600 text-white font-bold rounded-[7px]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percent}%` }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {percent}%
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}