"use client";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const articles = [
  {
    id: 1,
    title: "A fresh breeze, a new beginning",
    image: "/sample1.jpg",
    excerpt: "お店の最新情報や新スタッフのお知らせなどをお届けします。",
    date: "2025.07.10"
  },
  // ...追加
];

export default function BlogPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-white text-gray-900 font-serif"
    >
      {/* タイトル */}
      <section className="pt-20 pb-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="text-5xl md:text-6xl italic font-semibold tracking-widest"
        >
          NEWS
        </motion.h1>
        <div className="mx-auto w-24 border-b-4 border-gray-300 mt-4" />
      </section>

      {/* 本文エリア */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* 最新記事メイン（2カラム分を使う） */}
        <div className="md:col-span-2 space-y-10">
          {articles.map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 * i, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border p-6 flex flex-col gap-3"
            >
              <img src={a.image} alt="" className="w-full h-72 object-cover rounded-lg mb-4" />
              <div className="text-lg font-bold mb-1">{a.title}</div>
              <div className="text-sm text-gray-600 mb-2">{a.date}</div>
              <p className="text-base text-gray-700">{a.excerpt}</p>
            </motion.article>
          ))}
        </div>

        {/* サイドバー */}
        <div className="md:col-span-1 space-y-10">
          {/* Latest */}
          <motion.section
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="font-bold italic text-2xl border-b-2 border-black inline-block mb-2">Latest</div>
            <ul className="space-y-2 text-gray-700 mt-2">
              {articles.map((a) => (
                <li key={a.id} className="hover:text-rose-400 transition">{a.title}</li>
              ))}
            </ul>
          </motion.section>
          {/* Archive & Search（ダミー） */}
          <motion.section
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <div className="font-bold italic text-2xl border-b-2 border-black inline-block mb-2">Archive</div>
            <ul className="space-y-1 text-gray-500 text-sm">
              <li>2025年7月 (1)</li>
              <li>2025年6月 (2)</li>
              {/* ... */}
            </ul>
            <div className="font-bold italic text-2xl border-b-2 border-black inline-block mt-6 mb-2">Search</div>
            <input type="text" placeholder="キーワード検索" className="border rounded p-1 w-full" />
          </motion.section>
        </div>
      </div>
      <Footer />
    </motion.main>
  );
}
