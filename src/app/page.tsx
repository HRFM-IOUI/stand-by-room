"use client";

import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import Access from "@/components/Access";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import ReserveButton from "@/components/ReserveButton";

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: [0.33, 1, 0.68, 1] }}
      className="min-h-screen bg-white text-gray-900 font-sans relative"
      style={{ fontFamily: "Helvetica, Arial, sans-serif", background: "#fff" }}
    >
      {/* ==== Heroバナー ==== */}
      <HeroBanner />

      {/* アクセス＋SNS */}
      <section className="py-6 md:py-10">
        <Access />
        <div className="flex justify-center mt-4 mb-2">
          <SocialLinks />
        </div>
      </section>

      {/* StickyなRESERVEボタン（右下・半透明ブランドカラー） */}
      <ReserveButton />

      <Footer />
    </motion.main>
  );
}
