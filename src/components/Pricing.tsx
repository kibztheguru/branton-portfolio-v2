"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$70 – $150",
    description: "Simple landing page for individuals or small businesses.",
    features: [
      "1-page website",
      "Mobile responsive",
      "Basic SEO setup",
      "Contact form",
    ],
    highlight: false,
  },
  {
    name: "Growth (Most Popular)",
    price: "$200 – $300",
    description: "For businesses ready to generate consistent leads online.",
    features: [
      "Multi-section website",
      "Conversion-focused design",
      "Speed optimization",
      "Advanced UI animations",
      "Lead capture system",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$500+",
    description: "Full custom web solution for serious brands & startups.",
    features: [
      "Custom web application",
      "Full UI/UX design",
      "Database integration",
      "Admin dashboard (optional)",
      "Priority support",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 bg-[#070707] text-white">

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="text-gray-400 uppercase tracking-[0.3em] text-sm">
          Pricing
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Simple, Transparent Pricing
        </h2>

        <p className="text-gray-500 mt-4">
          Choose a package based on your business goals. No hidden fees.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-8 rounded-2xl border transition ${
              plan.highlight
                ? "bg-gradient-to-b from-purple-500/20 to-cyan-500/10 border-purple-500/40 scale-105"
                : "bg-white/5 border-white/10"
            }`}
          >

            {/* Name */}
            <h3 className="text-2xl font-bold mb-2">
              {plan.name}
            </h3>

            {/* Price */}
            <p className="text-xl text-green-400 font-semibold mb-4">
              {plan.price}
            </p>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-6">
              {plan.description}
            </p>

            {/* Features */}
          <ul className="space-y-2 text-sm text-gray-300">
              {plan.features.map((f, i) => (
                <li key={i}>✓ {f}</li>
              ))}
            </ul>

         

          </motion.div>
        ))}

      </div>
    </section>
  );
}