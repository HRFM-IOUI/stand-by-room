"use client";
import { motion } from "framer-motion";

export default function Access() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto px-2"
    >
      <hr className="mb-6 border-gray-200" />
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-4">
        <h2 className="italic text-2xl md:text-3xl font-serif font-bold mb-3 md:mb-0 text-left">
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
      <span className="block text-base md:text-lg font-semibold italic text-gray-800 mb-1">
        4-4-21 NISHIOGI, SUGINAMI, Tokyo, Japan
      </span>
      <hr className="mt-6 border-gray-200" />
    </motion.section>
  );
}
