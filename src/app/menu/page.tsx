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

const EASING: [number, number, number, number] = [0.33, 1, 0.68, 1];

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
      className="min-h-screen bg-white text-gray-900"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <div className="max-w-2xl mx-auto pt-3 md:pt-12 pb-8 px-4">
        {/* タイトル */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: EASING }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-wide"
          style={{ color: "#8DA399" }}
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
              className="text-2xl md:text-3xl font-bold mb-4 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 + idx * 0.12, ease: EASING }}
              style={{ color: "#8DA399" }}
            >
              {section.title}
            </motion.h2>

            {/* 区切り線アニメ */}
            <motion.hr
              className="mb-6 border-t-2 origin-left"
              style={{ borderColor: "#8DA399", transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.22 + idx * 0.13, ease: EASING }}
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
                  whileHover={{ scale: 1.05, color: "#8DA399" }}
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  <span className="text-lg md:text-2xl">{item.name}</span>
                  <span
                    className="text-lg md:text-2xl font-semibold"
                    style={{ color: "#8DA399" }}
                  >
                    {item.price}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>
        ))}

        <div className="text-xs text-gray-400 mt-10 text-center" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
          ※表示価格は税込・カットブロー込み。<br />
          施術により価格が前後する場合があります。
        </div>
      </div>
      <Footer />
    </motion.main>
  );
}
