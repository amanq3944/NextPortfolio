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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const formItem = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.3 },
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
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="h-full m-5 flex flex-col space-y-5 sm:m-14 sm:h-screen"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={container}
    >
      <Toaster />
      <div className="h-full flex flex-col space-y-5 sm:flex sm:flex-row sm:justify-around sm:items-center">
        {/* Contact Details */}
        <motion.div 
          className="flex flex-col space-y-4"
          variants={container}
        >
          <motion.h3 
            className="w-fit border-b-2 text-sm font-semibold tracking-wide text-amber-600 sm:text-2xl"
            variants={item}
          >
            Contact
          </motion.h3>
          
          <motion.h1 
            className="text-3xl font-bold text-purple-600 sm:text-8xl tracking-wide"
            variants={item}
          >
            Lets <span className="block">Connect</span>
          </motion.h1>
          
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
              className="flex items-center gap-3"
              variants={item}
            >
              <motion.img 
                src={item.icon} 
                alt="icon" 
                className="size-10"
                whileHover={{ scale: 1.1 }}
              />
              <div className="border-b-2 border-purple-300 py-3">
                <p className="text-sm text-slate-500 sm:text-[19px]">{item.label}</p>
                <p className="font-semibold text-purple-600 sm:text-[18px]">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Form Section */}
        <motion.div 
          className="grid gap-5 sm:grid sm:gap-5"
          variants={container}
        >
          <motion.form 
            onSubmit={handleSubmit} 
            className="grid gap-y-4 sm:grid sm:grid-cols-2 sm:gap-5"
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
                variants={formItem}
              >
                <label htmlFor={field.name} className="sm:text-[20px] font-medium text-purple-600">
                  {field.label}
                </label>
                <motion.input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handleChange}
                  className="placeholder-purple-600 sm:mt-2 placeholder:text-[18px] border-purple-600 w-full rounded-[7px] border-[1px] p-2 outline-none sm:px-[35px] sm:py-[20px]"
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 0 2px rgba(124, 58, 237, 0.5)"
                  }}
                />
              </motion.div>
            ))}

            <motion.div 
              className="sm:col-span-2"
              variants={formItem}
            >
              <label htmlFor="message" className="sm:text-[20px] font-medium text-purple-600">
                Message
              </label>
              <motion.textarea
                name="message"
                id="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                className="placeholder-purple-600 sm:mt-2 sm:px-[35px] sm:py-[20px] placeholder:text-[18px] border-purple-600 w-full rounded-[7px] border-[1px] p-2 outline-none"
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 0 2px rgba(124, 58, 237, 0.5)"
                }}
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={loading}
              className="group h-11 w-48 rounded-[7px] border-2 border-purple-600 text-sm font-semibold text-purple-600 hover:cursor-pointer hover:border-none hover:bg-purple-600 hover:text-white hover:outline-none sm:h-12 sm:w-80 sm:text-lg disabled:opacity-50"
              variants={formItem}
              whileHover={!loading ? buttonHover : {}}
              whileTap={!loading ? { scale: 0.95 } : {}}
            >
              {loading ? "Sending..." : "Submit"}
            </motion.button>
          </motion.form>

          {/* Social Icons */}
          <motion.div 
            className="flex items-center justify-center space-x-2 border-purple-300 pt-5 sm:justify-start"
            variants={item}
          >
            <div className="border-[0.5px] w-40 border-purple-600"></div>
            <h1 className="font-semibold tracking-wider text-purple-600">Follow me</h1>
            <div className="flex space-x-5">
              {[
                "https://cdn-icons-png.flaticon.com/128/1384/1384014.png",
                "https://cdn-icons-png.flaticon.com/128/6244/6244710.png",
                "https://cdn-icons-png.flaticon.com/128/2168/2168336.png",
                "https://cdn-icons-png.flaticon.com/128/1384/1384015.png",
              ].map((src, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  aria-label={`social-icon-${i}`}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img 
                    src={src} 
                    alt="icon" 
                    className="size-8 hover:bg-purple-600 rounded-full" 
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
