'use client'; // Add this at the top

import { useState, useEffect } from 'react';
import Head from '@/app/head/page';
import About from '@/app/about/page';
import Skills from './skills/page';
import Certifications from './certifications/page';
import Projects from './projects/page';
import Contact from './contact/page';
import Footer from './footer/page';
import Navbar from '@/app/navbar/page';
import ReviewPopup from '@/app/reviewpopup/page';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Set a timeout to show the popup after 5-10 seconds
    const timer = setTimeout(() => {
      // Check if user has already submitted a review (you might want to use cookies/localStorage)
      const hasSubmittedReview = localStorage.getItem('hasSubmittedReview');
      if (!hasSubmittedReview) {
        setShowPopup(true);
      }
    }, Math.random() * 5000 + 5000); // Random time between 5-10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    // Optionally set a flag in localStorage to prevent showing again
    localStorage.setItem('hasSubmittedReview', 'true');
  };

  return (
    <>
      <Navbar />
      <Head />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      {showPopup && <ReviewPopup onClose={handleClosePopup} />}
    </>
  );
}