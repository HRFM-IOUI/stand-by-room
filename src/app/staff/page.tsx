"use client";
import { motion } from "framer-motion";

export default function StaffPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="min-h-[75vh] flex flex-col items-center justify-center pt-20 pb-20 bg-white"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <div className="w-full max-w-xl mx-auto text-center">
        {/* STAFFタイトル */}
        <h1
          className="text-4xl md:text-6xl font-bold mb-3 tracking-wider"
          style={{
            color: "#8DA399",
            fontFamily: "Helvetica, Arial, sans-serif",
            letterSpacing: "0.14em",
          }}
        >
          STAFF
        </h1>
        {/* サブタイトル */}
        <div
          className="italic text-lg mb-7"
          style={{ color: "#8DA399", fontWeight: 600, letterSpacing: "0.1em" }}
        >
          Stylist
        </div>

        {/* スタッフ名 */}
        <div className="mb-5">
          <span
            className="text-2xl md:text-4xl font-bold tracking-widest"
            style={{
              color: "#333",
              fontFamily: "Helvetica, Arial, sans-serif",
              letterSpacing: "0.16em",
            }}
          >
            YOHEI KISHIDA
          </span>
        </div>

        {/* Instagramワンポイント */}
        <div className="flex justify-center gap-3 mt-1 mb-6">
          <a
            href="https://www.instagram.com/stand_hair"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#8DA399] hover:text-rose-400 text-2xl transition"
            aria-label="Instagram"
            style={{ fontSize: "2rem" }}
          >
            {/* Instagramアイコン */}
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1" />
            </svg>
          </a>
        </div>

        {/* コメント欄 */}
        <p
          className="mt-7 text-gray-500 text-sm italic"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          Coming soon: more about YOHEI’s story and philosophy.
        </p>
      </div>
    </motion.main>
  );
}
