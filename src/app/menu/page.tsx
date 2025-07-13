"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const menuSections = [
  {
    title: "Cut",
    items: [
      { name: "Cut", price: "¥6,600" },
      { name: "Bangs Cut", price: "¥1,100" }
    ]
  },
  {
    title: "Color",
    items: [
      { name: "Color", price: "¥7,700～" },
      { name: "Bleach", price: "¥8,800～" },
      { name: "Double Color", price: "¥16,500～" }
    ]
  },
  {
    title: "Perm",
    items: [
      { name: "Perm", price: "¥8,800～" },
      { name: "Straight Perm", price: "¥13,200～" }
    ]
  },
  {
    title: "Treatment",
    items: [
      { name: "Quick Treatment", price: "¥2,200" },
      { name: "Premium Treatment", price: "¥4,400" }
    ]
  }
];

// カスタムイージング配列（easeOutっぽい動き）
const EASING: [number, number, number, number] = [0.33, 1, 0.68, 1];

// セクション用motionバリアント
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.2 + i * 0.15,
      ease: EASING
    }
  })
};

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASING } }
};

export default function MenuPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: EASING }}
      className="min-h-screen bg-white text-gray-900 font-sans"
    >
      <div className="max-w-2xl mx-auto pt-12 pb-8 px-4">
        {/* タイトル */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: EASING }}
          className="text-4xl md:text-5xl font-serif italic font-bold text-center mb-12 tracking-wide"
        >
          Menu
        </motion.h1>

        {/* 各セクション */}
        {menuSections.map((section, idx) => (
          <motion.section
            key={section.title}
            custom={idx}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mb-12"
          >
            {/* セクションタイトル */}
            <motion.h2
              className="text-2xl md:text-3xl font-serif italic mb-4 tracking-wide text-rose-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 + idx * 0.12, ease: EASING }}
            >
              {section.title}
            </motion.h2>

            {/* 区切り線アニメ */}
            <motion.hr
              className="mb-6 border-black border-t-2 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.22 + idx * 0.13, ease: EASING }}
              style={{ transformOrigin: "left" }}
            />

            {/* メニューリスト */}
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {section.items.map((item) => (
                <motion.li
                  key={item.name}
                  variants={itemVariants}
                  className="flex justify-between items-end px-2 md:px-10"
                  whileHover={{ scale: 1.05, color: "#f43f5e" }}
                >
                  <span className="italic text-lg md:text-2xl">{item.name}</span>
                  <span className="text-lg md:text-2xl font-serif font-semibold">{item.price}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>
        ))}

        <div className="text-xs text-gray-400 mt-10 text-center">
          ※表示価格は税込・カットブロー込み。<br />
          施術により価格が前後する場合があります。
        </div>
      </div>
      <Footer />
    </motion.main>
  );
}
