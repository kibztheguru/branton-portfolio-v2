"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070707] text-white flex items-center justify-center px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[140px] rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full bottom-[-200px] right-[-200px]" />

      <div className="max-w-5xl text-center relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for freelance work
        </motion.div>
       <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex justify-center mb-8"
>
  <div className="relative">

    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-2xl opacity-40" />

    {/* Profile Image */}
    <img
      src="/profile.jpg"
      alt="Branton Kibet"
      className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/10 shadow-2xl"
    />
    
  </div>
</motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          I Build Websites That
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Turn Visitors Into Paying Clients
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
        >
          I design and develop high-performance, conversion-focused websites for startups and businesses that want real growth — not just pretty design.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
        >
          <Link
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-black rounded-full font-semibold hover:scale-105 transition"
          >
            Book a Strategy Call
          </Link>

          <Link
            href="#work"
            className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            View Case Studies
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <h2 className="text-3xl font-bold">20+</h2>
            <p className="text-gray-400 text-sm">Projects Delivered</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <h2 className="text-3xl font-bold">95%</h2>
            <p className="text-gray-400 text-sm">Client Satisfaction</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <h2 className="text-3xl font-bold">Fast</h2>
            <p className="text-gray-400 text-sm">Delivery & Support</p>
          </div>
        </motion.div>
         <CaseStudies />
    <Pricing />
    <Contact />

      </div>
    </main>
  );
}