"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGripVertical } from "react-icons/fa";  // ← 縦グリップ

const navItems = [
  { name: "Home", href: "/" },
  { name: "Staff", href: "/staff" },
  { name: "Menu", href: "/menu" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  return (
    <header
      className="sticky top-0 left-0 w-full bg-white z-50"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-end">
        {/* PC用ナビ */}
        <nav className="hidden md:flex space-x-10">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`pb-0.5 transition-colors font-medium text-base
                  ${
                    isActive
                      ? "text-[#8DA399] font-bold"
                      : "text-gray-400 hover:text-[#8DA399]"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        {/* スマホ用リークト（縦グリップ）アイコン・PCでは消える */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
          style={{
            width: 40,
            height: 40,
            // displayは絶対にここに書かない！！（Tailwindのクラスで管理する！）
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            background: "transparent",
            border: "none",
          }}
        >
          <FaGripVertical size={24} color="#000" />
        </button>
      </div>
      {/* モバイルモーダルメニュー */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-start justify-center"
          onClick={handleBackdropClick}
        >
          <div
            className="mt-24 w-[90vw] max-w-xs rounded-2xl bg-white/80 backdrop-blur-md shadow-2xl flex flex-col items-center py-8 px-6 relative"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            <div className="flex flex-col items-center w-full space-y-3">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`w-full text-lg py-2 px-4 text-center rounded transition
                      ${
                        isActive
                          ? "text-[#8DA399] font-bold"
                          : "text-gray-700 hover:text-[#8DA399]"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <button
              className="absolute right-4 top-4 w-9 h-9 flex items-center justify-center text-2xl"
              onClick={() => setIsOpen(false)}
              aria-label="メニューを閉じる"
              style={{
                color: "#8DA399",
                background: "#f5f8f7",
                borderRadius: "9999px",
                boxShadow: "0 1px 8px rgba(0,0,0,0.08)",
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
