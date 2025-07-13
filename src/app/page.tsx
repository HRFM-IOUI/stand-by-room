"use client";
import Image from "next/image";
import Greeting from "@/components/Greeting";
import Access from "@/components/Access";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans relative">

      {/* Heroバナー画像（余白をしっかり詰める） */}
      <section
        className="
          flex justify-center px-2
          mt-[-24px] md:mt-[-48px]
          pt-6 md:pt-10
        "
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

      {/* アクセス（Google Map/住所＋Instagram） */}
      <div className="mt-4 mb-2">
        <Access />
        <div className="flex justify-center mt-2">
          <SocialLinks />
        </div>
      </div>

      {/* お知らせセクション */}
      <section className="bg-gray-100 py-8 px-4 mt-4">
        <h2 className="text-xl font-semibold mb-3 text-left md:text-center">お知らせ</h2>
        <ul className="space-y-2 text-sm md:text-base">
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

      {/* 最下部フッター */}
      <Footer />
    </main>
  );
}
