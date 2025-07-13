"use client";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

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
      {/* Accessタイトルと住所 */}
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
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
        <span className="text-lg md:text-xl font-semibold italic text-gray-800 text-left">
          4-4-21 NISHIOGI, SUGINAMI, Tokyo, Japan
        </span>
      </div>
      <hr className="mb-8 border-gray-200" />

      {/* 下部：インスタグラム／営業時間・TEL／コピーライト */}
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/darlin.hair/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-3xl hover:text-rose-400 transition"
        >
          <FaInstagram />
        </a>

        {/* 営業時間・電話番号 */}
        <div className="text-right md:text-right space-y-1">
          <div className="italic text-base text-gray-600">Hour 11:00 - 20:00</div>
          <a
            href="tel:090-4226-1163"
            className="text-2xl md:text-3xl font-serif font-semibold tracking-widest text-gray-800 hover:text-rose-400 transition"
          >
            090-4226-1163
          </a>
          <div className="text-xs text-gray-500 mt-1 italic">
            Copyrights © STAND. All Rights Reserved.
          </div>
        </div>
      </div>
    </motion.section>
  );
}
