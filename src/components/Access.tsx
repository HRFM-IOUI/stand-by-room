"use client";
import { motion } from "framer-motion";

export default function Access() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative py-4 px-4 max-w-3xl mx-auto"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <hr className="mb-4 border-gray-200" />
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-2">
        <h2
          className="text-2xl md:text-3xl font-bold mb-2 md:mb-0 text-left"
          style={{ color: "#8DA399" }} // テーマカラー
        >
          ACCESS
        </h2>
        <a
          href="https://www.google.com/maps/search/?api=1&query=東京都杉並区西荻南4-4-21"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-base md:text-lg text-right hover:text-[#8DA399] transition"
        >
          Googleマップで開く
        </a>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
        <span
          className="text-lg md:text-xl font-semibold text-left"
          style={{ color: "#444" }} // ソリッドグレー
        >
          東京都杉並区西荻南 4-4-21
        </span>
      </div>
      <hr className="mb-4 border-gray-200" />
    </motion.section>
  );
}
