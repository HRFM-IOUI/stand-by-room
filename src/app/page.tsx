"use client";

import Image from "next/image";
import Greeting from "@/components/Greeting";
import Access from "@/components/Access";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans relative">
      {/* Heroバナー画像（上下余白をしっかり詰める） */}
      <section className="
        flex justify-center px-2
        mt-[-72px] md:mt-[-112px]  /* スマホ約2cm、PC約3cm上に詰める */
        pt-4
      ">
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
      <section className="mt-6 mb-6">
        <Greeting />
      </section>

      {/* Access（住所＋地図）＋ ソーシャル */}
      <section className="py-4">
        <Access />
        <div className="flex justify-center mt-4 mb-2">
          <SocialLinks />
        </div>
      </section>

      {/* お知らせセクション */}
      <section className="bg-gray-100 py-4 px-6">
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
    </main>
  );
}
