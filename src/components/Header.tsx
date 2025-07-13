"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Staff", href: "/staff" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // 背景タップで閉じる
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // 背景（黒い部分）のみで閉じる
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 w-full bg-white z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center relative">
        {/* PC: メニューを右寄せ */}
        <nav className="hidden md:flex flex-1 justify-end space-x-16">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`pb-0.5 transition-colors ${
                  isActive
                    ? "text-rose-400 font-bold"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        {/* ハンバーガーはスマホ右端 */}
        <button
          className="md:hidden text-2xl absolute right-4 top-1/2 -translate-y-1/2 focus:outline-none z-50"
          onClick={() => setIsOpen(true)}
          aria-label="メニューを開く"
        >
          ☰
        </button>
      </div>

      {/* クリアドロワー */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/30 backdrop-blur-[3.5px] flex justify-end md:hidden transition-all"
          onClick={handleBackdropClick}
        >
          <nav
            className="relative h-full w-[84vw] max-w-xs bg-white/40 backdrop-blur-xl shadow-2xl rounded-l-3xl p-8 flex flex-col space-y-4 animate-clearDrawer"
            style={{
              boxShadow: "0 6px 48px 0 rgba(234,120,146,0.13)",
            }}
            onClick={e => e.stopPropagation()} // ドロワー内クリックは閉じない
          >
            {/* 閉じるボタン */}
            <button
              className="absolute right-3 top-3 bg-white/60 backdrop-blur rounded-full shadow hover:bg-rose-100 w-9 h-9 flex items-center justify-center text-2xl z-10"
              onClick={() => setIsOpen(false)}
              aria-label="メニューを閉じる"
              type="button"
            >×</button>
            {/* メニューリンク */}
            {navItems.map((item, idx) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`w-full text-lg font-medium py-2 px-4 text-center rounded transition
                    ${isActive ? "text-rose-400 font-bold" : "text-gray-600 hover:bg-rose-50"}
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          {/* CSSアニメーション */}
          <style jsx global>{`
            .animate-clearDrawer {
              animation: clearDrawerOpen .42s cubic-bezier(.63,1.6,.43,1.01) forwards;
              transform: translateX(110%) scale(0.98);
              opacity: 0;
            }
            @keyframes clearDrawerOpen {
              to {
                transform: none;
                opacity: 1;
              }
            }
          `}</style>
        </div>
      )}
    </header>
  );
}
