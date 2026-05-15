"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import toast from "react-hot-toast";


export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
  e.preventDefault();

  const toastId = toast.loading("Sending message...");

  try {
    const result = await emailjs.sendForm(
      "service_g5gbhkp",
      "template_rpn0m5c",
      form.current!,
      "j_uBqrPkNYQE3D9FP"
    );

    console.log("SUCCESS:", result);

    toast.success("Message sent successfully!", {
      id: toastId,
    });

    form.current?.reset();

  } catch (error) {
    console.error("EMAILJS ERROR:", error);

    toast.error("Failed to send message.", {
      id: toastId,
    });
  }
};

  return (
    <section id="contact" className="py-32 px-6 bg-[#0b0b0b] text-white">

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          Let’s Work Together
        </h2>
        <p className="text-gray-500 mt-4">
          Send a message or reach me directly below.
        </p>
      </div>

      {/* FORM */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto grid gap-4"
      >

        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-xl bg-white/5 border border-white/10"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-xl bg-white/5 border border-white/10"
          required
        />

        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          className="p-4 rounded-xl bg-white/5 border border-white/10"
          required
        />

        <button
          type="submit"
          className="py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-black font-semibold hover:scale-105 transition"
        >
          Send Message
        </button>

      </motion.form>

      {/* CONTACT LINKS */}
      <div className="max-w-2xl mx-auto mt-12 text-center space-y-3 text-gray-400">

        <p>
          📧 Email: brantonkib@gmail.com
        </p>

        <p>
  📱 Phone:{" "}
  <a href="tel:+254748043720" className="text-white">
    +254 748043720
  </a>
</p>

        <p>
          💬 WhatsApp:
          <a
            href="https://wa.me/254748044720"
            target="_blank"
            className="text-white ml-1"
          >
            Chat Now
          </a>
        </p>

        <p>
          📸 Instagram:
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            className="text-white ml-1"
          >
            @keey_bet
          </a>
        </p>

      </div>
    </section>
  );
}