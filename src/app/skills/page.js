"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const features = [
    {
      title: "Design + Development",
      desc: "Clean, modern design optimized for performance, SEO, and conversion rates.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Cutting-Edge Technology",
      desc: "Proficient with modern frameworks and architectural patterns for scalable solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Responsive Excellence",
      desc: "Mobile-first philosophy with flawless cross-device compatibility.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
          <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const skills = [
    { skill: "HTML / CSS", percent: 95, color: "bg-gradient-to-r from-orange-500 to-pink-600" },
    { skill: "Tailwind CSS", percent: 90, color: "bg-gradient-to-r from-cyan-400 to-blue-600" },
    { skill: "JavaScript", percent: 85, color: "bg-gradient-to-r from-yellow-400 to-amber-600" },
    { skill: "ReactJs", percent: 85, color: "bg-gradient-to-r from-blue-400 to-cyan-600" },
    { skill: "NodeJs", percent: 75, color: "bg-gradient-to-r from-green-500 to-emerald-600" },
  ];

  return (
    <section className="bg-[url('/images/bg5.avif')] bg-cover bg-no-repeat bg-center sm:bg-fixed min-h-screen relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" id="skills">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl mix-blend-multiply"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-500 rounded-full filter blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
            <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              My <span className="uppercase underline">Skills</span> 
            </h1>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
          </div>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Crafting elegant digital experiences with cutting-edge web technologies
          </motion.p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Features */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl hover:shadow-xl transition-all duration-300 shadow-2xl shadow-black"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      type: "spring", 
                      stiffness: 100,
                      damping: 10
                    }
                  }
                }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-600 dark:text-purple-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Progress */}
          <motion.div
            className="bg-[url('/images/bg6.svg')] bg-cover bg-no-repeat bg-center  min-h-screen p-8 rounded-2xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Technical Expertise
            </h2>
            
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-gray-900 font-semibold">{skill.skill}</span>
                    <span className="text-sm font-bold text-gray-900">{skill.percent}%</span>
                  </div>
                  <div className="relative h-3 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      transition={{ 
                        duration: 1.5, 
                        ease: "easeInOut", 
                        delay: 0.2 + (index * 0.1) 
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Skills */}
            <div className="mt-12">
              <h3 className="text-lg text-center mb-6 py-2 text-white bg-gray-900 rounded-full">
                Also proficient in:
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["TypeScript", "Next.js", "GraphQL", "MongoDB", "Express", "Git", "Figma", "Redux"].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}