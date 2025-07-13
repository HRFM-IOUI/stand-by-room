"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// --- ナビアイテム ---
const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Staff", href: "/staff" },
  { name: "Map", href: "/map" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* スマホ：中央にテキストロゴ */}
        <div className="text-xl font-bold mx-auto md:mx-0 md:block">
          STAND
        </div>

        {/* PCナビ：左から2cm(約32px=8の4倍=32px=ml-8くらい)右寄せ */}
        <nav className="hidden md:flex space-x-8 ml-16">
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
          className="md:hidden text-2xl absolute right-4 top-1/2 -translate-y-1/2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col px-4 py-2 space-y-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-2 border-b border-gray-200 ${
                    isActive
                      ? "text-rose-400 font-bold"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
