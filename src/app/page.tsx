"use client";

import Image from "next/image";
import Greeting from "@/components/Greeting";
import Access from "@/components/Access";
import SocialLinks from "@/components/SocialLinks";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans relative">

      {/* Heroバナー画像（上に移動・余白調整） */}
      <section
        className="flex justify-center px-2
          mt-[-24px] md:mt-[-32px]  // モバイル約1.5cm, PC約2cmマイナス
          pt-10"
      >
        <Image
          src="/stand.png"
          alt="STAND Hero"
          width={900}
          height={600}
          className="rounded-md object-cover max-w-full h-auto"
          priority
        />
      </section>

      {/* キャッチ・詩的フレーズ */}
      <Greeting />

      {/* アクセス（Google Map/住所/TEL/営業時間など） */}
      <Access />

      {/* ソーシャルリンク（QR＋Instagram） */}
      <div className="flex justify-center mt-6">
        <SocialLinks />
      </div>

      {/* お知らせセクション */}
      <section className="bg-gray-100 py-10 px-6">
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

      {/* コピーライト */}
      <footer className="text-center text-xs text-gray-500 py-10 mt-24">
        &copy; {new Date().getFullYear()} STAND. All rights reserved.
      </footer>
    </main>
  );
}
