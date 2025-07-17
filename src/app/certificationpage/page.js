"use client"

// pages/certificate.js
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const sealVariants = {
  initial: { scale: 0 },
  animate: { 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: { scale: 1.1 }
};

export default function CertificatePage() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Certificate data
  const certificate = {
    id: "CERT-2024-7890",
    recipientName: "Aman Qureshi",
    courseTitle: "Advanced Next.js Development",
    completionDate: "June 25, 2024",
    issueDate: "June 28, 2024",
    issuer: "Next.js Academy",
    description: "This certificate acknowledges successful completion of all course requirements with distinction and honors recognition.",
    skillsGained: [
      "Server-side rendering (SSR)",
      "Static site generation (SSG)",
      "API routes implementation",
      "Dynamic routing strategies",
      "Authentication systems",
      "Performance optimization"
    ],
    verificationUrl: "https://verify.nextjs-academy.com/cert/CERT-2024-7890",
    instructor: "Sarah Williams",
    duration: "8 weeks (120 hours)",
    grade: "A+ (98%)",
    sealColor: "gold" // 'blue', 'gold', or 'silver'
  };

  const sealGradient = {
    gold: 'from-yellow-400 via-yellow-500 to-yellow-600',
    silver: 'from-gray-300 via-gray-400 to-gray-500',
    blue: 'from-blue-400 via-blue-500 to-blue-600'
  };

  return (
    <>
      <Head>
        <title>{certificate.recipientName}s Certificate | Next.js Academy</title>
        <meta name="description" content={`Official certificate of completion for ${certificate.courseTitle}`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div 
              className="inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <svg className="w-16 h-16 mx-auto text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </motion.div>
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4 font-serif tracking-tight">
              Certificate of Excellence
            </h1>
            <p className="text-xl text-purple-500 font-medium">Proudly presented to</p>
          </motion.div>
          
          {/* Certificate Container */}
          <motion.div 
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white mb-20"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {isHovered && (
                <>
                  <motion.div 
                    className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-200 opacity-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-blue-200 opacity-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </>
              )}
            </div>
            
            {/* Decorative Borders */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"></div>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"></div>
            
            {/* Watermark Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 500 300" preserveAspectRatio="xMidYMid meet">
                <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="currentColor" className="text-purple-300" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#pattern)" />
              </svg>
            </div>
            
            {/* Certificate Content */}
            <div className="relative z-10 p-8 md:p-12">
              {/* Animated Seal Badge */}
              <motion.div 
                className={`absolute top-6 right-6 w-28 h-28 rounded-full flex items-center justify-center shadow-xl bg-gradient-to-br ${sealGradient[certificate.sealColor]} animate-gradient-x`}
                variants={sealVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </motion.div>
              
              {/* Recipient Section */}
              <motion.div 
                className="text-center mb-12 py-8 border-y-2 border-dashed border-purple-100"
                variants={itemVariants}
              >
                <motion.h2 
                  className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-900 mb-6 font-serif tracking-tight"
                  whileHover={{ scale: 1.02 }}
                >
                  {certificate.recipientName}
                </motion.h2>
                <motion.p className="text-xl text-purple-500 mb-4" whileHover={{ scale: 1.05 }}>
                  has demonstrated outstanding achievement in
                </motion.p>
                <motion.h3 
                  className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                  whileHover={{ scale: 1.03 }}
                >
                  {certificate.courseTitle}
                </motion.h3>
              </motion.div>
              
              {/* Details Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                variants={containerVariants}
              >
                {[
                  { label: "Date Awarded", value: certificate.completionDate },
                  { label: "Certificate ID", value: certificate.id },
                  { label: "Issuing Authority", value: certificate.issuer }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <p className="text-purple-500 mb-2">{item.label}</p>
                    <p className="text-xl font-medium text-gray-800">{item.value}</p>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Signatures */}
              <motion.div 
                className="flex flex-wrap justify-between mt-12 pt-8 border-t-2 border-gray-100"
                variants={containerVariants}
              >
                {[
                  { name: certificate.instructor, title: "Lead Instructor" },
                  { name: "Dr. Michael Chen", title: "Academic Director" }
                ].map((person, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center w-full md:w-1/2 mb-8 md:mb-0"
                    variants={itemVariants}
                  >
                    <div className="h-24 w-48 border-b-2 border-gray-300 mx-auto mb-2 relative">
                      <motion.div 
                        className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-purple-400"
                        whileHover={{ rotate: 10 }}
                      >
                        <svg className="mt-10 w-14 h-14" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    </div>
                    <p className="text-lg font-medium text-gray-700">{person.name}</p>
                    <p className="text-sm text-purple-500">{person.title}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Certificate Details Section */}
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-6 px-8 text-white">
              <h2 className="text-3xl font-bold flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Certificate Details
              </h2>
            </div>
            
            <div className="p-8">
              <motion.div 
                className="grid md:grid-cols-2 gap-12"
                variants={containerVariants}
              >
                {/* Left Column */}
                <motion.div variants={itemVariants}>
                  <div className="mb-10">
                    <motion.h3 
                      className="text-2xl font-semibold text-gray-800 mb-6 flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <svg className="w-8 h-8 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Course Information
                    </motion.h3>
                    <div className="space-y-6">
                      {[
                        { label: "Course Title", value: certificate.courseTitle },
                        { label: "Description", value: certificate.description },
                        { label: "Duration", value: certificate.duration },
                        { label: "Final Grade", value: certificate.grade }
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg shadow-sm"
                          whileHover={{ scale: 1.02 }}
                        >
                          <p className="text-purple-500 mb-1">{item.label}</p>
                          <p className="text-lg font-medium text-gray-800">{item.value}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                  >
                    <motion.h3 
                      className="text-2xl font-semibold text-gray-800 mb-6 flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Verification
                    </motion.h3>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-inner">
                      <p className="text-gray-700 mb-3">Verify this certificates authenticity:</p>
                      <a 
                        href={certificate.verificationUrl} 
                        className="text-blue-600 hover:underline break-all font-medium text-lg"
                      >
                        {certificate.verificationUrl}
                      </a>
                      <motion.div 
                        className="mt-6 flex justify-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-40 h-40 bg-white border-2 border-purple-200 rounded-lg flex items-center justify-center text-gray-400 shadow-md">
                          <span className="text-sm">Scan QR Code</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Right Column */}
                <motion.div variants={itemVariants}>
                  <motion.h3 
                    className="text-2xl font-semibold text-gray-800 mb-6 flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <svg className="w-8 h-8 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Skills Acquired
                  </motion.h3>
                  <motion.ul 
                    className="space-y-4"
                    variants={containerVariants}
                  >
                    {certificate.skillsGained.map((skill, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg shadow-sm"
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                      >
                        <span className={`flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full mr-4 shadow-sm ${
                          index % 3 === 0 ? 'bg-purple-100 text-purple-600' : 
                          index % 3 === 1 ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                        }`}>
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-xl font-medium text-gray-800">{skill}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  <motion.div 
                    className="mt-16"
                    variants={itemVariants}
                  >
                    <motion.h3 
                      className="text-2xl font-semibold text-gray-800 mb-6 flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <svg className="w-8 h-8 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Certificate Actions
                    </motion.h3>
                    <div className="flex flex-wrap gap-6">
                      <motion.button 
                        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-bold flex items-center shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download PDF
                      </motion.button>
                      <motion.button 
                        className="px-8 py-4 bg-white border-2 border-purple-200 hover:border-purple-300 text-gray-800 rounded-xl font-bold flex items-center shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-6 h-6 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        Share Certificate
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}