"use client";
import { motion } from "framer-motion";

export default function Access() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative pt-7 pb-7 px-4 max-w-3xl mx-auto"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <hr className="mb-3 border-gray-200" />
      <div className="flex flex-col md:flex-row md:items-end md:justify-between space-y-1 md:space-y-0 mb-1.5">
        <h2
          className="text-xl md:text-2xl font-semibold text-left leading-tight tracking-wide"
          style={{ color: "#8DA399" }}
        >
          Access
        </h2>
        <a
          href="https://www.google.com/maps/search/?api=1&query=東京都杉並区西荻南4-4-21"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-sm md:text-base text-right hover:text-[#8DA399] transition leading-tight"
        >
          Googleマップで開く
        </a>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-0.5 mb-1.5">
        <span
          className="text-sm md:text-base font-medium text-left leading-tight tracking-wide"
          style={{ color: "#444" }}
        >
          東京都杉並区西荻南 4-4-21
        </span>
      </div>
      <hr className="mt-3 border-gray-200" />
    </motion.section>
  );
}
