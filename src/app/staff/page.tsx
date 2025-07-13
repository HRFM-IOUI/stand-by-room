"use client";
import { motion } from "framer-motion";

export default function StaffPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="min-h-[75vh] flex flex-col items-center justify-center pt-24 pb-20 bg-white"
    >
      <div className="w-full max-w-xl mx-auto text-center">
        {/* STAFFタイトル */}
        <h1 className="text-5xl md:text-7xl font-serif italic font-bold mb-3 tracking-wide">
          STAFF
        </h1>
        {/* サブタイトル */}
        <div className="italic text-xl text-gray-500 mb-8">Stylist</div>
        
        {/* スタッフ名 */}
        <div className="mb-4">
          <span className="text-3xl md:text-5xl font-bold font-serif tracking-widest text-gray-900">
            YOHEI KISHIDA
          </span>
        </div>
        
        {/* Instagramワンポイント（必要なら） */}
        <div className="flex justify-center gap-3 mt-2 mb-6">
          <a
            href="https://www.instagram.com/stand_hair"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gray-500 hover:text-rose-400 text-2xl transition"
            aria-label="Instagram"
          >
            {/* Instagramアイコン */}
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1" />
            </svg>
          </a>
        </div>
        
        {/* 今後コメントや一言/画像を追加する欄 */}
        <p className="mt-8 text-gray-500 text-base italic">
          Coming soon: more about YOHEI’s story and philosophy.
        </p>
      </div>
    </motion.main>
  );
}
