"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Greeting from "@/components/Greeting";
import Access from "@/components/Access";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: [0.33, 1, 0.68, 1] }}
      className="min-h-screen bg-white text-gray-900 font-sans relative"
    >
      {/* ==== Heroバナー＋立体STANDロゴ＋キャッチコピー ==== */}
      <section className="flex flex-col items-center justify-center mt-[-40px] md:mt-[-90px] pt-12 select-none">
  {/* STANDロゴ */}
  <h1
    className="
      text-[48px] md:text-[84px]
      font-black italic tracking-[0.28em]
      text-gray-900
      [text-shadow:0_2px_24px_rgba(70,70,70,0.11),0_1px_0px_rgba(255,255,255,0.18)]
      mb-2
      transition-all
    "
    style={{
      letterSpacing: "0.28em",
      fontFamily: "serif", // もしこだわるならカスタムフォント推奨
    }}
  >
    STAND
  </h1>
  {/* キャッチコピー */}
  <div className="mt-[-6px] mb-4">
    <span className="text-base md:text-xl italic text-gray-600 tracking-wide font-light">
      Alternative luxury for every style.
    </span>
  </div>
  {/* Heroバナー画像（小さめ・淡いシャドウ・余白多め） */}
  <div className="w-full flex justify-center">
    <Image
      src="/stand.png"
      alt="STAND Hero"
      width={540}
      height={320}
      className="rounded-xl object-cover max-w-full h-auto shadow-lg border border-gray-100/50"
      priority
    />
  </div>
</section>


      {/* キャッチ・詩的フレーズ */}
      <section className="mt-8 mb-10 md:mt-12 md:mb-14">
        <Greeting />
      </section>

      {/* Access（住所＋地図）＋ ソーシャル */}
      <section className="py-6 md:py-10">
        <Access />
        <div className="flex justify-center mt-4 mb-2">
          <SocialLinks />
        </div>
      </section>

      {/* お知らせセクション */}
      <section className="bg-gray-100 py-8 px-6 md:py-12">
        <h2 className="text-xl font-semibold mb-4 text-left md:text-center">お知らせ</h2>
        <ul className="space-y-4 text-sm md:text-base">
          <li className="border-b pb-2">・2025年8月 NEW OPEN予定！</li>
          <li className="border-b pb-2">・ご予約はLINEより受け付けております。</li>
          <li className="border-b pb-2">・スタッフ情報などは随時更新いたします。</li>
        </ul>
      </section>

      {/* StickyなRESERVEボタン */}
      <div className="fixed bottom-4 left-0 w-full flex justify-center z-50 pointer-events-none">
        <a
          href="https://lin.ee/xxxxxx"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full text-sm tracking-widest font-semibold shadow-md transition"
        >
          RESERVE
        </a>
      </div>

      {/* フッター */}
      <Footer />
    </motion.main>
  );
}
