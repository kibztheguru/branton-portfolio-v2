"use client";

import { motion } from "framer-motion";

const cases = [
  {
    title: "Finance Startup",
    result: "+42% conversions",
    desc: "Redesigned landing page to improve signup flow and messaging clarity.",
  },
  {
    title: "E-Commerce Brand",
    result: "+60% mobile sales",
    desc: "Improved mobile UX and optimized checkout experience.",
  },
  {
    title: "Real Estate Platform",
    result: "+70% engagement",
    desc: "Built advanced search and property filtering system.",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-32 px-6 bg-[#0b0b0b]">

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="text-gray-400 uppercase tracking-[0.3em] text-sm">
          Case Studies
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Real Work. Real Results.
        </h2>

        <p className="text-gray-500 mt-4">
          Every project focuses on performance, conversions, and business growth.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {cases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition group"
          >

            <h3 className="text-xl font-bold mb-2 group-hover:text-white">
              {item.title}
            </h3>

            <p className="text-green-400 font-semibold mb-3">
              {item.result}
            </p>

            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>

            <div className="mt-6 text-sm text-gray-500 group-hover:text-white transition">
              View Case Study →
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}