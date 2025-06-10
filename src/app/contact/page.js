"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Enhanced animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  const formItem = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 5px 15px rgba(124, 58, 237, 0.3)",
    transition: { duration: 0.3 },
  };

  const buttonTap = {
    scale: 0.98,
    transition: { duration: 0.2 },
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { name, email, phone, subject, message } = form;
    if (!name || !email || !phone || !subject || !message) {
      toast.error("All fields are required!");
      return false;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return false;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid 10-digit phone number!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    toast.loading("Sending your message...");

    try {
      const response = await emailjs.send(
        "service_y9qrl47",
        "template_0bunsva",
        {
          from_name: form.name,
          to_name: "Aman",
          from_email: form.email,
          message: form.message,
          subject: form.subject,
          phone: form.phone,
        },
        "GjVZLX6O2ywIGcq54"
      );

      if (response.status === 200) {
        toast.dismiss();
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error(error);
      toast.dismiss();
      toast.error("Failed to send message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="relative h-full min-h-screen w-full overflow-hidden px-5 py-10 sm:px-14 sm:py-20"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={container}
    >
      {/* Background decorative elements */}
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-purple-100/50 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl"></div>
      
      <Toaster position="top-center" toastOptions={{
        style: {
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(124, 58, 237, 0.2)',
          boxShadow: '0 8px 32px rgba(124, 58, 237, 0.1)',
          padding: '12px 24px',
          color: '#6b21a8',
        },
      }} />
      
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col space-y-10 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:space-x-10">
        {/* Contact Details - Enhanced */}
        <motion.div 
          className="flex flex-col space-y-6 sm:max-w-md"
          variants={container}
        >
          <motion.div variants={item}>
            <motion.h3 
              className="relative inline-block text-sm font-semibold uppercase tracking-widest text-amber-500 before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-12 before:bg-gradient-to-r before:from-amber-400 before:to-purple-500 sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Contact
            </motion.h3>
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-bold leading-tight text-purple-900 sm:text-7xl"
            variants={item}
          >
            Let's <span className="block bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">Connect</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-purple-800/80"
            variants={item}
          >
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </motion.p>
          
          <div className="space-y-6">
            {[
              {
                label: "Email us",
                value: "amanq3944@gmail.com",
                icon: "https://cdn-icons-png.flaticon.com/128/3062/3062634.png",
              },
              {
                label: "Call us",
                value: "+91 9575932050",
                icon: "https://cdn-icons-png.flaticon.com/128/16007/16007584.png",
              },
              {
                label: "Address",
                value: "New Market, TT Nagar, Bhopal 462023",
                icon: "https://cdn-icons-png.flaticon.com/128/1295/1295232.png",
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="group flex items-start gap-4"
                variants={item}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-amber-50 p-2 shadow-sm transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-md"
                  whileHover={{ scale: 1.1 }}
                >
                  <img 
                    src={item.icon} 
                    alt="icon" 
                    className="h-6 w-6 object-contain opacity-80"
                  />
                </motion.div>
                <div className="border-b border-purple-200/60 py-2 group-hover:border-purple-400/60">
                  <p className="text-sm font-medium text-purple-600/80 sm:text-base">{item.label}</p>
                  <p className="text-lg font-semibold text-purple-900 sm:text-xl">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form Section - Enhanced */}
        <motion.div 
          className="w-full max-w-2xl rounded-2xl bg-white/80 p-6 shadow-xl backdrop-blur-sm sm:p-8"
          variants={container}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.form 
            onSubmit={handleSubmit} 
            className="grid gap-5 sm:grid-cols-2"
            variants={container}
          >
            {[
              { label: "Name", type: "text", name: "name", placeholder: "Your name*" },
              { label: "Email", type: "email", name: "email", placeholder: "Your email*" },
              { label: "Phone", type: "text", name: "phone", placeholder: "Your number*" },
              { label: "Subject", type: "text", name: "subject", placeholder: "Your subject*" },
            ].map((field, i) => (
              <motion.div 
                key={i}
                className="space-y-1"
                variants={formItem}
              >
                <label htmlFor={field.name} className="text-sm font-medium text-purple-700 sm:text-base">
                  {field.label}
                </label>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.01 }}
                >
                  <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-purple-200 bg-white/80 p-3 text-purple-900 placeholder-purple-400/70 outline-none transition-all duration-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 focus:ring-offset-2 sm:p-4"
                    disabled={loading}
                  />
                  <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-purple-50 to-amber-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </motion.div>
              </motion.div>
            ))}

            <motion.div 
              className="sm:col-span-2"
              variants={formItem}
            >
              <label htmlFor="message" className="text-sm font-medium text-purple-700 sm:text-base">
                Message
              </label>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.01 }}
              >
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message*"
                  className="w-full rounded-xl border border-purple-200 bg-white/80 p-3 text-purple-900 placeholder-purple-400/70 outline-none transition-all duration-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 focus:ring-offset-2 sm:p-4"
                  disabled={loading}
                />
                <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-purple-50 to-amber-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </motion.div>
            </motion.div>

            <motion.div
              className="sm:col-span-2"
              variants={formItem}
            >
              <motion.button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-purple-600 to-amber-500 p-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-200 sm:p-4"
                whileHover={!loading ? buttonHover : {}}
                whileTap={!loading ? buttonTap : {}}
              >
                {loading ? (
                  <>
                    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.form>

          {/* Social Icons - Enhanced */}
          <motion.div 
            className="mt-8 flex flex-col items-center space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
            variants={item}
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-300 to-transparent sm:w-auto sm:flex-1"></div>
            <h3 className="px-4 text-sm font-medium text-purple-600">Follow me</h3>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-300 to-transparent sm:w-auto sm:flex-1"></div>
          </motion.div>
          
          <motion.div 
            className="mt-6 flex justify-center space-x-4"
            variants={item}
          >
            {[
              { icon: "https://cdn-icons-png.flaticon.com/128/1384/1384014.png", label: "Twitter" },
              { icon: "https://cdn-icons-png.flaticon.com/128/6244/6244710.png", label: "LinkedIn" },
              { icon: "https://cdn-icons-png.flaticon.com/128/2168/2168336.png", label: "GitHub" },
              { icon: "https://cdn-icons-png.flaticon.com/128/1384/1384015.png", label: "Instagram" },
            ].map((social, i) => (
              <motion.a 
                key={i} 
                href="#" 
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-purple-200"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img 
                  src={social.icon} 
                  alt={social.label} 
                  className="h-5 w-5 opacity-80 transition-opacity duration-300 hover:opacity-100" 
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}