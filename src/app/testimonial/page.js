'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Ali',
    role: 'Marketing Director',
    company: 'TechSolutions Inc.',
    content: 'This product completely revolutionized our workflow. The results were visible within the first week of implementation!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    color: 'bg-gradient-to-br from-purple-500 to-pink-500',
    highlight: 'via-pink-400'
  },
  {
    id: 2,
    name: 'Sahil Qureshi',
    role: 'Lead Developer',
    company: 'Digital Innovations',
    content: 'Never seen such polished UI components. The attention to detail is extraordinary and saved us hundreds of development hours.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-400',
    highlight: 'via-cyan-300'
  },
  {
    id: 3,
    name: 'Anjali Kushwaha',
    role: 'UX Designer',
    company: 'Creative Minds',
    content: 'Our user engagement metrics increased by 47% after implementing this solution. The animations are buttery smooth!',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    color: 'bg-gradient-to-br from-emerald-500 to-teal-400',
    highlight: 'via-teal-300'
  }
];

const CosmicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Stars */}
      {[...Array(100)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
            animation: `twinkle ${Math.random() * 5 + 5}s infinite alternate`
          }}
        />
      ))}
      
      {/* Nebula Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-pink-500/20 blur-3xl"></div>
      </div>

      {/* Animated Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0
          }}
          animate={{
            x: [null, Math.random() * 100],
            y: [null, Math.random() * 100],
            opacity: [0, 0.6, 0],
            transition: {
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }
          }}
          className="absolute rounded-full bg-white/30 backdrop-blur-sm"
          style={{
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Enhanced auto-rotation with pause controls
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 3500); // Faster rotation for better engagement
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, activeIndex]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '50%' : '-50%',
      opacity: 0,
      rotateY: direction > 0 ? 30 : -30,
      scale: 0.9,
      filter: 'blur(4px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { 
        type: 'spring', 
        stiffness: 400,
        damping: 25,
        mass: 0.8
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? '50%' : '-50%',
      opacity: 0,
      rotateY: direction < 0 ? 30 : -30,
      scale: 0.9,
      filter: 'blur(4px)',
      transition: { 
        duration: 0.5,
        ease: 'easeIn'
      }
    })
  };

  return (
    <div id='testimonials' className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 relative overflow-hidden">
      <CosmicBackground />
      
      <div className="max-w-6xl w-full px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 animate-gradient">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear what industry leaders say about our work
          </p>
        </motion.div>

        <div 
          className="relative h-[500px]"
          onMouseEnter={() => {
            setIsHovered(true);
            setIsAutoPlaying(false);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsAutoPlaying(true);
          }}
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className={`relative w-full max-w-2xl mx-auto ${testimonials[activeIndex].color} p-[2px] rounded-3xl shadow-2xl`}>
                <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-[1.25rem] overflow-hidden p-8 h-full border border-white/10">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <motion.div
                      initial={{ scale: 0.9, rotate: -5 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                      className="relative flex-shrink-0"
                    >
                      <div className={`absolute inset-0 ${testimonials[activeIndex].highlight} rounded-full blur-xl opacity-40`} />
                      <img 
                        src={testimonials[activeIndex].avatar} 
                        alt={testimonials[activeIndex].name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white/20 relative z-10"
                      />
                    </motion.div>
                    
                    <div className="text-center md:text-left">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-4"
                      >
                        <h3 className="text-2xl font-bold text-white">{testimonials[activeIndex].name}</h3>
                        <p className="text-gray-300">{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</p>
                      </motion.div>
                      
                      <motion.blockquote
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg italic text-gray-200 mb-6 relative"
                      >
                        <span className="absolute -top-6 -left-2 text-5xl text-white/10">"</span>
                        {testimonials[activeIndex].content}
                        <span className="absolute -bottom-6 -right-2 text-5xl text-white/10">"</span>
                      </motion.blockquote>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center md:justify-start gap-1"
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.span 
                            key={i} 
                            className="text-2xl text-yellow-400"
                            whileHover={{ scale: 1.2 }}
                          >
                            ★
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-white w-8' : 'bg-white/30'}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all border border-white/20"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all border border-white/20"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Add this to your global CSS */}
      <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 1; }
        }
        @keyframes animate-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: animate-gradient 6s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;