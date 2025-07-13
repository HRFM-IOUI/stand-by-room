"use client";
import { motion } from "framer-motion";

export default function Access() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative py-14 px-6 max-w-4xl mx-auto"
    >
      <hr className="mb-8 border-gray-200" />
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
        <h2 className="italic text-3xl md:text-4xl font-serif font-bold tracking-wide mb-4 md:mb-0 text-left">
          Access
        </h2>
        <a
          href="https://www.google.com/maps/search/?api=1&query=4-4-21+NISHIOGI,+SUGINAMI,+Tokyo,+Japan"
          target="_blank"
          rel="noopener noreferrer"
          className="italic underline text-base md:text-lg text-right hover:text-rose-400 transition"
        >
          Open Google Map
        </a>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        <span className="text-lg md:text-xl font-semibold italic text-gray-800 text-left">
          4-4-21 NISHIOGI, SUGINAMI, Tokyo, Japan
        </span>
      </div>
      <hr className="mb-8 border-gray-200" />
    </motion.section>
  );
}
